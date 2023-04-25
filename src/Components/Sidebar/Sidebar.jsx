import CreditCardIcon from '@mui/icons-material/CreditCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import TableChartIcon from '@mui/icons-material/TableChart';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ColorContext } from '../../ColorContext/darkContext';
import './Sidebar.scss';

function Sidebar() {
    // color state management using react context
    const { darkMode, dispatch } = useContext(ColorContext);

    return (
        <div className="sidebar">
            <div className="logo">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h3 className="text_none">adminDashboard</h3>
                </Link>
            </div>

            <div className="links">
                <ul>
                    <p className="spann">HOME</p>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <DashboardIcon className="icon" /> Dashboard
                        </li>
                    </Link>

                    <p className="spann">lists</p>
                    <Link to="/customers" style={{ textDecoration: 'none' }}>
                        <li>
                            <PersonIcon className="icon" /> Customers management
                        </li>
                    </Link>
                    <Link to="/employees" style={{ textDecoration: 'none' }}>
                        <li>
                            <PersonIcon className="icon" /> Employee management
                        </li>
                    </Link>
                    <Link to="/promotions" style={{ textDecoration: 'none' }}>
                        <li>
                            <PersonIcon className="icon" /> Promotions management
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: 'none' }}>
                        <li>
                            <TableChartIcon className="icon" /> Products Management
                        </li>
                    </Link>
                    <Link to="/news" style={{ textDecoration: 'none' }}>
                        <li>
                            <LibraryBooksIcon className="icon" /> News Management
                        </li>
                    </Link>
                    <Link to="/orders" style={{ textDecoration: 'none' }}>
                        <li>
                            <CreditCardIcon className="icon" /> Orders Management
                        </li>
                    </Link>
                    <p className="spann">Settings</p>
                    <Link to="/login" >
                        <li>
                            <LogoutIcon className="icon" /> Log Out
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
