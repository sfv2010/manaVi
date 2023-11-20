import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/Login/LoginPage";
import OrderPage from "./components/pages/Order/OrderPage";
import ErrorPage from "./components/pages/Error/ErrorPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />}></Route>
                <Route path="/order/:username" element={<OrderPage />}></Route>
                <Route path="*" element={<ErrorPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
