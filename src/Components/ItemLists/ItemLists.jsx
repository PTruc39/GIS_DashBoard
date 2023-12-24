import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FeedIcon from '@mui/icons-material/Feed';
import BadgeIcon from '@mui/icons-material/Badge';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './itemlists.module.scss';
import axios from 'axios';
import SummarizeIcon from '@mui/icons-material/Summarize';
import BuildIcon from '@mui/icons-material/Build';

function ItemLists({ type }) {
    const [customer,setCustomer] = useState(0);
    const [order,setOrder] = useState(0);
    const [news , setNews] = useState(0);
    const [employee,setEmployee] = useState(0);
    const GetAllCustomer = () => {
        axios.get('http://localhost:3001/api/auth')
        .then(response => {
            setCustomer(response.data.totalKH);
        })
    }
    const GetAllOrders = () => {
        axios.get('http://localhost:3001/api/don-hang')
        .then(response => {
            setOrder(response.data.totalOrder);
        })
    }
    const GetAllNews = () => {
        axios.get('http://localhost:3001/api/tin-tuc')
        .then(response => {
            setNews(response.data.totalNews);
        })
    }
    const GetAllEmployees = () => {
        axios.get('http://localhost:3001/api/nhanvien')
        .then(response => {
            setEmployee(response.data.length);
        })
    }
    useEffect(() => {
        GetAllCustomer();
        GetAllOrders();
        GetAllNews();
        GetAllEmployees();
    },[]);

    let data;

    
    switch (type) {
        case 'repair':
            data = {
                title: 'Đang sửa chữa',
                count: customer,
                icon: (
                    <BuildIcon
                        style={{
                            color: '#FF74B1',
                            backgroundColor: '#FFD6EC',
                        }}
                        className="icon"
                    />
                ),
                link: 'Xem tất cả trạng thái',
                linkto: '/repair',
            };
            break;
        case 'Report':
            data = {
                title: 'Báo cáo',
                count: order,

                icon: (
                    <SummarizeIcon
                        style={{
                            color: '#AC7088',
                            backgroundColor: '#FFF38C',
                        }}
                        className="icon"
                    />
                ),
                link: 'Xem tất cả báo cáo',
                linkto: '/products2',
            };
            break;
      
        case 'employee':
            data = {
                title: 'Nhân viên',
                count: employee,
                icon: (
                    <PermIdentityIcon
                        style={{
                            color: '#AC7088',
                            backgroundColor: '#C0C0C0',
                        }}
                        className="icon"
                    />
                ),
                link: 'Xem tất cả nhân viên',
                linkto: '/employees',
            };
            break;
        default:
            break;
    }

    return (
        <div className={classes.item_listss}>
            <div className={classes.name}>
                <p>{data.title}</p>
            </div>
            {/* Note right there */}

            <div className={classes.counts}>
                {data.count}
            </div>

            <div className={classes.see_item}>
                <Link to={data.linkto}>
                    <p>{data.link}</p>
                </Link>
                {data.icon}
            </div>
        </div>
    );
}

export default ItemLists;
