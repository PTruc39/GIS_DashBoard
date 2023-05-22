import React, { useState, useEffect } from "react";
import Input from "../../../Components/Input/Input";
import macbook from "../../../Assets/Images/macbook_pro.png";
import classes from "./UpdateItem.module.scss";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
const UpdateNew = ({ inputs, titlee, type }) => {
    const params = useParams();
    // console.log(params.productId);
    let dynamicInpVal;
    switch (type) {
        case "CUSTOMER":
            dynamicInpVal = {
                tensanpham: "",
                loaisanpham: "",
                masp: "",
                hinh: "",
                gia: "",
                rom: "",
                mausac: "",
                ram: "",
                chip: "",
                baomat: "",
                chongnuoc: "",
                sac: "",
                dophangiai: "",
                kichthuoc: "",
                camera: "",
                khoiluong: "",
                hedieuhanh: "",
                nguongoc: "",
                chatlieu: "",
                kichthuocmanhinh: "",
                loaiphukien: "",
                congnghe: "",
                congsuat: "",
                baohanh: "",
            };
            break;
        case "PRODUCT":
            dynamicInpVal = {
                tensanpham: "",
                loaisanpham: "",
                masp: "",
                hinh: "",
                gia: "",
                rom: "",
                mausac: "",
                ram: "",
                chip: "",
                baomat: "",
                chongnuoc: "",
                sac: "",
                dophangiai: "",
                kichthuoc: "",
                camera: "",
                khoiluong: "",
                hedieuhanh: "",
                nguongoc: "",
                chatlieu: "",
                kichthuocmanhinh: "",
                loaiphukien: "",
                congnghe: "",
                congsuat: "",
                baohanh: "",
            };
            break;
        case "BLOG":
            dynamicInpVal = {
                title: "",
                description: "",
                tags: "",
            };
            break;
        case "PROMOTION":
            dynamicInpVal = {
                makm: '',
                apdung: '',
                phantramkm: '',
                batdau: '',
                ketthuc: '',
                title: '',
                image: '',
                description: '',
                dateSource: '',
                detail: '',
                category: ''
            };
            break;
        default:
            break;
    }
    const [formInp, setFormInp] = useState(dynamicInpVal);
    //const [formInp, setFormInp] = useState(dynamicInpVal);
    const GetItemById = (id) => {
        axios
            .get(`http://localhost:3001/product/${id}`)
            .then((response) => {
                setFormInp(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    useEffect(() => {
        console.log(params.productId);
        GetItemById(params.productId);
    }, []);
    const UpdateItemById = (id) => {
        console.log("ok");
        console.log(id);
        axios
            .put(`http://localhost:3001/product/${id}`, formInp)
            .then((response) => {
                console.log("Update successfully!" + response);
            })
            .catch((error) => {
                console.error("Update error", error);
            });
    };

    const handleChange = (e) => {
        setFormInp({ ...formInp, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(type);
        UpdateItemById(params.productId);
        Swal.fire({
            title: "Update successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 800,
        });
        console.log(formInp);
    };

	return (
		<div className={classes.new_page_main}>
			<div className={classes.add_new_item}>
				<h1>{titlee}</h1>
			</div>
			<div className={classes.new_page_form}>
				{/*<div className={classes.containerImg}>
					<img src={macbook}></img>
					<img src={macbook}></img>
					<img src={macbook}></img>
					<img src={macbook}></img>
				</div>*/}
				<form onSubmit={handleSubmit}>
					{inputs.map((detail) => (
						<Input
							key={detail.id}
							{...detail}
							value={formInp[detail.name]}
							onChange={handleChange}
						/>
					))}
					<div className={classes.wrap}>
						<button type="submit" className={classes.button}>Update</button>
					</div>
				</form>
			</div>
		</div>


	);
};

export default UpdateNew;
