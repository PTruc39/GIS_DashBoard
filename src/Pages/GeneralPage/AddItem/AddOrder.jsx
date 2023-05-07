
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import React, { useState } from 'react';
import Input from '../../../Components/Input/Input';
import Navbar from '../../../Components/Bar/Navbar/Navbar';
import Sidebar from '../../../Components/Bar/Sidebar/Sidebar';
import noImage from '../../../Assets/Images/no-results.png';
import './AddItem.scss';
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
        lable: 'Orders',
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

function AddOrder({ inputs, titlee, type }) {
    let dynamicInpVal;
            dynamicInpVal = {
                title: '',
                description: '',
                category: '',
                price: '',
                stock: '',
            };
    const [userInp, setUserInp] = useState(dynamicInpVal);

    const [ file, setFile] = useState('');

    const image = false;

    

    const handleChange = (e) => {
        setUserInp({ ...userInp, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userInp);
    };
    return (
        <div className="add_new">
            <Sidebar />

            <div className="new_page">
                <Navbar />

                <div className="new_page_main">
                    <div className="new_page_content">
                        <div className="image">
                            <p className="add_new_user">{titlee}</p>
                            <img src={file ? URL.createObjectURL(file) : noImage} alt="" />
                        </div>

                        <form onSubmit={handleSubmit} className="form">
                            <div className="form_inp">
                                <label htmlFor="file">
                                    Upload: <DriveFolderUploadIcon className="file_icon" />
                                </label>

                                <input
                                    type="file"
                                    name="file"
                                    id="file"
                                    style={{ display: 'none' }}
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                            </div>

                            {productInpDetails.map((detail) => (
                                <Input
                                    key={detail.id}
                                    {...detail}
                                    value={userInp[detail.name]}
                                    onChange={handleChange}
                                />
                            ))}

                            <button type="submit" className="submit_btn">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddOrder;
