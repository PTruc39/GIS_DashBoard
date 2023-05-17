import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import man from '../../../Assets/Images/portrait.png';
import classes from './TableStore.module.scss';

const userData = [
    {
        id: '1',
        username: 'Store',
        email: 'linha1xp@gmail.com',
        image: man,
        address: 'HCMC City',
        age: '24',
    },
    {
        id: '2',
        username: 'dangbalinh',
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

function TableStore({type}) {
    const [data, setData] = useState(userData);

    const handleDlt = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 310,
            renderCell: (param) => (
                <div className={classes.userr}>
                    <img src={param.row.image} alt="User Image" className={classes.userr_image} />
                    {param.row.id}
                </div>
            ),
        },
        {
            field: 'username',
            headerName: 'Username',
            width: 180,
        },
        { field: 'email', headerName: 'Email', width: 280 },
        {
            field: 'address',
            headerName: 'Address',
            width: 150,
            renderCell: (param) => (
                <div className={`status ${param.row.address}`}>{param.row.address}</div>
            ),
        },
        { field: 'age', headerName: 'Age', width: 120 },
        {
            field: 'action',
            headerName: 'Action',
            width: 270,
            renderCell: (params) => (
                <div className="actionn">
                    <Link to={params.row.id}>
                        <button type="button" className="view_btn">
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
                        to={`/stores/updatenew/${params.row.id}`}
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

export default TableStore;
