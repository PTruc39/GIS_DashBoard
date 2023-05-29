import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import { Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { Pie, PieChart, ResponsiveContainer, Cell } from 'recharts';

// import css filr
import classes from './progressBar.module.scss';
import axios from 'axios';

function ProgressBar() {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


    useEffect(() => {
        axios.get('http://localhost:3001/api/percentTypeProduct')
            .then(response => {
                setData(response.data.typeAndQuantity);
                setTotal(response.data.totalQuantity);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    console.log(data);

    return (
        <div className={classes.progress_bar}>
            <div className={classes.top}>
                <p>Tổng sản phẩm</p>
            </div>

            <div className={classes.middle}>
                <div className={classes.progress}>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Pie
                                dataKey="quantity"
                                nameKey="Type"
                                isAnimationActive={true}
                                data={data}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#4665fdce"
                                label
                            />
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill="red" />
                            ))}
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <p>Tổng sản phẩm hiện có</p>
                <p className={classes.price}>
                    <AttachMoneyOutlinedIcon style={{ fontSize: '32px' }} />
                    {total}
                </p>
            </div>

        </div>
    );
}

export default ProgressBar;
