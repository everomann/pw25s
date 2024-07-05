import { IProduct } from "@/commons/interfaces";
import { Button, ButtonGroup, Card, CardBody, CardFooter, Flex, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { BsBag } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface IProductCard {
    product: IProduct;
}

const ProductCard: React.FC<IProductCard> = ({ product }) => {

    

    const navigate = useNavigate();

    const onClickProduct = () => {
        navigate(`/product/${product.id}`);
    };

    const productPrice = product.price.toFixed(2).replace('.', ',');
    const installmentValue = (product.price / 12).toFixed(2);

    return (
        <>
            <Card maxW="300px" mx="auto" cursor="pointer" onClick={onClickProduct}>
                <CardBody as={Flex} direction="column" pb={0}>
                    <Image
                        objectFit='cover'
                        objectPosition="center"
                        width="100%"
                        height="auto"
                        src='https://cdn-images.farfetch-contents.com/19/17/16/72/19171672_43259645_1000.jpg'
                        alt="Nome do produto"
                    />
                    <Stack mt='6' spacing='0'>
                        <Heading size='md'>{product.name}</Heading>
                        <Text mb={1}>{product.description}</Text>
                        <Text fontSize='2xl' m={0}>
                            R$ {productPrice}
                        </Text>
                        <Text fontSize='sm' m={0}> Até 12x de R$ {installmentValue}</Text>
                    </Stack>
                </CardBody>
                <CardFooter display="flex" justifyContent="space-between" >
                    <ButtonGroup width="100%">
                        <Button flex={1} variant='solid' bg={"black"} color={"white"} _hover={{ bg: "gray.600" }}>
                            Comprar 
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    );
}
export default ProductCard;