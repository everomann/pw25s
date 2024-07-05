import { Box, Flex, HStack, Heading, Icon, Link, List, ListItem, Text } from "@chakra-ui/react";
import { FaBarcode } from "react-icons/fa";
import { RiMastercardFill, RiPaypalFill, RiVisaLine } from "react-icons/ri";
import { SiAmericanexpress } from "react-icons/si";

export function Footer() {
    return (
        <Box
            as="footer"
            bg="blackAlpha.300"
            // position="fixed"
            // bottom={0}
            width="100%"
            borderTop="1px solid"
            borderColor="gray.300"
            pt="1.5rem"
            fontSize="0.875rem"
        >
            <Box
                maxW="110rem"
                marginX="50"
                mb="1.5rem"
                borderBottom="1px solid"
                borderColor="white"
            >
                <Flex flexWrap="wrap" alignItems="start" justifyContent="space-between">
                    <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
                        <Heading as="h5" mb="0.5rem" fontSize="0.975rem" fontWeight="700">
                            Fale Conosco
                        </Heading>
                        <List lineHeight="2" justifyContent="center" p={0}>
                            <LinkItem text="Apoio ao cliente" />
                            <LinkItem text="Perguntas frequentes" />
                            <LinkItem text="Pedidos e entregas" />
                            <LinkItem text="Devoluções" />
                            <LinkItem text="Pagamentos em criptomoeda" />
                            <LinkItem text="Termos e condições para promoções gerais" />
                            <LinkItem text="Como comprar" />
                        </List>
                    </Box>
                    <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
                        <Heading as="h5" mb="0.5rem" fontSize="0.975rem" fontWeight="700">
                            Sobre a RESHIRAM
                        </Heading>
                        <List lineHeight="2" justifyContent="center" p={0}>
                            <LinkItem text="Sobre nós" />
                            <LinkItem text="Boutiques parceiras da RESHIRAM" />
                            <LinkItem text="Carreiras" />
                            <LinkItem text="App RESHIRAM" />
                        </List>
                    </Box>
                    <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
                        <Heading as="h5" mb="0.5rem" fontSize="0.975rem" fontWeight="700">
                            Descontos e benefícios
                        </Heading>
                        <List lineHeight="2" justifyContent="center" p={0}>
                            <LinkItem text="Programa de afiliados" />
                            <LinkItem text="Programa de Fidelidade" />
                            <LinkItem text="Descontos para jovens e estudantes" />
                        </List>
                    </Box>
                    <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
                        <Box>
                            <Heading as="h5" mb="0.5rem" fontSize="0.975rem" fontWeight="700">
                                Social
                            </Heading>
                            <Flex justifyContent="start" mb="0.5rem" alignItems="baseline">
                                <Link href="#" mr="0.5rem">
                                    <svg
                                        style={{ width: '1rem', height: '1rem' }}
                                        fill="black"
                                        viewBox="0 0 32 32"
                                        role="img"
                                        aria-label="Navigate to Facebook"
                                        focusable="false"
                                    >
                                        <path
                                            d="m8 14.41v-4.17c0-.42.35-.81.77-.81h2.52v-2.08c0-4.84 2.48-7.31 7.42-7.35 1.65 0 3.22.21 4.69.64.46.14.63.42.6.88l-.56 4.06c-.04.18-.14.35-.32.53-.21.11-.42.18-.63.14-.88-.25-1.78-.35-2.8-.35-1.4 0-1.61.28-1.61 1.73v1.8h4.52c.42 0 .81.42.81.88l-.35 4.17c0 .42-.35.71-.77.71h-4.21v16c0 .42-.35.81-.77.81h-5.21c-.42 0-.8-.39-.8-.81v-16h-2.52a.78.78 0 0 1 -.78-.78"
                                            fillRule="evenodd"
                                        ></path>
                                    </svg>
                                </Link>
                                <Link href="#" mr="0.5rem">
                                    <svg
                                        style={{ width: '1rem', height: '1rem' }}
                                        fill="black"
                                        viewBox="0 0 32 32"
                                        role="img"
                                        aria-label="Navigate to Twitter"
                                        focusable="false"
                                    >
                                        <path
                                            d="m31 6.36c-1.16.49-2.32.82-3.55.95 1.29-.76 2.22-1.87 2.72-3.38a13.05 13.05 0 0 1 -3.91 1.51c-1.23-1.28-2.75-1.94-4.51-1.94-3.41 0-6.17 2.73-6.17 6.12 0 .49.07.95.17 1.38-4.94-.23-9.51-2.6-12.66-6.38-.56.95-.86 1.97-.86 3.09 0 2.07 1.03 3.91 2.75 5.06-1-.03-1.92-.3-2.82-.76v.07c0 2.89 2.12 5.42 4.94 5.98-.63.17-1.16.23-1.62.23-.3 0-.7-.03-1.13-.13a6.07 6.07 0 0 0 5.74 4.24c-2.22 1.74-4.78 2.63-7.66 2.63-.56 0-1.06-.03-1.43-.1 2.85 1.84 6 2.76 9.41 2.76 7.29 0 12.83-4.01 15.51-9.3 1.36-2.66 2.02-5.36 2.02-8.09v-.46c-.03-.17-.03-.3-.03-.33a12.66 12.66 0 0 0 3.09-3.16"
                                            fillRule="evenodd"
                                        ></path>
                                    </svg>
                                </Link>
                                <Link href="#" mr="0.5rem">
                                    <svg
                                        style={{ width: '1rem', height: '1rem' }}
                                        fill="black"
                                        viewBox="0 0 24 24"
                                        role="img"
                                        aria-label="Navigate to Instagram"
                                        focusable="false"
                                    >
                                        <path
                                            d="m23.09.91c-.61-.61-1.33-.91-2.17-.91h-17.84c-.85 0-1.57.3-2.17.91s-.91 1.33-.91 2.17v17.84c0 .85.3 1.57.91 2.17s1.33.91 2.17.91h17.84c.85 0 1.57-.3 2.17-.91s.91-1.33.91-2.17v-17.84c0-.85-.3-1.57-.91-2.17zm-14.48 7.74c.94-.91 2.08-1.37 3.4-1.37 1.33 0 2.47.46 3.41 1.37s1.41 2.01 1.41 3.3-.47 2.39-1.41 3.3-2.08 1.37-3.41 1.37c-1.32 0-2.46-.46-3.4-1.37s-1.41-2.01-1.41-3.3.47-2.39 1.41-3.3zm12.66 11.63c0 .27-.09.5-.28.68a.92.92 0 0 1 -.67.28h-16.7a.93.93 0 0 1 -.68-.28.92.92 0 0 1 -.27-.68v-10.13h2.2a6.74 6.74 0 0 0 -.31 2.05c0 2 .73 3.71 2.19 5.12s3.21 2.12 5.27 2.12a7.5 7.5 0 0 0 3.75-.97 7.29 7.29 0 0 0 2.72-2.63 6.93 6.93 0 0 0 1-3.63c0-.71-.11-1.39-.31-2.05h2.11v10.12zm0-13.95c0 .3-.11.56-.31.77a1.05 1.05 0 0 1 -.77.31h-2.72c-.3 0-.56-.11-.77-.31a1.05 1.05 0 0 1 -.31-.77v-2.58c0-.29.11-.54.31-.76s.47-.32.77-.32h2.72c.3 0 .56.11.77.32s.31.47.31.76z"
                                            fillRule="evenodd"
                                        ></path>
                                    </svg>
                                </Link>
                                <Link href="#" mr="0.5rem">
                                    <svg
                                        style={{ width: '1rem', height: '1rem' }}
                                        fill="black"
                                        viewBox="0 0 24 24"
                                        role="img"
                                        aria-label="Navigate to Pinterest"
                                        focusable="false"
                                    >
                                        <path
                                            d="M12 0c-6.63 0-12 5.37-12 12 0 5.31 3.44 9.82 8.24 11.39-.11-.97-.21-2.46.04-3.52.22-.95 1.43-6.06 1.43-6.06s-.37-.73-.37-1.8c0-1.69.98-2.96 2.2-2.96 1.04 0 1.54.78 1.54 1.71 0 1.04-.67 2.58-1.02 4.02-.29 1.21.61 2.19 1.8 2.19 2.16 0 3.82-2.28 3.82-5.57 0-2.91-2.09-4.95-5.07-4.95-3.46 0-5.49 2.58-5.49 5.24 0 1.03.39 2.13.88 2.73.1.13.11.24.08.37-.08.4-.26 1.21-.3 1.38-.05.21-.17.26-.4.16-1.5-.62-2.43-2.56-2.43-4.13 0-3.36 2.44-6.44 7.06-6.44 3.71 0 6.59 2.64 6.59 6.16 0 3.67-2.31 6.64-5.51 6.64-1.07 0-2.07-.56-2.41-1.22l-.65 2.48c-.23.89-.87 2.01-1.3 2.68.98.3 2.01.46 3.09.46 6.63 0 12-5.37 12-12s-5.37-12-12-12z"
                                            fillRule="evenodd"
                                        ></path>
                                    </svg>
                                </Link>
                            </Flex>
                        </Box>
                        <Box mt={6}>
                            <Heading as="h5" fontSize="0.975rem" fontWeight="700">
                                Formas de pagamento
                            </Heading>
                            <Flex justifyContent="start" alignItems="baseline">
                                <Text mx="0.4rem"><Icon as={RiMastercardFill} boxSize={6} /></Text>
                                <Text mx="0.4rem"><Icon as={RiPaypalFill} boxSize={5} /></Text>
                                <Text mx="0.4rem"><Icon as={RiVisaLine} boxSize={5} /></Text>
                                <Text mx="0.4rem"><Icon as={SiAmericanexpress} boxSize={5} /></Text>
                                <Text mx="0.4rem"><Icon as={FaBarcode} boxSize={5} /></Text>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <Box
                maxW="110rem"
                marginX="50"
            >
                <HStack spacing={10} pb={5}>
                    <Link fontWeight="600" fontSize="0.875rem">Privacidade</Link>
                    <Link fontWeight="600" fontSize="0.875rem">Acessibilidade</Link>
                    <Link fontWeight="600" fontSize="0.875rem">Mapa do site</Link>
                    <Link fontWeight="600" fontSize="0.875rem">Proteção da propriedade intelectual</Link>
                    <Link fontWeight="600" fontSize="0.875rem">Código de Conduta do Fornecedor</Link>
                    <Link fontWeight="600" fontSize="0.875rem">Configurar cookies</Link>
                </HStack>
                <Text color="gray.600" fontSize="0.875rem" m={0} pb={5}>
                    &copy; Copyright 2024. Todos os direitos reservados
                </Text>
            </Box>
        </Box >

    );
}


type LinkItemProps = {
    text?: string;
};

const LinkItem = ({ text }: LinkItemProps) => {
    return (
        <ListItem display="flex">
            <Link
                fontWeight="400"
                href="#"
                color="black"
                _hover={{textDecoration: "underline"}}
            >
                {text}
            </Link>
        </ListItem>
    );
};