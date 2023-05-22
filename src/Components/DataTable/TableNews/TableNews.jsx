import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './TableNews.module.scss';
import api from '../../../Api/NewsApi'

function TableNews({ type }) {
    const [data, setData] = useState();

    useEffect(() => {
        api.getAllNews().then(result => {
            setData(result.listNews)
        })
    }, [])

    const handleDlt = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        {
            field: '_id',
            headerName: 'ID',
            width: 50,
        },
        {
            field: 'image',
            headerName: 'Hinh anh',
            width: 200,
            renderCell: (param) => (
                <div className={classes.newsImage}>
                    <img src={param.row.image} alt="User" className={classes.newsImage_image} />
                </div>
            ),
        },
        {
            field: 'title',
            headerName: 'Title',
            width: 400,
            style: { color: 'red' },
        },
        { field: 'dateSource', headerName: 'Date source', width: 200 },
        {
            field: 'action',
            headerName: 'Action',
            width: 300,
            renderCell: (params) => (
                <div className={classes.actionn}>
                    <Link to={params.row.slug}>
                        <button type="button" className={classes.view_btn}>
                            Xem
                        </button>
                    </Link>
                    <button
                        type="button"
                        className={classes.delete_btn}
                        onClick={() => handleDlt(params.row._id)}
                    >
                        Xóa
                    </button>
                    <button
                        type="button"
                        className={classes.delete_btn}
                        onClick={() => handleDlt(params.row._id)}
                    >
                        Sửa
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className={classes.blog_page}>

            <div className={classes.blog_page_main}>

                <div className={classes.blog_page_table}>

                    {data && <DataGrid
                        rowHeight={100}
                        getRowId={(row) => row._id}
                        className={classes.data_grid}
                        rows={data}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                    />}
                </div>
            </div>
        </div>
    );
}

export default TableNews;
