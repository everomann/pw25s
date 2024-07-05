import { IProduct } from "@/commons/interfaces";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import ProductCard from "@/components/ProductCard";
import ProductService from "@/services/ProductService";
import { Box, Button, Heading, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export function HomePage() {
    const {
        // formState: { errors, isSubmitting },
        reset,
    } = useForm<IProduct>();
    // const [data, setData] = useState<IProduct[]>([]);
    const [apiError, setApiError] = useState("");
    const [product, setProducts] = useState<IProduct[]>([]);
    const { id } = useParams();

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = product.slice(indexOfFirstProduct, indexOfLastProduct);


    const paginate = (pageNumber: number) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setApiError("");
        const responseProducts = await ProductService.findAll();
        if (responseProducts.status === 200) {
            setProducts(responseProducts.data);
        } else {
            setApiError("Falha ao carregar a lista de Produtos!");
        }

        if (id) {
            const response = await ProductService.findById(Number(id));
            if (response.status === 200) {
                reset(response.data);
            } else {
                setApiError("Falha ao carregar o produto!");
            }
        }
    };

    return (
        <>
            <NavBar />
            <Box as="main" minHeight="100vh" paddingBottom="4rem" className="container">
                <Box className="text-center" mt="150px">
                    <Heading as="h1" fontSize="2rem" fontWeight="700">
                        Todos os produtos
                    </Heading>

                    <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={8} my='25px'>
                        {currentProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </SimpleGrid>
                    <Box mt="4" display="flex" justifyContent="center" className="pagination">
                        {Array.from({ length: Math.ceil(product.length / productsPerPage) }, (_, index) => (
                            <Button
                                key={index + 1}
                                onClick={() => paginate(index + 1)}
                                bg={currentPage === index + 1 ? "black" : "white"}
                                color={currentPage === index + 1 ? "white" : "black"}
                                mx="3px"
                            >
                                {index + 1}
                            </Button>
                        ))}
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>

    );

}