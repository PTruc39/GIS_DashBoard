import React, { useEffect, useState } from 'react';
import Input from '../../../Components/Input/Input';
import macbook from '../../../Assets/Images/macbook_pro.png';
import classes from './ViewItem.module.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const ViewNew = ({ inputs, titlee, type }) => {
	
	
	const params = useParams();
	// console.log(params.productId);
	let dynamicInpVal;
	switch (type) {
		case 'CUSTOMER':
			dynamicInpVal = {
				tensanpham: '',
				loaisanpham: '',
				masp: '',
				hinh: '',
				gia: '',
				rom: '',
				mausac: '',
				ram: '',
				chip: '',
				baomat: '',
				chongnuoc: '',
				sac: '',
				dophangiai: '',
				kichthuoc: '',
				camera: '',
				khoiluong: '',
				hedieuhanh: '',
				nguongoc: '',
				chatlieu: '',
				kichthuocmanhinh: '',
				loaiphukien: '',
				congnghe: '',
				congsuat: '',
				baohanh: ''
			};
			break;
		case 'PRODUCT':
			dynamicInpVal = {
				tensanpham: '',
				loaisanpham: '',
				masp: '',
				hinh: '',
				gia: '',
				rom: '',
				mausac: '',
				ram: '',
				chip: '',
				baomat: '',
				chongnuoc: '',
				sac: '',
				dophangiai: '',
				kichthuoc: '',
				camera: '',
				khoiluong: '',
				hedieuhanh: '',
				nguongoc: '',
				chatlieu: '',
				kichthuocmanhinh: '',
				loaiphukien: '',
				congnghe: '',
				congsuat: '',
				baohanh: ''
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
	const [formInp, setFormInp] = useState(dynamicInpVal);
	const GetItemById = (id) => {
		axios.get(`http://localhost:3001/product/${id}`)
			.then(response => {
				setFormInp(response.data);
			}
			)
          .catch (error => {
		console.error(error);
});

}
useEffect(() => {
	console.log(params.productId);
	GetItemById(params.productId);
  }, []);





return (
	<div className={classes.new_page_main}>
		<div className={classes.add_new_item}>
			<h1>{titlee}</h1>
		</div>
		<div className={classes.new_page_form}>
			<div className={classes.containerImg}>
				<img src={macbook}></img>
				<img src={macbook}></img>
				<img src={macbook}></img>
				<img src={macbook}></img>
			</div>
			<form>
				{inputs.map((detail) => (
					<Input
						key={detail.id}
						{...detail}
						value={formInp[detail.name]}
						
					/>
				))}
				
			</form>
		</div>
	</div>


);
};

export default ViewNew;