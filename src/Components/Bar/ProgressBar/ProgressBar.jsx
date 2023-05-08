import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Tooltip } from '@mui/material';
import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

// import css filr
import classes from  './progressBar.module.scss';

function ProgressBar() {
    const data01 = [
        { name: 'Users', value: 23 },
        { name: 'Hotels', value: 30 },
        { name: 'Rooms', value: 15 },
        { name: 'Blogs', value: 19 },
        { name: 'Balance', value: 20 },
    ];

    return (
        <div className={classes.progress_bar}>
            <div className={classes.top}>
                <p>Total Revenue</p>
                <MoreVertOutlinedIcon />
            </div>

            <div className={classes.middle}>
                <div className={classes.progress}>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={data01}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#4665fdce"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <p>Total sales made today.</p>
                <p className={classes.price}>
                    <AttachMoneyOutlinedIcon style={{ fontSize: '32px' }} />
                    324
                </p>
            </div>

            <div className={classes.bottom}>
                <p>Previous transection processing. Last payments may not be included.</p>

                <div className={classes.botom_nested}>
                    <div className={classes.nested_nested}>
                        <p>Last Week</p>
                        <p className={classes.pricee}>
                            <KeyboardArrowUpOutlinedIcon /> $11.9k
                        </p>
                    </div>
                    <div className={classes.nested_nested}>
                        <p>Last Month</p>
                        <p className={classes.price_decrease}>
                            <KeyboardArrowUpOutlinedIcon /> $12.4k
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;
