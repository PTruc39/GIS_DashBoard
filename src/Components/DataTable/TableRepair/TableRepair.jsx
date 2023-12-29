import { DataGrid } from "@mui/x-data-grid";
// import Dropzone from 'react-dropzone';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import classes from "./TableRepair.module.scss";
import RepairApi from "../../../Api/RepairApi";

function TableRepair() {
    const [data, setData] = useState([]);
    

    const handleDlt = (id) => {
        axios
            .delete(`http://localhost:3001/api/product/${id}`)
            .then((response) => {
                GetAllRepair();
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
            text: "Bạn có muốn xóa sản phẩm này?",
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
            GetAllRepair();
        }
    };

    const GetAllRepair = () => {
        // axios
        //     .get("http://localhost:3001/api/product")
        RepairApi.getAllBodyRepairStatus()
        .then((response) => {
            let index = 0;
            const fetchedData = response.map((item) => {
                index = index + 1;
                return {
                    ...item
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
        GetAllRepair();
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
            field: "startDate",
            headerName: "Ngày bắt đầu",
            width: 220,
            headerAlign: "center",
            renderCell: (param) => (
                <div className={classes.productName}>
                    {param.row.startDate}
                </div>
            ),
        },
        {
            field: "finishDate",
            headerName: "Ngày kết thúc",
            width: 220,
            headerAlign: "center",
            renderCell: (param) => (
                <div className={classes.productType}>
                    {param.row.finishDate}
                </div>
            ),
        },
        {
            field: "repairReason",
            headerName: "Lý do sửa chữa",
            width: 150,
            headerAlign: "center",
            renderCell: (param) => <div>{param.row.repairReason}</div>,
        },
        {
            field: "accountId",
            headerName: "Id người tạo",
            width: 150,
            headerAlign: "center",
            renderCell: (param) => <div>{param.row.accountId}</div>,
        },
        {
            field: "damageReportId",
            headerName: "Id báo cáo hư hại",
            width: 120,
            headerAlign: "center",
            renderCell: (param) => <div>{param.row.damageReportId}</div>,
        },
        {
            field: "damageReportId",
            headerName: "Id body",
            width: 120,
            headerAlign: "center",
            renderCell: (param) => <div>{param.row.bodyId}</div>,
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

export default TableRepair;
