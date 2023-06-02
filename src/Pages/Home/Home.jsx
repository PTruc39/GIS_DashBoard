import React from 'react';
import Chart from '../../Components/Chart/Chart';
import ItemLists from '../../Components/ItemLists/ItemLists';
import Navbar from '../../Components/Bar/Navbar/Navbar';
import ProgressBar from '../../Components/Bar/ProgressBar/ProgressBar';
import Sidebar from '../../Components/Bar/Sidebar/Sidebar';
import classes from './Home.module.scss';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Home() {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        axios.get('http://localhost:3001/api/totalRevenueByMonth')
            .then(response => {
                setData(response.data.monthAndRevenue);
                setTotal(response.data.totalRevenue);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    
   

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
                </div>

                <div className={classes.column}>
                    <BarChart width={1100} height={600} data={data} className={classes.chart}>
                        <CartesianGrid strokeDasharray="4 5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="revenue" fill="#FFBB28" />
                    </BarChart>
                    <label>Biểu đồ doanh thu từng tháng</label>

                </div>


            </div>
        </div>
    );
}

export default Home;
