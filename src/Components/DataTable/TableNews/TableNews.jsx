import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TableNews.scss';
import portrait from '../../../Assets/Images/portrait.png';
const userData = [
    {
        id: '1',
        title: 'Want to know how to manage multiple projects at once.',
        author: 'nguyen thanh trung',
        image: portrait,
        createdAt: new Date(Date.now()).toLocaleString(),
    },
    {
        id: '2',
        title: 'How to Choose a right product?',
        author: 'nguyen thanh trung',
        image: portrait,
        createdAt: new Date(Date.now()).toLocaleString(),
    },
    {
        id: '3',
        title: 'How do you create a compelling  title',
        author: 'nguyen ngoc nam',
        image: portrait,
        createdAt: new Date(Date.now()).toLocaleString(),
    },
    {
        id: '4',
        title: 'How to cure wanderlust without leaving your home?',
        author: 'pham thi huyen nhung',
        image: portrait,
        createdAt: new Date(Date.now()).toLocaleString(),
    },
    {
        id: '5',
        title: 'The Seven People You Should Always Meet.',
        author: 'dang ba linh',
        image: portrait,
        createdAt: new Date(Date.now()).toLocaleString(),
    },
    {
        id: '6',
        title: 'Which search queries drive traffic to my website?',
        author: 'nguyen quang thang',
        image: portrait,
        createdAt: new Date(Date.now()).toLocaleString(),
    },
];

function TableNews({ type }) {
    const [data, setData] = useState(userData);

    const handleDlt = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 50,
            renderCell: (param) => (
                <div className="userr">
                    <img src={param.row.image} alt="User Image" className="userr_image" />
                    {param.row.id}
                </div>
            ),
        },
        {
            field: 'title',
            headerName: 'Title',
            width: 400,
            style: { color: 'red' },
        },
        { field: 'author', headerName: 'Author', width: 170 },
        { field: 'createdAt', headerName: 'CreatedAt', width: 200 },
        {
            field: 'action',
            headerName: 'Action',
            width: 300,
            renderCell: (params) => (
                <div className="actionn">
                    <Link to={params.row.id}>
                        <button type="button" className="view_btn">
                            View
                        </button>
                    </Link>
                    <button
                        type="button"
                        className="delete_btn"
                        onClick={() => handleDlt(params.row.id)}
                    >
                        Delete
                    </button>
                    <button
                        type="button"
                        className="delete_btn"
                        onClick={() => handleDlt(params.row.id)}
                    >
                        Update
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="blog_page">

            <div className="blog_page_main">

                <div className="blog_page_table">

                    <DataGrid
                        className="data_grid"
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

export default TableNews;
