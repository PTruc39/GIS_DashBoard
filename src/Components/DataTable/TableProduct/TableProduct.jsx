import { DataGrid } from '@mui/x-data-grid';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './TableProduct.scss';

function TableProduct({type}) {
    
    const [data, setData] = useState([]);

    const handleDlt = (id) => {
        axios.delete(`http://localhost:3001/product/${id}`)
        .then(response => {
            console.log('Item deleted successfully.');
            
        })
        .catch(error => {
        console.error('Error deleting item:', error);
        });
    };

    const GetAllProduct = () => {
        axios.get('http://localhost:3001/product')
          .then(response => {
            const fetchedData = response.data.listProducts.map(item => {
                return {
                    ...item,
                    id: 1
                }
            });
            //_id
            setData(fetchedData);
          })
          .catch(error => {
            console.error(error);
          });
    }
    useEffect(() => {
        GetAllProduct();
      }, []);

      console.log(data);

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 50,
            headerAlign: 'center',
            renderCell: (param) => (

                <div className="userr">
                    {param.row.id}   
                </div>
            ),
        },
        {
            field: 'image',
            headerName: 'Image',
            width: 250,
            headerAlign: 'center',
            renderCell:  (param) => (
                <img src={param.row.hinh} alt="Product Image" className="product_image" />
            )
        },
        {
            field: 'productName',
            headerName: 'Product Name',
            width: 250,
            headerAlign: 'center',
            renderCell:  (param) => (
                <div className="productName">{param.row.tensanpham}</div>
            )
        },
        { 
            field: 'typeProduct', 
            headerName: 'Type', 
            width: 250,
            headerAlign: 'center',
            renderCell:  (param) => (
                <div className="productType">{param.row.loaisanpham}</div>
            )
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 150,
            headerAlign: 'center',
            renderCell: (param) => (
                <div>{param.row.gia}</div>
            ),
        },
        { 
            field: 'age', 
            headerName: 'Age', 
            width: 120,
            headerAlign: 'center',
            renderCell: (param) => (
                <div>{param.row.gia}</div>
            ),
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 270,
            headerAlign: 'center',
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
                        onClick={() => handleDlt(params.row._id)}
                    >
                        Delete
                    </button>
                    <Link 
                        to={`/${
                            type === 'product' ? 'products' : 'customer' ? 'customers' : 'blogs'
                        }/updatenew`}
                        style={{ textDecoration: 'none' }}
                        
                    >
                        <button
                            type="button"
                            className="update_btn"
                        >Update</button>
                    </Link>
                    
                </div>
            ),
        },
    ];

    return (
        <div className="data_table">
            <DataGrid
                className="data_grid"
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                sx={{
                    boxShadow: 2,
                    border: 2,
                    borderColor: 'primary.light',
                    '& .MuiDataGrid-cell:hover': {
                      color: 'primary.main',
                    },
                  }}
            />
        </div>
    );
}

export default TableProduct;
