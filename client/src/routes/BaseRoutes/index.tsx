import { Route, Routes } from "react-router-dom";
import { UserSignupPage } from "@/pages/UserSignupPage";
import { LoginPage } from "@/pages/LoginPage";
import { HomePage } from "@/pages/HomePage";
import ProductPage from "@/pages/ProductPage";
import MyOrdersPage from "@/pages/MyOrdersPage";
import { AuthenticatedRoutes } from "../AuthenticatedRoutes";
import CartPage from "@/pages/CartPage";
import PayPage from "@/pages/PayPage";


export function BaseRoutes() {
    return (
        <Routes>
            {/*public routes*/}
            <Route>
                <Route path="/signup" element={<UserSignupPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />

                <Route path="/product" element={<ProductPage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                
                <Route path="/home/:categoryId?" element={<HomePage />} />


            </Route>

            {/*protected routes*/}
            <Route element={<AuthenticatedRoutes />}>
                <Route path="/myOrders" element={<MyOrdersPage />} />
                <Route path="/pay" element={<PayPage />} />

            </Route>

        </Routes>
    )
}