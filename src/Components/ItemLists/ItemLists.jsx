import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './itemlists.module.scss';

function ItemLists({ type }) {
    let data;

    
    switch (type) {
        case 'customer':
            data = {
                title: 'Khách hàng',
                isMoney: false,
                count: 232,
                icon: (
                    <PermIdentityIcon
                        style={{
                            color: '#FF74B1',
                            backgroundColor: '#FFD6EC',
                        }}
                        className="icon"
                    />
                ),
                link: 'Xem tất cả khách hàng',
                linkto: '/customers',
            };
            break;
        case 'order':
            data = {
                title: 'Đơn hàng',
                isMoney: false,
                count: 34,

                icon: (
                    <LocalGroceryStoreOutlinedIcon
                        style={{
                            color: '#AC7088',
                            backgroundColor: '#FFF38C',
                        }}
                        className="icon"
                    />
                ),
                link: 'Xem tất cả đơn hàng',
                linkto: '/',
            };
            break;
        case 'earning':
            data = {
                title: 'Tin tức',
                isMoney: true,
                count: 67,
                icon: (
                    <AttachMoneyOutlinedIcon
                        style={{
                            color: '#367E18',
                            backgroundColor: '#A7FFE4',
                        }}
                        className="icon"
                    />
                ),
                link: 'Xem tất cả tin tức',
                linkto: '/',
            };
            break;
        case 'balance':
            data = {
                title: 'Nhân viên',
                count: 444,
                isMoney: true,
                icon: (
                    <PaidOutlinedIcon
                        style={{
                            color: '#AC7088',
                            backgroundColor: '#B1B2FF',
                        }}
                        className="icon"
                    />
                ),
                link: 'Xem tất cả nhân viên',
                linkto: '/',
            };
            break;
        default:
            break;
    }

    return (
        <div className={classes.item_listss}>
            <div className={classes.name}>
                <p>{data.title}</p>
                <span className={classes.persentage_positive}>
                    <KeyboardArrowUpIcon />
                    20 %
                </span>
            </div>
            {/* Note right there */}

            <div className={classes.counts}>
                {data.isMoney && <AttachMoneyOutlinedIcon />}
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
