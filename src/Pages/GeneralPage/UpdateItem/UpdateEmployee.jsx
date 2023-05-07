import React, { useState } from 'react';
import Input from '../../../Components/Input/Input';
import macbook from '../../../Assets/Images/macbook_pro.png';
import './UpdateItem.scss';
const userInpDetails = [
    {
        id: 2,
        name: 'username',
        lable: 'Nhân Viên',
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
const UpdateEmployee = ({ inputs, titlee, type }) => {

	let dynamicInpVal;
	switch (type) {
		case 'CUSTOMER':
			dynamicInpVal = {
				username: '',
				name: '',
				email: '',
				password: '',
				address: '',
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
	const handleChange = (e) => {
		setUserInp({ ...userInp, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(userInp);
	};

	return (
		<div className="new_page_main">
			<div className="add_new_item">
				<h1>{titlee}</h1>
			</div>
			<div className="new_page_form">
				<div className="containerImg">
					<img src={macbook}></img>
					<img src={macbook}></img>
					<img src={macbook}></img>
					<img src={macbook}></img>
				</div>
				<form onSubmit={handleSubmit}>
					{userInpDetails.map((detail) => (
						<Input
							key={detail.id}
							{...detail}
							value={userInp[detail.name]}
							onChange={handleChange}
						/>
					))}
					<div className='wrap'>
						<button type="submit" className='button'>Update</button>
					</div>
				</form>
			</div>
		</div>


	);
};

export default UpdateEmployee;