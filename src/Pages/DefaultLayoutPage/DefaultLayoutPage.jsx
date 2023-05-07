import React from 'react';
import { Link } from 'react-router-dom';
import TableCustomer from '../../Components/DataTable/TableCustomer/TableCustomer';
import Navbar from '../../Components/Bar/Navbar/Navbar';
import Sidebar from '../../Components/Bar/Sidebar/Sidebar';
import TableProduct from '../../Components/DataTable/TableProduct/TableProduct';
import './DefaultLayoutPage.scss';

function  DefaultLayoutPage({ type }) {
    //
    return (
        <div className="list_page">
            <Sidebar />

            <div className="list_page_main">
                <Navbar />

                
                <div className="data_table">
                    <div className="btnn">

                        <Link
                            to={`/${
                                type === 'product' ? 'products' : 'customer' ? 'customers' : 'blogs'
                            }/addnew`}
                            style={{ textDecoration: 'none' }}
                        >
                            <button type="button">Add New {type}</button>
                        </Link>
                    </div>

                    {/* select the content of the table  */}
                    {type === 'customer' ? <TableCustomer /> : <TableProduct type='product'/>}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayoutPage;
