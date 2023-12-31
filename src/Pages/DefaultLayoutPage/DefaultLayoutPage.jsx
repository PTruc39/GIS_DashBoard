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
import TableDamage from '../../Components/DataTable/TableDamage/TableDamage';
import axios from 'axios';
import classes from './DefaultLayoutPage.module.scss';
import { Margin } from '@mui/icons-material';
import {saveAs} from 'file-saver';
import TableBuilding from '../../Components/DataTable/TableBuilding/TableBuilding';
import TableRepair from '../../Components/DataTable/TableRepair/TableRepair';

function DefaultLayoutPage({ type }) {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setSelectedFile(acceptedFiles[0]);
        const formData = new FormData();
        formData.append('file', file);
        axios.post('http://localhost:3001/api/importProductExcel', formData)
            .then(response => {
                console.log("Upload file successfully!");
                console.log(response);
            })
            .catch(error => {
                console.log("Error", error);
            })
    };
    //
    function DownloadProductExcel() {
        axios.get('http://localhost:3001/api/exportProductExcel',{
			responseType: 'blob',
		  })
            .then(response => {
                console.log("Download file successfully!");
                console.log(response);
                const blob = new Blob([response.data], { type: 'application/vnd.ms-excel' });
      			saveAs(blob, 'ProductData.xlsx');
            })
            .catch(error => {
                console.log("Error", error);
            })
    };
    function DownloadInvoiceExcel() {
        axios.get('http://localhost:3001/api/exportInvoiceExcel',{
			responseType: 'blob',
		  })
            .then(response => {
                console.log("Download file successfully!");
                console.log(response);
                const blob = new Blob([response.data], { type: 'application/vnd.ms-excel' });
      			saveAs(blob, 'InvoiceData.xlsx');
            })
            .catch(error => {
                console.log("Error", error);
            })
    };
    function DownloadPromotionExcel() {
        axios.get('http://localhost:3001/api/exportPromotionExcel',{
			responseType: 'blob',
		  })
            .then(response => {
                console.log("Download file successfully!");
                console.log(response);
                const blob = new Blob([response.data], { type: 'application/vnd.ms-excel' });
      			saveAs(blob, 'PromotionData.xlsx');
            })
            .catch(error => {
                console.log("Error", error);
            })
    };

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
            case 'repair':
                return <TableRepair />;
            case 'customer':
                return <TableCustomer />;
                case 'building':
                
                return (
                    <div >
                        <TableBuilding />
                    </div>
                );
                case 'damagereport':
                    return (
                        <div >
                            
                            <TableDamage/>
                        </div>
                    );
            case 'product':

                return (
                    <div >
                        

                        <TableProduct />
                    </div>
                );
            case 'promotion':
                return (
                    <div>
                        <button style={mystyle} onClick={DownloadPromotionExcel}>Export Excel Promotion</button>
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
                    
                return(
                    <div>
                        <button style={mystyle} onClick={DownloadInvoiceExcel}>Export Invoice Excel</button>
                        <TableInvoice />;
                    </div>
                );
            default:
                return <TableNews />;
        }
    }
console.log(type);
    let linkPath;
    let title;
    switch (type) {
        case "building":
            linkPath = "building";
            title = "công trình";
            break;
            case "repair":
            linkPath = "repair";
            title = "sửa chữa";
            break;
        case "product":
            linkPath = "products";
            title = "vật liệu";
            break;
            case "damagereport":
            linkPath = "products2";
            title = "hư hại";
            break;
        case "customer":
            linkPath = "customers";
            title = "khách hàng";
            break;
        case "order":
            linkPath = "orders";
            title = "đơn hàng";
            break;
        case "employee":
            linkPath = "employees";
            title = "nhân viên";
            break;
        case "promotion":
            linkPath = "promotions";
            title = "khuyến mãi";
            break;
        case "store":
            linkPath = "stores";
            title = "cửa hàng";
            break;
        case 'invoice':
            linkPath = 'invoices';
            title = "hóa đơn";
            break;
      default:
        linkPath = 'news';
        title = "";
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
                            {title !== 'đơn hàng' ? (
                            <button type="button">Thêm {title} mới</button>) : null}
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
