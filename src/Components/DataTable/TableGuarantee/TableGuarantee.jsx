import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import React from 'react';
import classes from './TableGuarantee.module.scss';

const columns = [
    {
        field: 'id',
        headerName: 'MaBH',
        width: 150,
        renderCell: (param) => (
            <div className={classes.userr}>{param.row.id}</div>
        ),
    },
    { 
        field: 'MaSP', 
        headerName: 'Mã sản phẩm',
        width: 200 ,
        renderCell: (param) => (
            <div className={`status ${param.row.masp}`}>{param.row.masp}</div>
        ),
    },
    {
        field: 'MaHD',
        headerName: 'Mã hóa đơn',
        width: 200,
        renderCell: (param) => (
            <div className={`status ${param.row.mahd}`}>{param.row.mahd}</div>
        ),
    },
    { 
        field: 'MaNV', 
        headerName: 'Mã nhân viên', 
        width: 200,
        renderCell: (param) => (
            <div className={`status ${param.row.manv}`}>{param.row.manv}</div>
        ),
    },
    { field: 'thoigian', headerName: 'Thời gian', width: 200 },
    { field: 'nghethan', headerName: 'Ngày hết hạn', width: 200 },
    {
        field: 'action',
        headerName: 'Hoạt động',
        width: 270,
        renderCell: (params) => (
            <div className={classes.actionn}>
                <Link to={params.row._id}>
                    <button type="button" className={classes.view_btn}>
                        Xem
                    </button>
                </Link>
            </div>
        ),
    },
];

function TableGuarantee({ data }){
    return (
        <div className={classes.data_table}>
            <DataGrid
                className={classes.data_grid}
                rows={[...data]}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    );
}

export default TableGuarantee;
