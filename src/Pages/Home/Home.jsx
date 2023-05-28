import React from 'react';
import Chart from '../../Components/Chart/Chart';
import ItemLists from '../../Components/ItemLists/ItemLists';
import Navbar from '../../Components/Bar/Navbar/Navbar';
import ProgressBar from '../../Components/Bar/ProgressBar/ProgressBar';
import Sidebar from '../../Components/Bar/Sidebar/Sidebar';
import TableCustomer from '../../Components/DataTable/TableCustomer/TableCustomer';
import classes from './Home.module.scss';

function Home() {
    //
    return (
        <div className={classes.home}>
            <Sidebar />

            <div className={classes.home_main}>
                <Navbar />

                <div className={classes.bg_color} />

                <div className={classes.home_items}>
                    <ItemLists type="customer" />
                    <ItemLists type="order" />
                    <ItemLists type="earning" />
                    <ItemLists type="balance" />
                </div>

                <div className={classes.chart_sec}>
                    <ProgressBar />
                    <Chart height={450} title="Revenue" />
                </div>

                <div className={classes.table}>
                    <div className="title">Đơn hàng mới nhất</div>
                    <TableCustomer />
                </div>
            </div>
        </div>
    );
}

export default Home;
