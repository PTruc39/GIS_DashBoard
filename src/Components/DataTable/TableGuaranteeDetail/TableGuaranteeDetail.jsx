import { DataGrid } from '@mui/x-data-grid';
import React, { useState, useEffect } from 'react';
import classes from './TableGuaranteeDetail.module.scss';
import Navbar from '../../Bar/Navbar/Navbar';
import Sidebar from '../../Bar/Sidebar/Sidebar';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const columns = [
    {
        field: 'id',
        headerName: 'Lần Thứ',
        width: 150,
        renderCell: (param) => (
            <div className={classes.userr}>{param.row.id}</div>
        ),
    },
    { 
        field: 'ngbaohanh', 
        headerName: 'Ngày bảo hành',
        width: 200 ,
        renderCell: (param) => (
            <div className={`status ${param.row.ngbaohanh}`}>{param.row.ngbaohanh}</div>
        ),
    },
    {
        field: 'mota',
        headerName: 'Mô tả',
        width: 400,
        renderCell: (param) => (
            <div className={`status ${param.row.mota}`}>{param.row.mota}</div>
        ),
    },
    { 
        field: 'tinhtrangbaohanh', 
        headerName: 'Tình trạng bảo hành', 
        width: 400,
        renderCell: (param) => (
            <div className={`status ${param.row.tinhtrangbaohanh}`}>{param.row.tinhtrangbaohanh}</div>
        ),
    },
];

function TableGuaranteeDetail(){
    const [data, setData] = useState([]);
    const params = useParams();

    useEffect(() => {
        axios
          .get(`https://applestore213.onrender.com/api/baohanh/${params.guaranteeId}`)
          .then((response) => {
            const newData = response.data.chitietbaohanh.map(item => ({
                ...item,
                id: item.lanthu // Thêm trường dữ liệu mới
                }));
                setData(newData)
          })
          .catch((error) => {
            console.log(error);
          });
      });
    return (
        <div className={classes.list_page}>
            <Sidebar />
            <div className={classes.list_page_main}>
                <Navbar />
                <div className={classes.data_table}>
                    <DataGrid
                        className={classes.data_grid}
                        rows={data}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                    />
                </div>
            </div>
        </div>
    );
}

export default TableGuaranteeDetail;
