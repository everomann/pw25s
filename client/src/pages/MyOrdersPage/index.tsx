import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { Box } from "@chakra-ui/react";


const MyOrdersPage: React.FC = () => {

    return (
        <>
            <NavBar />

            <Box as="main" minHeight="100vh" paddingBottom="4rem" className="container">

            </Box>

            <Footer />
        </>

    );

}

export default MyOrdersPage;