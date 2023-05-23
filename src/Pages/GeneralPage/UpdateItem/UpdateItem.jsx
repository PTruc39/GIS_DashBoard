import React, { useState, useEffect } from "react";
import Input from "../../../Components/Input/Input";
import macbook from "../../../Assets/Images/macbook_pro.png";
import classes from "./UpdateItem.module.scss";
import EmployeeApi from "../../../Api/EmployeeApi";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
const UpdateItem = ({ inputs, titlee, type }) => {
    const params = useParams();
    console.log(type);
    let dynamicInpVal;
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

    //CUSTOMER
    const GetCustomerById = (id) => {
        axios
            .get(`http://localhost:3001/api/auth/${id}`)
            .then((response) => {
                setFormInp(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const UpdateCustomerById = (id) => {
        console.log("ok");
        console.log(id);
        axios
            .put(`http://localhost:3001/api/auth/${id}`, {
                hoten: formInp.hoten,
                diachi: formInp.diachi,
                ngaysinh: formInp.ngaysinh,
                sdt: formInp.sdt,
            })
            .then((response) => {
                console.log("Update successfully!" + response);
            })
            .catch((error) => {
                console.error("Update error", error);
            });
    };

    //END OF CUSTOMER

    // EMPLOYEE
    const GetNVById = (id) => {
        EmployeeApi.getNVById(id)
            .then((response) => {
                setFormInp(response);
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const UpdateNVById = (id) => {
        console.log("ok");
        console.log(id);
        EmployeeApi.updateNV(id, {
                hoten: formInp.hoten,
                role: formInp.role,
                email: formInp.email,
                sdt: formInp.sdt,
            })
            .then((response) => {
                console.log("Update successfully!" + response);
            })
            .catch((error) => {
                console.error("Update error", error);
            });
    };

    //END OF EMPLOYY

    //STORE
    const GetStoreById = (id) => {
        axios
            .get(`http://localhost:3001/api/store/${id}`)
            .then((response) => {
                setFormInp(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const UpdateStoreById = (id) => {
        console.log(id);
        axios
            .put(`http://localhost:3001/api/store/${id}`, {
                name: formInp.name,
                provinceCode: Number(formInp.provinceCode),
                districtCode: Number(formInp.districtCode),
            })
            .then(() => {
                Swal.fire({
                    title: "Cập nhật thành công!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 800,
                });
                console.log(formInp);
            })
            .catch((err) => console.log(err));
    };
    //END OF STORE

    useEffect(() => {
        //console.log(params.productId);
        if (type === "CUSTOMER") {
            GetCustomerById(params.customerId);
        } else if (type === "STORE") {
            GetStoreById(params.storeId);
        } else if(type==="EMPLOYEE")
        {
            GetNVById(params.employeeId)
        }else{
            GetItemById(params.productId);
        }

       

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
        if (type === "PRODUCT") {
            UpdateItemById(params.productId);
            Swal.fire({
                title: "Update successfully",
                icon: "success",
                showConfirmButton: false,
                timer: 800,
            });
        }
        if (type === "CUSTOMER") {
            UpdateCustomerById(params.customerId);
            Swal.fire({
                title: "Update successfully",
                icon: "success",
                showConfirmButton: false,
                timer: 800,
            });
            console.log(formInp);
        }
        if (type === "STORE") {
            UpdateStoreById(params.storeId);
        }
        if (type === "EMPLOYEE") {
            UpdateNVById(params.employeeId);
        }
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
                            value={formInp ? formInp[detail.name] : ""}
                            onChange={handleChange}
                        />
                    ))}
                    <div className={classes.wrap}>
                        <button type="submit" className={classes.button}>
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;
