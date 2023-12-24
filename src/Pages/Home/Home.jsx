import React from 'react';
import Chart from '../../Components/Chart/Chart';
import ItemLists from '../../Components/ItemLists/ItemLists';
import Navbar from '../../Components/Bar/Navbar/Navbar';
import ProgressBar from '../../Components/Bar/ProgressBar/ProgressBar';
import Sidebar from '../../Components/Bar/Sidebar/Sidebar';
import classes from './Home.module.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

function Home() {


    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const exportToExcel = (dataInput) => {
        console.log("Excute");
        const worksheet = XLSX.utils.json_to_sheet(dataInput);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        return data;
    };
    const handleExportClick = () => {
        const excelData = exportToExcel(data);
        saveAs(excelData, 'data.xlsx');
      };
    
    const mystyle = {
        cursor: 'pointer',
        color: "white",
        backgroundColor: "#FF46BE",
        padding: "10px",
        fontSize: "16px",
        fontFamily: "Arial",
        borderRadius: '4px',
        border: 'none',
        marginLeft: '30px'

    };



    //
    return (
        <div className={classes.home}>
            <Sidebar />

            <div className={classes.home_main}>
                <Navbar />

                <div className={classes.bg_color} />

                <div className={classes.home_items}>
                    
                    <ItemLists type="repair" />
                    <ItemLists type="Report" />
                    <ItemLists type="employee" />
                </div>
{/*<div>  <div dangerouslySetInnerHTML={{ __html: htmlFileString }}></div> </div>*/}
               


            </div>
        </div>
    );
}

export default Home;
