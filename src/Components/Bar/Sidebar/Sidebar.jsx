import CreditCardIcon from '@mui/icons-material/CreditCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import TableChartIcon from '@mui/icons-material/TableChart';
import DiscountIcon from '@mui/icons-material/Discount';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ColorContext } from '../../../ColorContext/darkContext';
import './Sidebar.scss';

function Sidebar() {
    
    const { darkMode, dispatch } = useContext(ColorContext);

    return (
        <div className="sidebar">
            <div className="logo">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h3 className="text_none">AppleDunk</h3>
                </Link>
            </div>

            <div className="links">
                <ul>
                    <p className="spann">Trang chủ</p>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <DashboardIcon className="icon" /> Doanh Thu
                        </li>
                    </Link>

                    <p className="spann">lists</p>
                    <Link to="/customers" style={{ textDecoration: 'none' }}>
                        <li>
                            <PersonIcon className="icon" /> Quản Lý Khách Hàng
                        </li>
                    </Link>
                    <Link to="/employees" style={{ textDecoration: 'none' }}>
                        <li>
                            <PersonIcon className="icon" /> Quản Lý Nhân Viên
                        </li>
                    </Link>
                    <Link to="/promotions" style={{ textDecoration: 'none' }}>
                        <li>
                            <PersonIcon className="icon" /> Quản Lý Khuyến Mãi
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: 'none' }}>
                        <li>
                            <TableChartIcon className="icon" /> Quản Lý Sản Phẩm
                        </li>
                    </Link>
                    <Link to="/news" style={{ textDecoration: 'none' }}>
                        <li>
                            <LibraryBooksIcon className="icon" /> Quản Lý Tin Tức
                        </li>
                    </Link>
                    <Link to="/orders" style={{ textDecoration: 'none' }}>
                        <li>
                            <CreditCardIcon className="icon" /> Quản Lý Đơn Hàng
                        </li>
                    </Link>
                    <Link to="/stores" style={{ textDecoration: 'none' }}>
                        <li>
                            <CreditCardIcon className="icon" /> Quản Lý Cửa Hàng
                        </li>
                    </Link>
                    <Link to="/invoices" style={{ textDecoration: 'none' }}>
                        <li>
                            <DiscountIcon className="icon" /> Quản Lý Hóa Đơn
                        </li>
                    </Link>    
                    <Link to="/guarantee" style={{ textDecoration: 'none' }}>
                        <li>
                            <CreditCardIcon className="icon" /> Quản Lý Bảo Hành
                        </li>
                    </Link>
                    <p className="spann">Cài đặt</p>
                    <Link to="/login" >
                        <li>
                            <LogoutIcon className="icon" /> Đăng xuất
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
