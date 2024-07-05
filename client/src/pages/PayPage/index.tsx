import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { Box, Button, Card, CardBody, CardHeader, Divider, Flex, Heading, HStack, Icon, Image, Stack, StackDivider, Text } from "@chakra-ui/react";


const PayPage: React.FC = () => {


        return (
            <>
                <NavBar />

                <Box as="main" minHeight="100vh" paddingBottom="4rem" className="container" >
                <Box className="text-center" mt="150px">
                    <Box>
                        <Flex alignItems="center" justifyContent='space-between'>
                            <Box>
                                <Heading as="h1" fontSize="2rem" fontWeight="700">
                                    Finalizar Pedido
                                </Heading>
                            </Box>
                        </Flex>
                        <Divider />

                        <Flex direction={{ base: 'column', lg: 'row' }} gap={5} p={5}>
                            <Box flex="2" mr={5}>
                                    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' borderRadius={20} mb='5px'>
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
                                                            <Text fontWeight='700'>Nome item</Text>
                                                            <Text mt="2">R$ preço</Text>
                                                        </Box>
                                                        <Box>
                                                            <Text fontWeight='700'>Quantidade: </Text>
                                                            <Text mt="2" fontWeight='700'>Tamanho: M</Text>
                                                        </Box>
                                                        <Box as={Flex} alignItems='center'>
                                                            <Box>
                                                                <Text m={0} fontWeight='700'>Preço à vista</Text>
                                                                <Text m={0} fontWeight='700'>R$ preçototal</Text>
                                                            </Box>
                                                        </Box>
                                                    </Flex>
                                                </HStack>
                                            </Box>
                                        </CardBody>
                                    </Card>
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
                                                <Text fontWeight='700' m={0}>R$ valor</Text>
                                            </Box>
                                            <Box as={Flex} alignItems='center' justifyContent='space-between'>
                                                <Text m={0}>Frete:</Text>
                                                <Text fontWeight='700' m={0}>R$ 0,00</Text>
                                            </Box>
                                            <Box bg='green.100' borderRadius='10px' as={Flex} alignItems='center' justifyContent='space-between' py='20px' px='10px'>
                                                <Text m={0}>Total à vista:</Text>
                                                <Text m={0} fontWeight='700'>R$ valor</Text>
                                            </Box>
                                            <Box width="100%">
                                                <Button variant='solid' bg='black' color='white' _hover={{ bg: "gray.300" }} style={{ width: "100%" }}>
                                                    Finalizar Pedido
                                                </Button>
                                            </Box>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
                
            </Box>

                <Footer />

            </>

        );
};

export default PayPage;