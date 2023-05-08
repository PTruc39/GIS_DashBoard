import React from 'react';
import { Link } from 'react-router-dom';
import TableCustomer from '../../Components/DataTable/TableCustomer/TableCustomer';
import Navbar from '../../Components/Bar/Navbar/Navbar';
import Sidebar from '../../Components/Bar/Sidebar/Sidebar';
import TableProduct from '../../Components/DataTable/TableProduct/TableProduct';
import TablePromotion from '../../Components/DataTable/TablePromotion/TablePromotion';
import TableOrder from '../../Components/DataTable/TableOrder/TableOrder';
import TableEmployee from '../../Components/DataTable/TableEmployee/TableEmployee';
import TableStore from '../../Components/DataTable/TableStore/TableStore';
import TableNews from '../../Components/DataTable/TableNews/TableNews';
import classes from './DefaultLayoutPage.module.scss';

function  DefaultLayoutPage({ type }) {
    //
    function Table({ type }) {
        switch(type) {
          case 'customer':
            return <TableCustomer />;
          case 'product':
            return <TableProduct type='product' />;
          case 'promotion':
            return <TablePromotion/>;  
        case 'order':
            return <TableOrder/>;  
        case 'employee':
            return <TableEmployee/>; 
            case 'store':
            return <TableStore/>; 
          default:
            return <TableNews/>; 
        }
    }

    let linkPath;
    switch (type) {
      case 'product':
        linkPath = 'products';
        break;
      case 'customer':
        linkPath = 'customers';
        break;
        case 'order':
        linkPath = 'orders';
        break;
        case 'employee':
        linkPath = 'employees';
        break;
        case 'promotion':
        linkPath = 'promotions';
        break;
        case 'store':
            linkPath = 'stores';
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
                            style={{ textDecoration: 'none' }}
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
