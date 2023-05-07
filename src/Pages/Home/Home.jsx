import React from 'react';
import Chart from '../../Components/Chart/Chart';
import ItemLists from '../../Components/ItemLists/ItemLists';
import Navbar from '../../Components/Bar/Navbar/Navbar';
import ProgressBar from '../../Components/Bar/ProgressBar/ProgressBar';
import Sidebar from '../../Components/Bar/Sidebar/Sidebar';
import TableCustomer from '../../Components/DataTable/TableCustomer/TableCustomer';
import './Home.scss';

function Home() {
    //
    return (
        <div className="home">
            <Sidebar />

            <div className="home_main">
                <Navbar />

                <div className="bg_color" />

                <div className="home_items">
                    <ItemLists type="customer" />
                    <ItemLists type="order" />
                    <ItemLists type="earning" />
                    <ItemLists type="balance" />
                </div>

                <div className="chart_sec">
                    <ProgressBar />
                    <Chart height={450} title="Revenue" />
                </div>

                <div className="table">
                    <div className="title">Lates Orders</div>
                    <TableCustomer />
                </div>
            </div>
        </div>
    );
}

export default Home;