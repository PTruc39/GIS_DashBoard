
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import React, { useState } from 'react';
import Input from '../../../Components/Input/Input';
import Navbar from '../../../Components/Bar/Navbar/Navbar';
import Sidebar from '../../../Components/Bar/Sidebar/Sidebar';
import noImage from '../../../Assets/Images/no-results.png';
import './AddItem.scss';

function AddNew({ inputs, titlee, type }) {
    let dynamicInpVal;

    // dynamically change the state values
    switch (type) {
        case 'CUSTOMER':
            dynamicInpVal = {
                username: '',
                name: '',
                email: '',
                password: '',
                address: '',
                age: ''
            };
            break;
        case 'PRODUCT':
            dynamicInpVal = {
                title: '',
                description: '',
                category: '',
                price: '',
                stock: '',
            };
            break;
        case 'BLOG':
            dynamicInpVal = {
                title: '',
                description: '',
                tags: '',
            };
            break;
        default:
            break;
    }
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

                            {inputs.map((detail) => (
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

export default AddNew;
