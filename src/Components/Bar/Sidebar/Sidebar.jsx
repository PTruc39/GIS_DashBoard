import CreditCardIcon from '@mui/icons-material/CreditCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import TableChartIcon from '@mui/icons-material/TableChart';
import DiscountIcon from '@mui/icons-material/Discount';
import SummarizeIcon from '@mui/icons-material/Summarize';
import StoreIcon from '@mui/icons-material/Store';
import ForumIcon from '@mui/icons-material/Forum';
import FoundationIcon from '@mui/icons-material/Foundation';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ColorContext } from '../../../ColorContext/darkContext';
import BuildIcon from '@mui/icons-material/Build';
import './Sidebar.scss';

function Sidebar() {
    
    const { darkMode, dispatch } = useContext(ColorContext);

    return (
        <div className="sidebar">
            <div className="logo">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h3 className="text_none">Notre Dame Cathedral</h3>
                </Link>
            </div>

            <div className="links">
                <ul>
                    <p className="spann">Trang chủ</p>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <DashboardIcon className="icon" /> Dashboard
                        </li>
                    </Link>

                    <p className="spann">lists</p>
                    {/*<Link to="/customers" style={{ textDecoration: 'none' }}>
                        <li>
                            <PersonIcon className="icon" /> Quản lý khách hàng
                        </li>
    </Link>*/}
                    <Link to="/employees" style={{ textDecoration: 'none' }}>
                        <li>
                            <PersonIcon className="icon" /> Quản lý nhân viên
                        </li>
                    </Link>
                     {/*<Link to="/promotions" style={{ textDecoration: 'none' }}>
                        <li>
                            <PersonIcon className="icon" /> Quản lý khuyến mãi
                        </li>
                    </Link>*/}
                    <Link to="/products" style={{ textDecoration: 'none' }}>
                        <li>
                            <TableChartIcon className="icon" /> Quản lý vật liệu
                        </li>
    </Link>
                    <Link to="/products2" style={{ textDecoration: 'none' }}>
                        <li>
                            <SummarizeIcon className="icon" /> Quản lý hư hại
                        </li>
                    </Link>
                    <Link to="/repair" style={{ textDecoration: 'none' }}>
                        <li>
                            <BuildIcon className="icon" /> Quản lý sửa chữa
                        </li>
                    </Link>
                    <Link to="/building" style={{ textDecoration: 'none' }}>
                        <li>
                            <FoundationIcon className="icon" /> Quản lý công trình
                        </li>
                    </Link>
                     {/*<Link to="/news" style={{ textDecoration: 'none' }}>
                        <li>
                            <LibraryBooksIcon className="icon" /> Quản lý tin tức
                        </li>
    </Link>*/}
                    <Link to="/orders" style={{ textDecoration: 'none' }}>
                        <li>
                            <ForumIcon className="icon" /> Quản lý phản hồi
                        </li>
                    </Link>
                     {/*<Link to="/stores" style={{ textDecoration: 'none' }}>
                        <li>
                            <StoreIcon className="icon" /> Quản lý cửa hàng
                        </li>
                    </Link>
                    <Link to="/invoices" style={{ textDecoration: 'none' }}>
                        <li>
                            <DiscountIcon className="icon" /> Quản Lý hóa đơn
                        </li>
                    </Link>    
                   <Link to="/guarantee" style={{ textDecoration: 'none' }}>
                        <li>
                            <CreditCardIcon className="icon" /> Quản lý bảo hành
                        </li>
    </Link>*/}
                    <p className="spann">Cài đặt</p>
                    <Link to="/login" >
                        <li>
                            <LogoutIcon className="icon" /> Đăng Xuất
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
