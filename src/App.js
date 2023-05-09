import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ColorContext } from './ColorContext/darkContext';
import { InputDetails } from './InputDetails';
import Home from './Pages/Home/Home';
import AddNew from './Pages/GeneralPage/AddItem/AddItem';
import BlogDetail from './Pages/NewDetail/NewDetail';
//import Blogs from './Pages/News/News';
import UserLists from './Pages/DefaultLayoutPage/DefaultLayoutPage';
import DefaultLayoutPage from './Pages/DefaultLayoutPage/DefaultLayoutPage';
import Detail from './Pages/Detail/Detail';
import Login from './Pages/Login/Login';
import UpdateNew from './Pages/GeneralPage/UpdateItem/UpdateItem';
import './app.scss';

const userInpDetails = InputDetails.userInpDetails;
const productInpDetails = InputDetails.productInpDetails;
const blogInputs = InputDetails.blogInputs;

function App() {
    const { darkMode } = useContext(ColorContext);

    return (
        <div className={darkMode ? 'App dark' : 'App'}>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="login" element={<Login />} />

                        {/* customer */}

                        <Route path="customers">
                            <Route index element={<DefaultLayoutPage type="customer" />} />
                            <Route path=":customerId" element={<Detail />} />
                            <Route
                                path="addnew"
                                element={
                                    <AddNew
                                        inputs={userInpDetails}
                                        titlee="Add New Customer"
                                        type="CUSTOMER"
                                    />
                                }
                        />
                            <Route  path="updatenew/:customerId"
                                    element={
                                    <UpdateNew inputs={userInpDetails}
                                     type="CUSTOMER"
                                     titlee="Update Current Customer"
                                     />
                                    }></Route>
                        </Route>

                        {/* promotion */}

                        <Route path="promotions">
                            <Route index element={<UserLists type="promotion" />} />
                            <Route path=":promotionId" element={<Detail />} />
                            <Route
                                path="addnew"
                                element={
                                    <AddNew
                                        inputs={userInpDetails}
                                        titlee="Add New Promotion"
                                        type="PROMOTION"
                                    />
                                }
                        />
                            <Route  path="updatenew/:promotionId"
                                    element={
                                    <UpdateNew inputs={userInpDetails}
                                     type="CUSTOMER"
                                     titlee="Update Current Customer"
                                     />
                                    }></Route>
                        </Route>

                        {/* order */}

                        <Route path="orders">
                            <Route index element={<UserLists type="order" />} />
                            <Route path=":orderId" element={<Detail />} />
                            <Route
                                path="addnew"
                                element={
                                    <AddNew
                                        inputs={userInpDetails}
                                        titlee="Add New Customer"
                                        type="CUSTOMER"
                                    />
                                }
                        />
                            <Route  path="updatenew/:orderId"
                                    element={
                                    <UpdateNew inputs={userInpDetails}
                                     type="CUSTOMER"
                                     titlee="Update Current Customer"
                                     />
                                    }></Route>
                        </Route>
                        
                        <Route path="employees">
                            <Route index element={<DefaultLayoutPage type="employee" />} />
                            <Route path=":employeeId" element={<Detail />} />
                            <Route
                                path="addnew"
                                element={
                                    <AddNew
                                        inputs={userInpDetails}
                                        titlee="Add New Employee"
                                        type="EMPLOYEE"
                                    />
                                }
                        />
                            <Route  path="updatenew"
                                    element={
                                    <UpdateNew inputs={userInpDetails}
                                     type="EMPLOYEE"
                                     titlee="Update Current Employee"
                                     />
                                    }></Route>
                        </Route>

                        {/* employee */}

                        <Route path="employees">
                            <Route index element={<UserLists type="employee" />} />
                            <Route path=":employeeId" element={<Detail />} />
                            <Route
                                path="addnew"
                                element={
                                    <AddNew
                                        inputs={userInpDetails}
                                        titlee="Add New Customer"
                                        type="CUSTOMER"
                                    />
                                }
                        />
                            <Route  path="updatenew/:employeeId"
                                    element={
                                    <UpdateNew inputs={userInpDetails}
                                     type="CUSTOMER"
                                     titlee="Update Current Customer"
                                     />
                                    }></Route>
                        </Route>

                        {/* Store */}

                        <Route path="stores">
                            <Route index element={<UserLists type="store" />} />
                            <Route path=":storeId" element={<Detail />} />
                            <Route
                                path="addnew"
                                element={
                                    <AddNew
                                        inputs={userInpDetails}
                                        titlee="Add New Customer"
                                        type="CUSTOMER"
                                    />
                                }
                        />
                            <Route  path="updatenew/:storeId"
                                    element={
                                    <UpdateNew inputs={userInpDetails}
                                     type="CUSTOMER"
                                     titlee="Update Current Customer"
                                     />
                                    }></Route>
                        </Route>

                        {/* product */}
                        <Route path="products">
                            <Route index element={<DefaultLayoutPage type="product" />} />
                            <Route path=":productId" element={<Detail />} />
                            <Route
                                path="addnew"
                                element={ 
                                    <AddNew
                                        inputs={productInpDetails}
                                        titlee="Add New Product"
                                        type="PRODUCT"
                                    />
                                    
                                }
                            />
                            <Route  path="updatenew"
                                    element={
                                    <UpdateNew inputs={productInpDetails}
                                    type="PRODUCT"
                                    titlee="Update Current Product"
                                     />
                                    }></Route>
                        </Route>

                        {/* new */}

                        <Route path="news">
                            <Route index element={<UserLists type="blog" />} />
                            <Route path=":blogId" element={<BlogDetail />} />
                            <Route
                                path="addnew"
                                element={
                                    <AddNew inputs={blogInputs} titlee="Add New Blog" type="BLOG" />
                                }
                            />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
