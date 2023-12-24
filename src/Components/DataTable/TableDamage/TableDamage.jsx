import { DataGrid } from "@mui/x-data-grid";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import classes from "./TableDamageReport.module.scss";

function TableDamage({ type }) {
    const [data, setData] = useState([]);
    const handleDlt = (id) => {
        axios
            .delete(`https://localhost:7094/api/DamageReport/${id}`)
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
            GetAllInvoice();
        }
    };

    const GetAllInvoice = () => {
        axios
            .get("https://localhost:7094/api/DamageReport")
            .then((response) => {
                let index = 0;
                const fetchedData = response.data.map((item) => {
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
        GetAllInvoice();
    }, []);

    console.log(data);

    const columns = [
        {
            field: "id",
            headerName: "Mã hư hại",
            width: 100,
            headerAlign: "center",
            renderCell: (param) => (
                <div className={classes.userr}>{param.row.id}</div>
            ),
        },
        {
            field: "mahd",
            headerName: "Ngày báo cáo",
            width: 140,
            headerAlign: "center",
            renderCell: (param) => (
                <div className={classes.userr}>{param.row.date}</div>
            ),
        },
        {
            field: "content",
            headerName: "Nội dung",
            width: 140,
            headerAlign: "center",
            renderCell: (param) => (
                <div className={classes.productName}>
                    {param.row.content}
                </div>
            ),
        },
        // {
        //     field: "manv",
        //     headerName: "Mã Nhân Viên",
        //     width: 120,
        //     headerAlign: "center",
        //     renderCell: (param) => (
        //         <div className={classes.productType}>
        //             {param.row.manv}
        //         </div>
        //     ),
        // },
        {
            field: "cause",
            headerName: "Nguyên nhân",
            width: 170,
            headerAlign: "center",
            renderCell: (param) => (
                <div className={classes.productType}>
                    {param.row.cause}
                </div>
            ),
        },
        {
            field: "trigia",
            headerName: "Tài khoản",
            width: 170,
            headerAlign: "center",
            renderCell: (param) => <div>{param.row.id_account}</div>,
        },
        // {
        //     field: "phuongthucthanhtoan",
        //     headerName: "Phương thức thanh toán",
        //     width: 150,
        //     headerAlign: "center",
        //     renderCell: (param) => <div>{param.row.phuongthucthanhtoan}</div>,
        // },
        {
            field: "status",
            headerName: "Trạng Thái",
            width: 140,
            headerAlign: "center",
            renderCell: (param) => <div>{param.row.status}</div>,
        },
        {
            field: "action",
            headerName: "Action",
            width: 290,
            headerAlign: "center",
            renderCell: (params) => (
                <div className={classes.actionn}>
                    <Link to={`/product2/${params.row.id}`}>
                        <button type="button" className={classes.view_btn}>
                            Xem
                        </button>
                    </Link>
                    <button
                        type="button"
                        className={classes.delete_btn}
                        onClick={() => handleSuccessAction(params.row._id)}
                    >
                        Xóa
                    </button>
                    {/* <Link 
                        to={`/invoices/updatenew/${params.row._id}`}
                        style={{ textDecoration: "none" }}
                    >
                        <button type="button" className={classes.update_btn}>
                            Sửa
                        </button>
                    </Link> */}
                    {/* <button>Export PDF File</button> */}
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

export default TableDamage;
