import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ColorContext } from './ColorContext/darkContext';
import Home from './Pages/Home/Home';
import AddNew from './Pages/GeneralPage/AddItem/AddItem';
import BlogDetail from './Pages/NewDetail/NewDetail';
//import Blogs from './Pages/News/News';
import UserLists from './Pages/DefaultLayoutPage/DefaultLayoutPage';
import Detail from './Pages/Detail/Detail';
import Login from './Pages/Login/Login';
import UpdateNew from './Pages/GeneralPage/UpdateItem/UpdateItem';
import './app.scss';

const userInpDetails = [
    {
        id: 2,
        name: 'username',
        lable: 'Username',
        type: 'text',
        placeholder: 'John23',
        required: true,
        //pattern: '^[A-Za-z0-9]{3,12}$',
        errorMsg: 'Username should be 3-12 characters & should not include any special character!',
    },
    {
        id: 3,
        name: 'name',
        lable: 'Name',
        type: 'text',
        placeholder: 'John Smith',
        required: true,
        pattern: '^[A-Za-z]{1,20}$',
        errorMsg: 'Name is required!',
    },
    {
        id: 4,
        name: 'email',
        lable: 'Email',
        type: 'email',
        placeholder: 'example@email.com',
        required: true,
        errorMsg: 'Enter a valid email!',
    },
    {
        id: 5,
        name: 'password',
        lable: 'Password',
        type: 'password',
        placeholder: 'Password',
        required: true,
        pattern: '^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{6,20}$',
        errorMsg:
            'Password should be 6-20 characters and include at last 1 num, 1 letter, 1 special character!',
    },
    {
        id: 6,
        name: 'address',
        lable: 'Address',
        type: 'text',
        placeholder: 'Address',
        required: true,
        errorMsg: 'Address is required!',
    },
];
const productInpDetails = [
    {
        id: 2,
        name: 'title',
        lable: 'Title',
        type: 'text',
        placeholder: 'Product title',
        required: true,
        errorMsg: 'Title is required!',
    },
    {
        id: 3,
        name: 'description',
        lable: 'Description',
        type: 'text',
        placeholder: 'Product description',
        required: true,
        errorMsg: 'Description is required!',
    },
    {
        id: 4,
        name: 'category',
        lable: 'Category',
        type: 'text',
        placeholder: 'Product category',
        required: true,
        errorMsg: 'Category is required!',
    },
    {
        id: 5,
        name: 'price',
        lable: 'Price',
        type: 'number',
        placeholder: 'Product price',
        required: true,
        errorMsg: 'Price is required!',
    },
    {
        id: 6,
        name: 'stock',
        lable: 'In Stock',
        type: 'text',
        placeholder: 'In Stock',
        required: true,
        errorMsg: 'This field is required!',
    },
    {
        id: 7,
        name: 'color',
        lable: 'Mau sac',
        type: 'text',
        placeholder: 'Mau sac',
        required: true,
        errorMsg: 'This field is required!',
    },
    {
        id: 8,
        name: 'ram',
        lable: 'Ram',
        type: 'text',
        placeholder: 'Ram',
        required: true,
        errorMsg: 'This field is required!',
    },
    {
        id: 9,
        name: 'cip',
        lable: 'Chip',
        type: 'text',
        placeholder: 'Chip',
        required: true,
        errorMsg: 'This field is required!',
    },
    {
        id: 10,
        name: 'batteries',
        lable: 'Pin',
        type: 'text',
        placeholder: 'Pin',
        required: true,
        errorMsg: 'This field is required!',
    },
];
const blogInputs = [
    {
        id: 1,
        name: 'title',
        lable: 'Title',
        type: 'text',
        placeholder: 'Blog title',
        required: true,
        errorMsg: 'Title is required!',
    },
    {
        id: 2,
        name: 'description',
        lable: 'Description',
        type: 'text',
        placeholder: 'Blog description',
        required: true,
        errorMsg: 'Description is required!',
    },
    {
        id: 3,
        name: 'tags',
        lable: 'Tags',
        type: 'text',
        placeholder: 'Travel, Communication',
        required: true,
        errorMsg: 'Tag is required!',
    },
];

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
                            <Route index element={<UserLists type="customer" />} />
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
                            <Route index element={<UserLists type="product" />} />
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
