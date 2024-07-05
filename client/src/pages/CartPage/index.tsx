// src/pages/CartPage.tsx

import { ICartItem } from '@/commons/interfaces';
import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import AuthService from '@/services/AuthService';
import CartService from '@/services/CartService';
import {
    Box, Button, Card, CardBody, CardHeader, Divider, Flex, HStack, Heading, Icon, Image, Stack, StackDivider, Text,
    AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay,
    useToast
} from '@chakra-ui/react';
import React, { useState, useEffect, useRef } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const CartPage: React.FC = () => {
    const [cartItems, setCartItems] = useState<ICartItem[]>([]);
    const [isClearCartAlertOpen, setIsClearCartAlertOpen] = useState(false);
    const [isRemoveItemAlertOpen, setIsRemoveItemAlertOpen] = useState(false);
    const [itemToRemove, setItemToRemove] = useState<number | undefined>(undefined);
    const cancelRef = useRef<HTMLButtonElement>(null);

    const navigate = useNavigate();
    const toast = useToast()

    useEffect(() => {
        setCartItems(CartService.getCartItems());
    }, []);

    const handleRemoveFromCart = (productId: number | undefined) => {
        if (productId !== undefined) {
            CartService.removeFromCart(productId);
            setCartItems(CartService.getCartItems());
            setIsRemoveItemAlertOpen(false);
        }
    };

    const handleClearCart = () => {
        CartService.clearCart();
        setCartItems(CartService.getCartItems());
        setIsClearCartAlertOpen(false);
    };

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const onClickGoToPay = () => {
        if (AuthService.isAuthenticaded()) {
            navigate(`/pay`);
        } else {
            toast({
                title: 'Aviso.',
                description: "Faça login para continuar.",
                status: 'info',
                duration: 1000,
                isClosable: true,
            });
            navigate(`/login`);
        }
    };

    return (
        <>
            <NavBar />

            <Box as="main" minHeight="100vh" paddingBottom="4rem" className="container">
                <Box className="text-center" mt="150px">
                    <Flex alignItems="center" justifyContent='space-between'>
                        <Box>
                            <Heading as="h1" fontSize="2rem" fontWeight="700">
                                Carrinho de compras
                            </Heading>
                        </Box>
                        <Box>
                            <Button variant='outline' colorScheme='black' _hover={{ bg: "gray.200" }} onClick={() => setIsClearCartAlertOpen(true)}>
                                <Icon as={FaTrash} boxSize={5} mx="5px" />
                                Limpar Carrinho
                            </Button>
                        </Box>
                    </Flex>
                    <Divider />

                    {cartItems.length === 0 ? (
                        <Heading size='md' m={0}>O carinho está vazio</Heading>
                    ) : (
                        <Flex direction={{ base: 'column', lg: 'row' }} gap={5} p={5}>
                            <Box flex="2" mr={5}>
                                {cartItems.map((item: ICartItem) => (
                                    <Card key={item.id} direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' borderRadius={20} mb='5px'>
                                        <CardBody>
                                            <Box>
                                                <HStack spacing="30">
                                                    <Box>
                                                        <Image
                                                            objectFit='cover'
                                                            maxW={{ base: '100%', sm: '80px' }}
                                                            src='https://cdn-images.farfetch-contents.com/19/17/16/72/19171672_43259645_1000.jpg'
                                                            alt='Caffe Latte'
                                                        />
                                                    </Box>
                                                    <Flex flex="2" justifyContent='space-between'>
                                                        <Box>
                                                            <Text fontWeight='700'>{item.name}</Text>
                                                            <Text mt="2">R$ {item.price}</Text>
                                                        </Box>
                                                        <Box>
                                                            <Text fontWeight='700'>Quantidade: {(item.quantity)}</Text>
                                                            <Text mt="2" fontWeight='700'>Tamanho: M</Text>
                                                        </Box>
                                                        <Box as={Flex} alignItems='center'>
                                                            <Box>
                                                                <Text m={0} fontWeight='700'>Preço à vista</Text>
                                                                <Text m={0} fontWeight='700'>R$ {(item.price * item.quantity).toFixed(2)}</Text>
                                                            </Box>
                                                        </Box>
                                                        <Box as={Flex} alignItems='center'>
                                                            <Button variant='outline' colorScheme='black' _hover={{ bg: "gray.200" }} onClick={() => { setItemToRemove(item.id); setIsRemoveItemAlertOpen(true); }}>
                                                                <Icon as={FaTrash} boxSize={5} mx="0px" />
                                                            </Button>
                                                        </Box>
                                                    </Flex>
                                                </HStack>
                                            </Box>
                                        </CardBody>
                                    </Card>
                                ))}

                            </Box>
                            <Box flex="1" maxW={{ base: '100%', lg: '400px' }}>
                                <Card>
                                    <CardHeader>
                                        <Heading size='md' m={0}>Resumo</Heading>
                                    </CardHeader>
                                    <CardBody>
                                        <Stack divider={<StackDivider />} spacing='4' >
                                            <Box as={Flex} alignItems='center' justifyContent='space-between'>
                                                <Text m={0}>Valor dos Produtos:</Text>
                                                <Text fontWeight='700' m={0}>R$ {totalAmount.toFixed(2)}</Text>
                                            </Box>
                                            <Box as={Flex} alignItems='center' justifyContent='space-between'>
                                                <Text m={0}>Frete:</Text>
                                                <Text fontWeight='700' m={0}>R$ 0,00</Text>
                                            </Box>
                                            <Box bg='green.100' borderRadius='10px' as={Flex} alignItems='center' justifyContent='space-between' py='20px' px='10px'>
                                                <Text m={0}>Total à vista:</Text>
                                                <Text m={0} fontWeight='700'>R$ {totalAmount.toFixed(2)}</Text>
                                            </Box>
                                            <Box width="100%">
                                                <Button variant='solid' bg='black' color='white' _hover={{ bg: "gray.300" }} style={{ width: "100%" }} onClick={onClickGoToPay}>
                                                    Ir para pagamento
                                                </Button>
                                            </Box>
                                            <Box>
                                                <Link to='/home' ><Text fontWeight={800} _hover={{ textDecoration: "underline" }} mb={0}>Continuar Comprando</Text></Link>
                                            </Box>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Box>
                        </Flex>
                    )}
                </Box>
            </Box>
            <Footer />

            <AlertDialog
                isOpen={isClearCartAlertOpen}
                leastDestructiveRef={cancelRef}
                onClose={() => setIsClearCartAlertOpen(false)}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Limpar Carrinho
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Tem certeza que quer limpar o carrinho?
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={() => setIsClearCartAlertOpen(false)}>
                                Cancelar
                            </Button>
                            <Button colorScheme="red" onClick={handleClearCart} ml={3}>
                                Limpar
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>

            <AlertDialog
                isOpen={isRemoveItemAlertOpen}
                leastDestructiveRef={cancelRef}
                onClose={() => setIsRemoveItemAlertOpen(false)}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Remover Item
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Tem certeza que quer remover este item do carrinho?
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={() => setIsRemoveItemAlertOpen(false)}>
                                Cancelar
                            </Button>
                            <Button colorScheme="red" onClick={() => handleRemoveFromCart(itemToRemove)} ml={3}>
                                Remover
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
};

export default CartPage;
