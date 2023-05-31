import { BrowserRouter,Routes, Route, Router, Navigate } from "react-router-dom";
import Login from "../PostService/Login";
import Register from "../PostService/Register";
import ForgotPassword from "../PostService/ForgotPassword";
import NotFondPage from "../NotFoundPage/NotFondPage";
import About from "../About/About";
import Profile from "../Profile/Profile";
import Content from "../Content/Content";
import { accessToken, parsedRoles } from "../Token/Token";
import Dashboard from "../Dashboard/Dashboard";
import Sellercreatecurs from "../Sellercreate/Sellercreatecurs";
import Status from "../Sellercreate/Status";
import Partner from "../Partner/Partner";
import Course from "../Course/Course";
import Details from "../Details/Details";
import SellerRejected from "../Sellercreate/SellerRejected";
import SellerAppruved from "../Sellercreate/SellerAppruved";
import ChangeCurrentPassword from "../PostService/ChangeCurrentPassword";
import MyCourse from "../Course/MyCourse";
import CourseDetails from "../Course/CourseDetails";
import ProfileSearch from "../Profile/ProfileSearch";
import NotRevievid from "../Sellercreate/NotRevievid";
import Security from "../Security/Security";
import ChangeCourse from "../Course/ChangeCourse";
import ProfileSeller from "../Profile/ProfileSeller";
import PagesDetails from "../Pages/PagesDetails";
import Footer from "../Footer/Footer";
import ChangePage from "../Pages/ChangePage";

const AppRouter = () => {
    return (
        <div>
            {accessToken ?
                <BrowserRouter>
                    <Routes>
                        <Route path='/About' element={<About />} />
                        <Route path='/Profile' element={<Profile />} />
                        <Route path='/NotFound' element={<NotFondPage children='Back to Home' navigate='/About' />} />
                        {parsedRoles.includes("Manager")?
                        <Route path='/DashBoard' element={<Dashboard/>}/>:''}
                        <Route path='/' element={<Content/>} />
                        <Route path="/ChangePage/:id" element={<ChangePage/>}/>
                        <Route path='/CreateCursSeller' element={<Sellercreatecurs/>}/>
                        <Route path='/Status' element={<Status/>}/>
                        <Route path='/Partner' element={<Partner/>}/>
                        <Route path='/Course' element={<Course/>}/>
                        <Route path='/Details/:id' element={<Details/>}/>
                        <Route path='/Security' element={<Security/>}/>
                        <Route path='/ChangePassword' element={<ChangeCurrentPassword/>}/>
                        <Route path='/Appruved' element={<SellerAppruved/>}/>
                        <Route path='/Rejected' element={<SellerRejected/>}/>
                        <Route path='/MyCourse' element={<MyCourse/>}/>
                        <Route path='/Course/:id/' element={<CourseDetails/>}/>
                        <Route path='/ProfileSearch/:id/:studentId' element={<ProfileSearch/>}/>
                        <Route path='/NotReviewed' element={<NotRevievid/>}/>
                        <Route path='/ChangeCourse/:id' element={<ChangeCourse/>}/>
                        <Route path='/ProfileSeller' element={<ProfileSeller/>}/>
                        <Route path='/PageDetail/:id' element={<PagesDetails/>}/>
                        <Route
                            path="*"
                            element={<Navigate to="/NotFound" replace />}
                        />
                    </Routes>
                    {/* <Footer/> */}
                </BrowserRouter> : <BrowserRouter>
                    <Routes>
                        <Route path='/Login' element={<Login />} />
                        <Route path='/Register' element={<Register />} />
                        <Route path='/NotFound' element={<NotFondPage children='Back to Login' navigate='/Login' />} />
                        
                        <Route path='/ForgotPassword' element={<ForgotPassword />} />
                        <Route path='/' element={<Content/>} />
                        <Route
                            path="*"
                            element={<Navigate to="/NotFound" replace />}
                        />
                    </Routes>
                    {/* <Footer/> */}
                </BrowserRouter>}
        </div>
    );
};

export default AppRouter;