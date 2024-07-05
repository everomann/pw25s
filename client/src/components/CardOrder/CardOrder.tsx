import React from 'react';
import { Box, Text, Card, Image, CardBody, Heading, Flex, HStack } from '@chakra-ui/react';


const CardOrder: React.FC<{ orders: any }> = ({ orders }) => {


    return (
        <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' borderRadius={20}>
            <CardBody>
                <Box>

                    <Flex justifyContent='space-between'>
                        <Box>
                            <Heading>Id do pedido</Heading>
                            <Text mt="2">Data do Pedido</Text>
                        </Box>
                        <Box>
                            <Heading>Total: R$ 1000</Heading>
                        </Box>
                    </Flex>
                    <HStack spacing="50">
                        <Box flex="1">
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '200px' }}
                                src='https://cdn-images.farfetch-contents.com/19/17/16/72/19171672_43259645_1000.jpg'
                                alt='Caffe Latte'
                            />
                        </Box>
                        <Flex flex="2" justifyContent='space-between'>
                            <Box>
                                <Heading>Nome Produto</Heading>
                                <Text mt="2">DescProduto</Text>
                            </Box>
                            <Box>
                                <Heading>Quantidade</Heading>
                                <Text mt="2">Tamanho</Text>
                            </Box>
                            <Box>
                                <Heading>Preço</Heading>

                            </Box>
                        </Flex>
                    </HStack>
                </Box>
            </CardBody>


        </Card>



    );



}

export default CardOrder;