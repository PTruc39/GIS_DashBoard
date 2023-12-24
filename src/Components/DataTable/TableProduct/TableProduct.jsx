import { DataGrid } from "@mui/x-data-grid";
// import Dropzone from 'react-dropzone';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import classes from "./TableProduct.module.scss";


function TableProduct() {
    const [data, setData] = useState([]);
    

    const handleDlt = (id) => {
        axios
            .delete(`https://localhost:7094/api/Materials/${id}`)
            .then((response) => {
                GetAllProduct();
                console.log("Item deleted successfully.", response);
            })
            .catch((error) => {
                console.error("Error deleting item:", error);
            });
    };
    const handleDeleteAction = async (id) => {
        const notification = await Swal.fire({
            title: "Xóa sản phẩm",
            icon: "warning",
            text: "Bạn có muốn xóa vật liệu này?",
            button: "Đồng ý",
            showCancelButton: true,
            confirmButtonText: "Đồng ý",
            cancelButtonText: "Hủy"
        });
        if (notification.isConfirmed) {
            handleDlt(id);
            Swal.fire({
                title: "Xóa thành công!",
                icon: "success",
                showConfirmButton: false,
                timer: 800,
            });
            GetAllProduct();
        }
    };

    const GetAllProduct = () => {
        axios
            .get("https://localhost:7094/api/Materials")
            .then((response) => {
                let index = 0;
                const fetchedData = response.data.map((item) => {
                    index = index + 1;
                    return {
                        ...item
                    };
                });
                console.log("Rerender");
                setData(fetchedData);
                console.log(data);

            })
            .catch((error) => {
                console.error(error);
            });
    };
    useEffect(() => {
        GetAllProduct();
    }, []);

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
        // {
        //     field: "image",
        //     headerName: "Hình ảnh",
        //     width: 250,
        //     headerAlign: "center",
        //     renderCell: (param) => (
        //         <img
        //             src={param.row.hinh}
        //             alt="Product Image"
        //             className={classes.product_image}
        //         />
        //     ),
        // },
        {
            field: "name",
            headerName: "Tên vật liệu",
            width: 250,
            headerAlign: "center",
            renderCell: (param) => (
                <div className={classes.productName}>
                    {param.row.name}
                </div>
            ),
        },
        {
            field: "age",
            headerName: "Độ bền",
            width: 250,
            headerAlign: "center",
            renderCell: (param) => (
                <div className={classes.productType}>
                    {param.row.age}
                </div>
            ),
        },
        {
            field: "description",
            headerName: "Mô Tả",
            width: 250,
            headerAlign: "center",
            renderCell: (param) => <div>{param.row.description}</div>,
        },
        {
            field: "action",
            headerName: "Hành động",
            width: 270,
            headerAlign: "center",
            renderCell: (params) => (
                <div className={classes.actionn}>
                    <Link to={`/products/${params.row.id}`}>
                        <button type="button" className={classes.view_btn}>
                            Xem
                        </button>
                    </Link>
                    <button
                        type="button"
                        className={classes.delete_btn}
                        onClick={() => handleDeleteAction(params.row.id)}
                    >
                        Xóa
                    </button>
                    <Link
                        to={`/products/updatenew/${params.row.id}`}
                        style={{ textDecoration: "none" }}
                    >
                        <button type="button" className={classes.update_btn}>
                            Sửa
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
