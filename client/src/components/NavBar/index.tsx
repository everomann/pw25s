import React, { useEffect, useState } from "react";
import AuthService from "@/services/AuthService";
import CategoryService from "@/services/CategoryService";
import {
    Flex,
    Box,
    HStack,
    Link as ChakraLink,
    Icon,
    InputGroup,
    InputLeftElement,
    Input,
    Heading,
    Menu,
    MenuButton,
    Avatar,
    MenuList,
    MenuItem,
    Button
} from "@chakra-ui/react";
import { BsBag, BsGlobe2, BsHeart, BsSearch } from "react-icons/bs";
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';

interface Category {
    id: number;
    name: string;
}

const Links = ['Mulher', 'Homem', 'Kids']

interface Props {
    children: React.ReactNode
}

const NavLink = (props: Props) => {
    const { children } = props;
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

const CategoryMenu = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await CategoryService.findAll();
            if (response.status === 200) {
                setCategories(response.data);
            } else {
                console.error("Failed to fetch categories:", response);
            }
        };

        fetchCategories();
    }, []);

    return (
        <Menu isOpen={isOpen}>
            <MenuButton
                as={Button}
                variant="link"
                px={3}
                py={2}
                rounded={'sm'}
                _hover={{ textDecoration: 'none', bg: 'gray.200' }}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                Categorias
            </MenuButton>
            <MenuList
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                {categories.map((category) => (
                    <MenuItem
                        as={ReactRouterLink}
                        to={`/home/${category.id}`}
                        key={category.id}
                    >
                        {category.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export function NavBar() {
    const navigate = useNavigate();
    const isAuthenticaded = AuthService.isAuthenticaded();

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
                        <ChakraLink as={ReactRouterLink} to="/" px={3} py={2} rounded={'sm'} _hover={{ textDecoration: 'none', bg: 'gray.200' }}><Icon as={BsGlobe2} boxSize={4} /></ChakraLink>
                        <ChakraLink as={ReactRouterLink} to="/wishList" px={2} py={2} rounded={'sm'} _hover={{ textDecoration: 'none', bg: 'gray.200' }}><Icon as={BsHeart} boxSize={4} /></ChakraLink>
                        <ChakraLink as={ReactRouterLink} to="/cart" px={2} py={2} rounded={'sm'} _hover={{ textDecoration: 'none', bg: 'gray.200' }}><Icon as={BsBag} boxSize={4} /></ChakraLink>
                        <Box>
                            <Menu>
                                <MenuButton as={ChakraLink} px={2} py={2} rounded={'sm'} _hover={{ textDecoration: 'none', bg: 'gray.200' }}>
                                    <Avatar size="sm" name="User Name" src="" />
                                </MenuButton>
                                <MenuList>
                                    {isAuthenticaded ? (
                                        <>
                                            <MenuItem onClick={onClickMyOrders}>Meus Pedidos</MenuItem>
                                            <MenuItem onClick={onClickLogout}>LogOut</MenuItem>
                                        </>
                                    ) : (
                                        <MenuItem onClick={onClickLogin}>Login</MenuItem>
                                    )}
                                </MenuList>
                            </Menu>
                        </Box>
                    </HStack>
                </Flex>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <HStack as={'nav'} spacing={5}>
                        <CategoryMenu />
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
                            <InputLeftElement children={<BsSearch color="gray.600" />} />
                            <Input type="text" placeholder="Buscar" border="1px solid #949494" focusBorderColor='black' borderRadius="8" />
                        </InputGroup>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}
