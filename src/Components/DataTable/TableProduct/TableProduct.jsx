import { DataGrid } from "@mui/x-data-grid";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import classes from "./TableProduct.module.scss";

function TableProduct({ type }) {
    const [data, setData] = useState([]);
    const handleDlt = (id) => {
        axios
            .delete(`http://localhost:3001/product/${id}`)
            .then((response) => {
                console.log("Item deleted successfully.");
            })
            .catch((error) => {
                console.error("Error deleting item:", error);
            });
    };
    const handleSuccessAction = async (id) => {
        const notification = await Swal.fire({
            title: "Delete this item",
            icon: "warning",
            text: "Do you want to delete this item?",
            button: "Ok",
            showCancelButton: true,
            confirmButtonText: "Ok",
        });
        if (notification.isConfirmed) {
            handleDlt(id);
            Swal.fire({
                title: "Delete successfully",
                icon: "success",
                showConfirmButton: false,
                timer: 800,
            });
            GetAllProduct();
        }
    };

    const GetAllProduct = () => {
        axios
            .get("http://localhost:3001/product")
            .then((response) => {
                let index = 0;
                const fetchedData = response.data.listProducts.map((item) => {
                    index = index + 1;
                    return {
                        ...item,
                        id: index,
                    };
                });
                setData(fetchedData);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    useEffect(() => {
        GetAllProduct();
    }, [data]);

    console.log(data);

    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 50,
            headerAlign: "center",
            renderCell: (param) => (
                <div className={classes.userr}>{param.row.id}</div>
            ),
        },
        {
            field: "image",
            headerName: "Hình ảnh",
            width: 250,
            headerAlign: "center",
            renderCell: (param) => (
                <img
                    src={param.row.hinh}
                    alt="Product Image"
                    className={classes.product_image}
                />
            ),
        },
        {
            field: "productName",
            headerName: "Tên sản phẩm",
            width: 250,
            headerAlign: "center",
            renderCell: (param) => (
                <div className={classes.productName}>
                    {param.row.tensanpham}
                </div>
            ),
        },
        {
            field: "typeProduct",
            headerName: "Loại sản phẩm",
            width: 250,
            headerAlign: "center",
            renderCell: (param) => (
                <div className={classes.productType}>
                    {param.row.loaisanpham}
                </div>
            ),
        },
        {
            field: "price",
            headerName: "Giá",
            width: 150,
            headerAlign: "center",
            renderCell: (param) => <div>{param.row.gia}</div>,
        },
        {
            field: "color",
            headerName: "Màu sắc",
            width: 120,
            headerAlign: "center",
            renderCell: (param) => <div>{param.row.mausac}</div>,
        },
        {
            field: "action",
            headerName: "Action",
            width: 270,
            headerAlign: "center",
            renderCell: (params) => (
                <div className={classes.actionn}>
                    <Link to={`/products/${params.row._id}`}>
                        <button type="button" className={classes.view_btn}>
                            View
                        </button>
                    </Link>
                    <button
                        type="button"
                        className={classes.delete_btn}
                        onClick={() => handleSuccessAction(params.row._id)}
                    >
                        Delete
                    </button>
                    <Link
                        to={`/products/updatenew/${params.row._id}`}
                        style={{ textDecoration: "none" }}
                    >
                        <button type="button" className={classes.update_btn}>
                            Update
                        </button>
                    </Link>
                </div>
            ),
        },
    ];

    return (
        <div className={classes.data_table}>
            <DataGrid
                className={classes.data_grid}
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                sx={{
                    boxShadow: 2,
                    border: 2,
                    borderColor: "primary.light",
                    "& .MuiDataGrid-cell:hover": {
                        color: "primary.main",
                    },
                }}
            />
        </div>
    );
}

export default TableProduct;
