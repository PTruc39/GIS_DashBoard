import { DataGrid } from '@mui/x-data-grid';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import macbook from '../../Images/macbook_pro.png';
import axios from 'axios';
import './tableList.scss';


const productData = [
    {
        id: '1',
        productName: 'dangbalinh',
        email: 'linha1xp@gmail.com',
        image: macbook,
        address: 'HCMC City',
        age: '24',
    },
    {
        id: '2',
        productName: 'dangbalinh',
        email: 'linha1xp@gmail.com',
        image: macbook,
        address: 'Ha Noi City',
        age: '29',
    },
    {
        id: '3',
        productName: 'dangbalinh',
        email: 'linha1xp@gmail.com',
        image: macbook,
        address: 'HCMC City',
        age: '20',
    },
    {
        id: '4',
        productName: 'dangbalinh',
        email: 'linha1xp@gmail.com',
        image: macbook,
        address: 'HCMC City',
        age: '23',
    },
    {
        id: '5',
        productName: 'dangbalinh',
        email: 'linha1xp@gmail.com',
        image: macbook,
        address: 'Thanh Hoa',
        age: '30',
    },
    {
        id: '6',
        productName: 'dangbalinh',
        email: 'linha1xp@gmail.com',
        image: macbook,
        address: 'HCMC City',
        age: '23',
    },
    {
        id: '7',
        productName: 'dangbalinh',
        email: 'linha1xp@gmail.com',
        image: macbook,
        address: 'Thanh Hoa',
        age: '29',
    },
    {
        id: '8',
        productName: 'dangbalinh',
        email: 'linha1xp@gmail.com',
        image: macbook,
        address: 'HCMC City',
        age: '20',
    },
    {
        id: '9',
        productName: 'dangbalinh',
        email: 'linha1xp@gmail.com',
        image: macbook,
        address: 'Thanh Hoa',
        age: '30',
    },
    {
        id: '10',
        productName: 'dangbalinh',
        email: 'linha1xp@gmail.com',
        image: macbook,
        address: 'HCMC City',
        age: '23',
    },
    {
        id: '11',
        productName: 'dangbalinh',
        email: 'linha1xp@gmail.com',
        image: macbook,
        address: 'HCMC City',
        age: '30',
    },
    {
        id: '12',
        productName: 'dangbalinh',
        email: 'linha1xp@gmail.com',
        image: macbook,
        address: 'HCMC City',
        age: '29',
    },
];
function TableList({type}) {
    
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

    useEffect(() => {
        axios.get('http://localhost:3001/product')
          .then(response => {
            const fetchedData = response.data.listProducts.map(item => {
                return {
                    ...item,
                    id: 1
                }
            });
            setData(fetchedData);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
      console.log(data);

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 150,
            renderCell: (param) => (

                <div className="userr">
                    {param.row.id}
                    <img src={param.row.hinh} alt="Product Image" className="userr_image" />
                </div>
            ),
        },
        {
            field: 'productName',
            headerName: 'Product Name',
            width: 250,
            renderCell:  (param) => {
                <div className='productName'>{param.row.tensanpham}</div>
            }
        },
        { 
            field: 'email', 
            headerName: 'Email', 
            width: 280 
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 150,
            renderCell: (param) => (
                <div className={`status ${param.row.address}`}>{param.row.gia}</div>
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
            />
        </div>
    );
}

export default TableList;
