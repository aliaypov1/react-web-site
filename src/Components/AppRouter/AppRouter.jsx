import { BrowserRouter,Routes, Route, Router, Navigate } from "react-router-dom";
import Login from "../PostService/Login";
import Register from "../PostService/Register";
import ForgotPassword from "../PostService/ForgotPassword";
import NotFondPage from "../NotFoundPage/NotFondPage";
import About from "../About/About";
import Profile from "../Profile/Profile";

const AppRouter = () => {
    const token = localStorage.getItem('accessToken')
    return (
        <div>
            {token ?
                <BrowserRouter>
                    <Routes>
                        <Route path='/About' element={<About />} />
                        <Route path='/Profile' element={<Profile />} />
                        <Route path='/NotFound' element={<NotFondPage children='Home Page' navigate='/About' />} />
                        <Route
                            path="*"
                            element={<Navigate to="/NotFound" replace />}
                        />
                    </Routes>
                </BrowserRouter> : <BrowserRouter>
                    <Routes>
                        <Route path='/Login' element={<Login />} />
                        <Route path='/Register' element={<Register />} />
                        <Route path='/ForgotPassword' element={<ForgotPassword />} />
                        <Route path='/NotFound' element={<NotFondPage children='Login Page' navigate='/Login' />} />
                        <Route
                            path="*"
                            element={<Navigate to="/NotFound" replace />}
                        />
                    </Routes>
                </BrowserRouter>}
        </div>
    );
};

export default AppRouter;