import { BrowserRouter,Routes, Route, Router, Navigate } from "react-router-dom";
import Login from "../PostService/Login";
import Register from "../PostService/Register";
import ForgotPassword from "../PostService/ForgotPassword";
import NotFondPage from "../NotFoundPage/NotFondPage";
import About from "../About/About";
import Profile from "../Profile/Profile";
import Content from "../Content/Content";
import { accessToken } from "../Token/Token";

const AppRouter = () => {
    return (
        <div>
            {accessToken ?
                <BrowserRouter>
                    <Routes>
                        <Route path='/About' element={<About />} />
                        <Route path='/Profile' element={<Profile />} />
                        <Route path='/NotFound' element={<NotFondPage children='Back to Home' navigate='/About' />} />
                        <Route path='/' element={<Content/>} />
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
                        <Route path='/NotFound' element={<NotFondPage children='Back to Login' navigate='/Login' />} />
                        <Route path='/' element={<Content/>} />
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