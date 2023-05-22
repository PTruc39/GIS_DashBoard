import { useContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ColorContext } from './ColorContext/darkContext';
import { InputDetails } from './InputDetails';
import Home from './Pages/Home/Home';
import AddNew from './Pages/GeneralPage/AddItem/AddItem';
import NewsDetail from './Pages/NewDetail/NewDetail';
import NewsAdd from './Pages/NewsAdd'
//import Blogs from './Pages/News/News';
import DefaultLayoutPage from './Pages/DefaultLayoutPage/DefaultLayoutPage';
import Detail from './Pages/Detail/Detail';
import Login from './Pages/Login/Login';
import UpdateNew from './Pages/GeneralPage/UpdateItem/UpdateItem';
import ViewNew from './Pages/GeneralPage/ViewItem/ViewItem';
import { useParams } from 'react-router-dom';

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

                        <Route path="products">
                            <Route index element={<DefaultLayoutPage type="product" />} />
                            <Route path=":productId" element={< ViewNew inputs={productInpDetails}
                                        titlee="View New Product"
                                        type="PRODUCT"/>} />
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
                            <Route path="updatenew/:productId"
                                element={
                                    <UpdateNew inputs={productInpDetails}
                                        type="PRODUCT"
                                        titlee="Update Current Product"
                                    />
                                }></Route>
                        </Route>

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
                            <Route path="updatenew/:customerId"
                                element={
                                    <UpdateNew inputs={userInpDetails}
                                        type="CUSTOMER"
                                        titlee="Update Current Customer"
                                    />
                                }></Route>
                        </Route>

                        {/* promotion */}

                        <Route path="promotions">
                            <Route index element={<DefaultLayoutPage type="promotion" />} />
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
                            <Route path="updatenew/:promotionId"
                                element={
                                    <UpdateNew inputs={userInpDetails}
                                        type="CUSTOMER"
                                        titlee="Update Current Customer"
                                    />
                                }></Route>
                        </Route>

                        {/* order */}

                        <Route path="orders">
                            <Route index element={<DefaultLayoutPage type="order" />} />
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
                            <Route path="updatenew/:orderId"
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
                            <Route path="updatenew"
                                element={
                                    <UpdateNew inputs={userInpDetails}
                                        type="EMPLOYEE"
                                        titlee="Update Current Employee"
                                    />
                                }></Route>
                        </Route>

                        {/* employee */}

                        <Route path="employees">
                            <Route index element={<DefaultLayoutPage type="employee" />} />
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
                            <Route path="updatenew/:employeeId"
                                element={
                                    <UpdateNew inputs={userInpDetails}
                                        type="CUSTOMER"
                                        titlee="Update Current Customer"
                                    />
                                }></Route>
                        </Route>

                        {/* Store */}

                        <Route path="stores">
                            <Route index element={<DefaultLayoutPage type="store" />} />
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
                            <Route path="updatenew/:storeId"
                                element={
                                    <UpdateNew inputs={userInpDetails}

                                        type="CUSTOMER"
                                        titlee="Update Current Customer"
                                    />
                                }></Route>
                        </Route>

                        {/* product */}
                        

                        {/* new */}

                        <Route path="news">
                            <Route index element={<DefaultLayoutPage type="news" />} />
                            <Route path=":slug" element={<NewsDetail />} />
                            <Route
                                path="addnew"
                                element={
                                    <NewsAdd />
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
