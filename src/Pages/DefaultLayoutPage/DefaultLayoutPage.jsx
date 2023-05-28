import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import TableCustomer from '../../Components/DataTable/TableCustomer/TableCustomer';
import Navbar from '../../Components/Bar/Navbar/Navbar';
import Sidebar from '../../Components/Bar/Sidebar/Sidebar';
import TableProduct from '../../Components/DataTable/TableProduct/TableProduct';
import TablePromotion from '../../Components/DataTable/TablePromotion/TablePromotion';
import TableOrder from '../../Components/DataTable/TableOrder/TableOrder';
import TableEmployee from '../../Components/DataTable/TableEmployee/TableEmployee';
import TableStore from '../../Components/DataTable/TableStore/TableStore';
import TableNews from '../../Components/DataTable/TableNews/TableNews';
import TableInvoice from '../../Components/DataTable/TableInvoice/TableInvoice';
import axios from 'axios';
import classes from './DefaultLayoutPage.module.scss';
import { Margin } from '@mui/icons-material';

function DefaultLayoutPage({ type }) {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setSelectedFile(acceptedFiles[0]);
        const formData = new FormData();
        formData.append('file', file);
        axios.post('http://localhost:3001/importExcel', formData)
            .then(response => {
                console.log("Upload file successfully!");
                console.log(response);
            })
            .catch(error => {
                console.log("Error", error);
            })
    };
    //

    function Table({ type }) {
        const mystyle = {
            marginRight: '20px',
            cursor: 'pointer',
            color: "white",
            marginBottom: "20px",
            backgroundColor: "#FF46BE",
            padding: "10px",
            fontSize: "16px",
            fontFamily: "Arial",
            fontWeight: "bold",
            borderRadius: '4px',
            border: 'none'
        };
        switch (type) {
            case 'customer':
                return <TableCustomer />;
            case 'product':

                return (
                    <div >
                        <div style={{ display: 'flex'}}>
                            <Dropzone onDrop={handleFileDrop} accept=".xlsx,.xls">
                                {({ getRootProps, getInputProps }) => (
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <button style={mystyle}>Import Excel Product</button>
                                    </div>
                                )}
                            </Dropzone>
                            <button style={mystyle}>Export Product Excel</button>
                        </div>

                        <TableProduct />
                    </div>
                );
            case 'promotion':
                return(
                    <div>
                        <button style={mystyle}>Export Excel Promotion</button>
                        <TablePromotion />
                    </div> 
                );
            case 'order':
                return <TableOrder />;
            case 'employee':
                return <TableEmployee />;
            case 'store':
                return <TableStore />;
            case 'invoice':
                return <TableInvoice />;
            default:
                return <TableNews />;
        }
    }

    let linkPath;
    switch (type) {
        case "product":
            linkPath = "products";
            break;
        case "customer":
            linkPath = "customers";
            break;
        case "order":
            linkPath = "orders";
            break;
        case "employee":
            linkPath = "employees";
            break;
        case "promotion":
            linkPath = "promotions";
            break;
        case "store":
            linkPath = "stores";
            break;
        case 'invoice':
            linkPath = 'invoices';
            break;
        default:
            linkPath = 'news';
            break;
    }
    return (
        <div className={classes.list_page}>
            <Sidebar />

            <div className={classes.list_page_main}>
                <Navbar />

                <div className={classes.data_table}>
                    <div className={classes.btnn}>
                        <Link
                            to={`/${linkPath}/addnew`}
                            style={{ textDecoration: "none" }}
                        >
                            <button type="button">Add New {type}</button>
                        </Link>
                    </div>

                    {/* select the content of the table  */}
                    <Table type={type} />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayoutPage;
//{type === 'customer' ? <TableCustomer /> : <TableProduct type='product'/>}
