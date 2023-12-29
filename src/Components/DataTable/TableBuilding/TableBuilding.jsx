import { DataGrid } from "@mui/x-data-grid";
// import Dropzone from 'react-dropzone';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import classes from "./TableBuilding.module.scss";
import BodyApi from "../../../Api/BodyApi";


function TableBuilding() {
    const [data, setData] = useState([]);
    

    const handleDlt = (id) => {
        axios
            .delete(`http://localhost:3001/api/product/${id}`)
            .then((response) => {
                GetAllBody();
                console.log("Item deleted successfully.", response);
            })
            .catch((error) => {
                console.error("Error deleting item:", error);
            });
    };
    const handleDeleteAction = async (id) => {
        const notification = await Swal.fire({
            title: "Xóa body",
            icon: "warning",
            text: "Bạn có muốn xóa Body này?",
            button: "Đồng ý",
            showCancelButton: true,
            confirmButtonText: "Đồng ý",
            cancelButtonText: "Hủy"
        });
        if (notification.isConfirmed) {
            handleDlt(id);
            Swal.fire({
                title: "Xóa sản phẩm thành công!",
                icon: "success",
                showConfirmButton: false,
                timer: 800,
            });
            GetAllBody();
        }
    };

    const GetAllBody = () => {
        // axios
        //     .get("http://localhost:3001/api/product")
        BodyApi.getAllBody()
        .then((response) => {
            let index = 0;
            console.log(response)
            const fetchedData = response.map((item) => {
                index = index + 1;
                return {
                    ...item,
                    id: index,
                };
            });
            console.log("Rerender");
            setData(fetchedData);
        })
        .catch((error) => {
            console.error(error);
        });
    };
    useEffect(() => {
        GetAllBody();
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
            headerName: "Tên body",
            width: 180,
            headerAlign: "center",
            renderCell: (param) => (
                <div className={classes.productName}>
                    {param.row.name}
                </div>
            ),
        },
        {
            field: "path",
            headerName: "Path",
            width: 250,
            headerAlign: "center",
            renderCell: (param) => (
                <div className={classes.productType}>
                    {param.row.path}
                </div>
            ),
        },
        {
            field: "color",
            headerName: "Màu sắc",
            width: 150,
            headerAlign: "center",
            renderCell: (param) => <div>{param.row.color}</div>,
        },
        {
            field: "material",
            headerName: "Vật liệu",
            width: 120,
            headerAlign: "center",
            renderCell: (param) => <div>{param.row.material}</div>,
        },
        {
            field: "status",
            headerName: "Trạng thái",
            width: 120,
            headerAlign: "center",
            renderCell: (param) => <div>{param.row.status}</div>,
        },
        {
            field: "action",
            headerName: "Hành động",
            width: 270,
            headerAlign: "center",
            renderCell: (params) => (
                <div className={classes.actionn}>
                    <Link to={`/products/${params.row._id}`}>
                        <button type="button" className={classes.view_btn}>
                            Xem
                        </button>
                    </Link>
                    <button
                        type="button"
                        className={classes.delete_btn}
                        onClick={() => handleDeleteAction(params.row._id)}
                    >
                        Xóa
                    </button>
                    <Link
                        to={`/products/updatenew/${params.row._id}`}
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

export default TableBuilding;
