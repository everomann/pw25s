import { IProduct } from "@/commons/interfaces";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import ProductCard from "@/components/ProductCard";
import ProductService from "@/services/ProductService";
import CategoryService from "@/services/CategoryService";
import { Box, Button, Heading, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export function HomePage() {
    const { reset } = useForm<IProduct>();
    const [apiError, setApiError] = useState("");
    const [products, setProducts] = useState<IProduct[]>([]);
    const [categoryName, setCategoryName] = useState<string>("");
    const { id, categoryId } = useParams();

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber: number) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        loadData();
    }, [categoryId]);

    const loadData = async () => {
        setApiError("");
        let responseProducts;
        if (categoryId) {
            responseProducts = await ProductService.findProductByCategoryId(Number(categoryId));
            const responseCategory = await CategoryService.findById(Number(categoryId));
            if (responseCategory.status === 200) {
                setCategoryName(responseCategory.data.name);
            }
        } else {
            responseProducts = await ProductService.findAll();
            setCategoryName("");
        }

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
                        {categoryId ? `Produtos da Categoria ${categoryName}` : "Todos os produtos"}
                    </Heading>

                    <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={8} my='25px'>
                        {currentProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </SimpleGrid>
                    <Box mt="4" display="flex" justifyContent="center" className="pagination">
                        {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
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
