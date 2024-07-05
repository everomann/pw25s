import AuthService from "@/services/AuthService";
import { Flex, Box, HStack, Link as ChakraLink, Icon, InputGroup, InputLeftElement, Input, Heading, Menu, Tooltip, MenuButton, Button, Avatar, MenuList, MenuItem, } from "@chakra-ui/react";
import { BsBag, BsGlobe2, BsHeart, BsPerson, BsSearch } from "react-icons/bs";
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom'

interface Props {
    children: React.ReactNode
}

const Links = ['Mulher', 'Homem', 'Kids']

const NavLink = (props: Props) => {
    const { children } = props
    return (
        <Box
            as="a"
            px={3}
            py={2}
            rounded={'sm'}
            _hover={{
                textDecoration: 'none',
                bg: 'gray.200'
            }}
            href={'#'}>
            {children}
        </Box>
    )
}


const navigate = useNavigate()
const isLogado = AuthService.isAuthenticaded();

const onClickLogin = () => {
    navigate("/login");
  };

const onClickLogout = () => {
    AuthService.logout();
    navigate("/login");
};

const onClickMyOrders = () => {
    navigate("/myOrders");
};

export function NavBar() {

    return (
        <Box boxShadow='base' py={3} width="100%" zIndex="10" position="fixed" top="0" bg="white">

            <Box mx={50}>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <HStack as={'nav'} spacing={0}>
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                    </HStack>
                    <Box>
                        <ChakraLink as={ReactRouterLink} _hover={{ textDecoration: 'none' }} to="/"><Heading as='h2' size='xl' >RESHIRAM</Heading></ChakraLink>
                    </Box>
                    <HStack as={'nav'} spacing={0}>
                        <ChakraLink as={ReactRouterLink} to="/login" px={3} py={2} rounded={'sm'} _hover={{ textDecoration: 'none', bg: 'gray.200' }}><Icon as={BsGlobe2} boxSize={4} /></ChakraLink>
                        <ChakraLink as={ReactRouterLink} to="/wishList" px={2} py={2} rounded={'sm'} _hover={{ textDecoration: 'none', bg: 'gray.200' }}><Icon as={BsHeart} boxSize={4} /></ChakraLink>
                        <ChakraLink as={ReactRouterLink} to="/cart" px={2} py={2} rounded={'sm'} _hover={{ textDecoration: 'none', bg: 'gray.200' }}><Icon as={BsBag} boxSize={4} /></ChakraLink>
                        <ChakraLink as={ReactRouterLink} px={2} py={2} rounded={'sm'} _hover={{ textDecoration: 'none', bg: 'gray.200' }}><Icon as={BsPerson} boxSize={5} /></ChakraLink>
                        <Box>
                            <Menu>
                                <Tooltip ml="4" hasArrow label="Painel do usuário" bg="blue.600">
                                    <MenuButton as={Button} variant="link">
                                        <Avatar ml="4" name='nome' src='' backgroundColor="" />
                                    </MenuButton>
                                </Tooltip>
                                <MenuList>
                                    {isLogado ? (
                                        <>
                                            <MenuItem onClick={onClickMyOrders}>Histórico de pedidos</MenuItem>
                                            <MenuItem onClick={onClickLogout}>Sair</MenuItem>
                                        </>
                                    ) : (
                                        <MenuItem onClick={onClickLogin}>Entrar</MenuItem>
                                    )}
                                </MenuList>
                            </Menu>
                        </Box>
                    </HStack>
                </Flex>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <HStack as={'nav'} spacing={5}>
                        <ChakraLink as={ReactRouterLink} _hover={{ textDecoration: 'none', color: 'gray.300' }} to="/" pl={3}>Roupas</ChakraLink>
                        <ChakraLink as={ReactRouterLink} _hover={{ textDecoration: 'none', color: 'gray.300' }} to="/">Sapatos</ChakraLink>
                        <ChakraLink as={ReactRouterLink} _hover={{ textDecoration: 'none', color: 'gray.300' }} to="/">Sneakers</ChakraLink>
                        <ChakraLink as={ReactRouterLink} _hover={{ textDecoration: 'none', color: 'gray.300' }} to="/">Bolsas</ChakraLink>
                        <ChakraLink as={ReactRouterLink} _hover={{ textDecoration: 'none', color: 'gray.300' }} to="/">Acessórios</ChakraLink>
                        <ChakraLink as={ReactRouterLink} _hover={{ textDecoration: 'none', color: 'gray.300' }} to="/">Marcas</ChakraLink>
                        <ChakraLink as={ReactRouterLink} _hover={{ textDecoration: 'none', color: 'gray.300' }} to="/" >Promoçoes</ChakraLink>
                        <ChakraLink as={ReactRouterLink} _hover={{ textDecoration: 'none', color: 'gray.300' }} to="/">Novidades</ChakraLink>
                    </HStack>
                    <Box display='flex' alignItems='center'>
                        <InputGroup size="sm">
                            <InputLeftElement
                                children={<BsSearch color="gray.600" />}
                            />
                            <Input type="text" placeholder="Buscar" border="1px solid #949494" focusBorderColor='black' borderRadius="8" />
                        </InputGroup>
                    </Box>
                </Flex>
            </Box>
        </Box>


    );
}