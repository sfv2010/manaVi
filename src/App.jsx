import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login/LoginPage";
import Order from "./pages/Order/OrderPage";
import Error from "./pages/Error/ErrorPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/order/:username" element={<Order />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
