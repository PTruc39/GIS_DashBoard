import React, { useState } from 'react';
import Input from '../../../Components/Input/Input';
import macbook from '../../../Assets/Images/macbook_pro.png';
import './UpdateItem.scss';
const UpdateNew = ({ inputs, titlee, type }) => {

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
					{inputs.map((detail) => (
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

export default UpdateNew;