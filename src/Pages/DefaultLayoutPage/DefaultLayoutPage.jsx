import React , {useState} from 'react';
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

function DefaultLayoutPage({ type }) {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setSelectedFile(acceptedFiles[0]);
        const formData = new FormData();
        formData.append('file',file);
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
        switch (type) {
            case 'customer':
                return <TableCustomer />;
            case 'product':
                return <TableProduct />;
            case 'promotion':
                return <TablePromotion />;
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
    let title;
    switch (type) {
        case "product":
            linkPath = "products";
            title = "sản phẩm";
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
                            <button type="button">Thêm {title} mới</button>
                        </Link>
                        <Dropzone onDrop={handleFileDrop} accept=".xlsx,.xls">
                            {({ getRootProps, getInputProps }) => (
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <button>Import Excel Product</button>
                                </div>
                            )}
                        </Dropzone>
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
