import { ChangeEvent, useState } from "react";
import AuthService from "@/services/AuthService";
import { Box, Center, Flex, FormControl, FormLabel, Heading, Link as ChakraLink, Alert, AlertIcon, AlertDescription } from "@chakra-ui/react";
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom'
import { ButtonWithProgress } from "@/components/ButtonWithProgress";
import { RegInput } from "@/components/RegInput";
import { IUserSignup } from "@/commons/interfaces";

export function UserSignupPage() {

    const [form, setForm] = useState({
        displayName: "",
        username: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        displayName: "",
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

        setErrors((prev) => ({ ...prev, [name]: undefined }));
        setApiError("");
    };

    const onClickSignup = async () => {
        setPendingApiCall(true);

        event?.preventDefault();
        const user: IUserSignup = {
            displayName: form.displayName,
            username: form.username,
            password: form.password,
        };

        const response = await AuthService.signup(user);
        if (response.status === 200 || response.status === 201) {
            setApiSuccess("Cadastrado com sucesso!");
            setTimeout(() => {
                navigate("/login");
            }, 1500);
        } else {
            setApiError("Falha ao cadastrar o usuário!");
            if (response.data.validationErrors) {
                setErrors(response.data.validationErrors);
            }
            setPendingApiCall(false);
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

                <Flex width="full" height={"100vh"} alignContent={"center"} justifyContent={"center"}>
                    <Center>
                        <Box maxWidth="500px" border='1px' borderRadius='8' p={10} boxShadow="lg">
                            <Box textAlign="center">
                                <Heading as="h3" size='lg'>Novo usuário</Heading>
                            </Box>
                            <Box my={6} mx={4} textAlign="left">
                                <form>
                                    <FormControl id="displayName" mb={4}>
                                        <FormLabel>Informe o seu nome</FormLabel>
                                        <RegInput
                                            id="displayName"
                                            name="displayName"
                                            type="text"
                                            placeholder="Informe o seu nome"
                                            className="form-control"
                                            onChange={onChange}
                                            value={form.displayName}
                                            hasError={errors.displayName ? true : false}
                                            error={errors.displayName}
                                        />
                                    </FormControl>
                                    <FormControl id="username" mb={3}>
                                        <FormLabel>Usuário</FormLabel>
                                        <RegInput
                                            id="username"
                                            name="username"
                                            placeholder="Informe o usuário"
                                            className="form-control"
                                            type="text"
                                            onChange={onChange}
                                            value={form.username}
                                            hasError={errors.username ? true : false}
                                            error={errors.username}
                                        />
                                    </FormControl>
                                    <FormControl id="password" mb={6}>
                                        <FormLabel>Senha</FormLabel>
                                        <RegInput
                                            id="password"
                                            name="password"
                                            placeholder="Informe a sua senha"
                                            className="form-control"
                                            type="password"
                                            onChange={onChange}
                                            value={form.password}
                                            hasError={errors.password ? true : false}
                                            error={errors.password}
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
                                        onClick={onClickSignup}
                                        disabled={pendingApiCall}
                                        pendingApiCall={pendingApiCall}
                                        text="Cadastrar">
                                    </ButtonWithProgress >
                                </form>
                                <Box mt={4} textAlign="center">
                                    <ChakraLink as={ReactRouterLink} to="/login">Já possui cadastro? Faça login</ChakraLink>
                                </Box>
                            </Box>
                        </Box>

                    </Center>
                </Flex>
            </Box>
        </>

    );
}
