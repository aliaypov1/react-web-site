import { BrowserRouter,Routes, Route, Router, Navigate } from "react-router-dom";
import Login from "../PostService/Login";
import Register from "../PostService/Register";
import ForgotPassword from "../PostService/ForgotPassword";
import NotFondPage from "../NotFoundPage/NotFondPage";
import About from "../About/About";
import Profile from "../Profile/Profile";
import Content from "../Content/Content";
import { accessToken } from "../Token/Token";
import Dashboard from "../Dashboard/Dashboard";
import Sellercreatecurs from "../Sellercreate/Sellercreatecurs";
import Status from "../Sellercreate/Status";
import Partner from "../Partner/Partner";
import Course from "../Course/Course";
import Details from "../Details/Details";

const AppRouter = () => {
    return (
        <div>
            {accessToken ?
                <BrowserRouter>
                    <Routes>
                        <Route path='/About' element={<About />} />
                        <Route path='/Profile' element={<Profile />} />
                        <Route path='/NotFound' element={<NotFondPage children='Back to Home' navigate='/About' />} />
                        <Route path='/DashBoard' element={<Dashboard/>}/>
                        <Route path='/' element={<Content/>} />
                        <Route path='/CreateCursSeller' element={<Sellercreatecurs/>}/>
                        <Route path='/Status' element={<Status/>}/>
                        <Route path='/Partner' element={<Partner/>}/>
                        <Route path='/Course' element={<Course/>}/>
                        <Route path='/Details/:id' element={<Details/>}/>
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