import { IProduct } from "@/commons/interfaces";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { NumberInputQuantity } from "@/components/NumberInput";
import CartService from "@/services/CartService";
import ProductService from "@/services/ProductService";
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Icon, Image, Select, Stack, Text, useToast } from "@chakra-ui/react";
import { BsBag } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import React from 'react';

const ProductPage: React.FC = () => {
    const [product, setProduct] = useState<IProduct | null>(null);
    const { id } = useParams<{ id: string }>();
    const [apiError, setApiError] = useState("");
    const [quantity, setQuantity] = useState<number>(1);
    const navigate = useNavigate();
    const toast = useToast();

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const response = await ProductService.findById(id as any);
            setProduct(response.data);
        } catch (error) {
            setApiError("Falha ao carregar o produto!");
        }
    };

    const handleAddToCart = () => {
        if (product) {
            CartService.addToCart(product);
            console.log('Produto adicionado ao carrinho:', product);

            toast({
                title: 'Produto adicionado ao carrinho',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    const handleAddToCartAndBuyNow = () => {
        if (product) {
            CartService.addToCart(product);
            console.log('Produto adicionado ao carrinho:', product);

            toast({
                title: 'Produto adicionado ao carrinho',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });

            navigate('/cart')
        }
    };

    return (
        <>
            <NavBar />

            <Box as="main" minHeight="100vh" paddingBottom="4rem" className="container">
                {product ? (
                    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' borderRadius={20} mt="150px">
                        <Box ml='100px'>
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', md: '500px' }}
                                src='https://cdn-images.farfetch-contents.com/19/17/16/72/19171672_43259645_1000.jpg'
                                alt={product.name}
                            />

                        </Box>

                        <Stack ml='100px'>
                            <CardBody>
                                <Box>
                                    <Heading>{product.name}</Heading>
                                    <Text mt="2">{product.description}</Text>
                                </Box>
                                <Box mt='100px'>
                                    <Text color='black' fontSize='5xl'>
                                        R$ {product.price}
                                    </Text>
                                    <Text fontSize='md' m={0}>Até 12x de R$ 100</Text>
                                </Box>
                                <Box mt='100px'>
                                    <NumberInputQuantity onChangeQuantity={setQuantity} />
                                    <Select placeholder='Selecione o Tamanho' mt='25px'>
                                        <option value='P'>P</option>
                                        <option value='M'>M</option>
                                        <option value='G'>G</option>
                                    </Select>
                                </Box>
                                <CardFooter display="flex" justifyContent="space-between" px={0}>
                                    <ButtonGroup width="100%">
                                        <Button flex={1} variant='solid' bg={"black"} color={"white"} _hover={{ bg: "gray.600" }} onClick={handleAddToCartAndBuyNow}>
                                            Comprar agora
                                        </Button>
                                        <Button variant='solid' bg={"black"} color={"white"} _hover={{ bg: "gray.600" }} onClick={handleAddToCart}>
                                            <Icon as={BsBag} boxSize={5} />
                                        </Button>
                                    </ButtonGroup>
                                </CardFooter>


                            </CardBody>
                        </Stack>

                    </Card>
                ) : (
                    <Text>{apiError ? apiError : "Carregando produto..."}</Text>
                )}


            </Box >
            <Footer />
        </>
    )


};

export default ProductPage;
