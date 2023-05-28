import React from 'react';
import Chart from '../../Components/Chart/Chart';
import ItemLists from '../../Components/ItemLists/ItemLists';
import Navbar from '../../Components/Bar/Navbar/Navbar';
import ProgressBar from '../../Components/Bar/ProgressBar/ProgressBar';
import Sidebar from '../../Components/Bar/Sidebar/Sidebar';
import TableCustomer from '../../Components/DataTable/TableCustomer/TableCustomer';
import classes from './Home.module.scss';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Home() {
    const data = [
        { name: 'A', value: 10 },
        { name: 'B', value: 20 },
        { name: 'C', value: 15 },
        { name: 'D', value: 5 },
    ];
    const dataX = [
        { name: 'Jan', value: 10 },
        { name: 'Feb', value: 20 },
        { name: 'Mar', value: 15 },
        { name: 'Apr', value: 5 },
        { name: 'May', value: 25 },
        { name: 'Jun', value: 12 },
    ];

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

                <div style={{display: 'flex'}}>
                    <BarChart width={500} height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                    <LineChart width={500} height={300} data={dataX}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="value" stroke="#8884d8" />
                    </LineChart>
                </div>


            </div>
        </div>
    );
}

export default Home;
