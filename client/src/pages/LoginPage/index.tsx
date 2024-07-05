import { IUserLogin } from "@/commons/interfaces";
import AuthService from "@/services/AuthService";
import { Box, Center, Flex, FormControl, FormLabel, Heading, Input, Link as ChakraLink, Alert, AlertIcon, AlertDescription } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom'
import { ButtonWithProgress } from "@/components/ButtonWithProgress";

export function LoginPage() {

    const [form, setForm] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();
    const [pendingApiCall, setPendingApiCall] = useState(false);
    const [apiError, setApiError] = useState("");
    const [apiSuccess, setApiSuccess] = useState("");

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setApiError("");
    };

    const onClickLogin = async () => {
        setPendingApiCall(true);
        event?.preventDefault();
        const user: IUserLogin = {
            username: form.username,
            password: form.password,
        };

        const response = await AuthService.login(user);
        if (response.status === 200 || response.status === 201) {
            setApiSuccess("Autenticado com sucesso!");
            setTimeout(() => {
                navigate("/");
            }, 1500);
        } else {
            setPendingApiCall(false);
            setApiError("Falha ao autenticar o usuário!");
        }
    };

    return (
        <>
            <Box boxShadow='base' py={3} width="100%" zIndex="10" position="fixed" top="0" bg="white">
                <Flex alignItems={'center'} justifyContent={'space-around'}>
                    <Box>
                        <ChakraLink as={ReactRouterLink} _hover={{ textDecoration: 'none' }} to="/"><Heading as='h2' size='xl' >RESHIRAM</Heading></ChakraLink>
                    </Box>
                </Flex>
            </Box>


            <Flex width="full" height={"100vh"} alignContent={"center"} justifyContent={"center"}>
                <Center>
                    <Box maxWidth="500px" border='1px' borderRadius='8' p={10} boxShadow="lg">
                        <Box textAlign="center">
                            <Heading as="h3" size='lg'>Login</Heading>
                        </Box>
                        <Box my={6} mx={4} textAlign="left">
                            <form>
                                <FormControl id="username" mb={3}>
                                    <FormLabel>Usuário</FormLabel>
                                    <Input
                                        focusBorderColor='black'
                                        name="username"
                                        className="form-control"
                                        type="text"
                                        onChange={onChange}
                                    />
                                </FormControl>
                                <FormControl id="password" mb={6}>
                                    <FormLabel>Senha</FormLabel>
                                    <Input
                                        focusBorderColor='black'
                                        name="password"
                                        className="form-control"
                                        type="password"
                                        onChange={onChange}
                                    />
                                </FormControl>

                                {apiError && (
                                    <Alert status='error' borderRadius={8} mb={4}>
                                        <AlertIcon />
                                        <AlertDescription>{apiError}</AlertDescription>
                                    </Alert>
                                )}
                                {apiSuccess && (
                                    <Alert status='success' borderRadius={8} mb={4}>
                                        <AlertIcon />
                                        <AlertDescription>{apiSuccess}</AlertDescription>
                                    </Alert>
                                )}

                                <ButtonWithProgress
                                    onClick={onClickLogin}
                                    disabled={pendingApiCall}
                                    pendingApiCall={pendingApiCall}
                                    text="Entrar">
                                </ButtonWithProgress >
                            </form>
                            <Box mt={4} textAlign="center">
                                <ChakraLink as={ReactRouterLink} to="/signup">Novo na RESHIRAM? Cadastre-se</ChakraLink>
                            </Box>
                        </Box>
                    </Box>
                </Center>
            </Flex>
        </>

    );
}