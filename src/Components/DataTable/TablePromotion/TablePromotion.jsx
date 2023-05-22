import { DataGrid } from '@mui/x-data-grid';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import man from '../../../Assets/Images/portrait.png';
import classes from './TablePromotion.module.scss';
import axios from 'axios';

const userData = [
    {
        id: '1',
        username: 'promotion',
        email: 'linha1xp@gmail.com',
        image: man,
        address: 'HCMC City',
        age: '24',
    },
    {
        id: '2',
        username: 'promotion',
        email: 'linha1xp@gmail.com',
        image: man,
        address: 'Ha Noi City',
        age: '29',
    },
    {
        id: '3',
        username: 'dangbalinh',
        email: 'linha1xp@gmail.com',
        image: man,
        address: 'HCMC City',
        age: '20',
    },
    {
        id: '4',
        username: 'dangbalinh',
        email: 'linha1xp@gmail.com',
        image: man,
        address: 'HCMC City',
        age: '23',
    },
    {
        id: '5',
        username: 'dangbalinh',
        email: 'linha1xp@gmail.com',
        image: man,
        address: 'Thanh Hoa',
        age: '30',
    },
    {
        id: '6',
        username: 'dangbalinh',
        email: 'linha1xp@gmail.com',
        image: man,
        address: 'HCMC City',
        age: '23',
    },
    {
        id: '7',
        username: 'dangbalinh',
        email: 'linha1xp@gmail.com',
        image: man,
        address: 'Thanh Hoa',
        age: '29',
    },
    {
        id: '8',
        username: 'dangbalinh',
        email: 'linha1xp@gmail.com',
        image: man,
        address: 'HCMC City',
        age: '20',
    },
    {
        id: '9',
        username: 'dangbalinh',
        email: 'linha1xp@gmail.com',
        image: man,
        address: 'Thanh Hoa',
        age: '30',
    },
    {
        id: '10',
        username: 'dangbalinh',
        email: 'linha1xp@gmail.com',
        image: man,
        address: 'HCMC City',
        age: '23',
    },
    {
        id: '11',
        username: 'dangbalinh',
        email: 'linha1xp@gmail.com',
        image: man,
        address: 'HCMC City',
        age: '30',
    },
    {
        id: '12',
        username: 'dangbalinh',
        email: 'linha1xp@gmail.com',
        image: man,
        address: 'HCMC City',
        age: '29',
    },
];

function TablePromotion({type}) {
    const [data, setData] = useState([]);

    const handleDlt = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    useEffect(() => {
        axios
          .get("https://applestore213.onrender.com/api/khuyenmai")
          .then((response) => {
            const newData = response.data.map(item => ({
                ...item,
                id: item.makm // Thêm trường dữ liệu mới
                }));
            setData(newData)
          })
          .catch((error) => {
            console.log(error);
          });
      });

    const columns = [
        {
            field: 'id',
            headerName: 'MaKM',
            width: 150,
            renderCell: (param) => (
                <div className={classes.userr}>
                    <img src={param.row.image} alt="Promotion Image" className={classes.userr_image} />
                    {param.row.id}
                </div>
            ),
        },
        {
            field: 'apdung',
            headerName: 'Áp dụng',
            width: 120,
            renderCell: (param) => (
                <div className={`status ${param.row.apdung}`}>{param.row.apdung} vnđ</div>
            ),
        },
        { 
            field: 'phantramkm', 
            headerName: 'Khuyến mãi',
            width: 100 ,
            renderCell: (param) => (
                <div className={`status ${param.row.phantramkm}`}>{param.row.phantramkm} %</div>
            ),
        },
        {
            field: 'batdau',
            headerName: 'Bắt đầu',
            width: 100,
            renderCell: (param) => (
                <div className={`status ${param.row.batdau}`}>{param.row.batdau}</div>
            ),
        },
        { field: 'ketthuc', headerName: 'Kết thúc', width: 100 },
        { 
            field: 'title',
            headerName: 'Tiêu đề', 
            width: 500,
            renderCell: (param) => (
                <div className={`status ${param.row.title}`}>{param.row.title}</div>
            ),
        },
        {
            field: 'action',
            headerName: 'Hoạt động',
            width: 270,
            renderCell: (params) => (
                <div className={classes.actionn}>
                    <Link to={params.row.id}>
                        <button type="button" className={classes.view_btn}>
                            View
                        </button>
                    </Link>
                    <button
                        type="button"
                        className={classes.delete_btn}
                        onClick={() => handleDlt(params.row.id)}
                    >
                        Delete
                    </button>
                    <Link 
                        to={`/promotions/updatenew/${params.row.id}`}
                        style={{ textDecoration: 'none' }}
                        
                    >
                        <button
                            type="button"
                            className={classes.update_btn}
                        >Update</button>
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
            />
        </div>
    );
}

export default TablePromotion;
