import React from 'react';
import Chart from '../../Components/Chart/Chart';
import Navbar from '../../Components/Bar/Navbar/Navbar';
import Sidebar from '../../Components/Bar/Sidebar/Sidebar';
import TableList from '../../Components/DataTable/TableProduct/TableProduct';
import userPic from '../../Assets/Images/portrait.png';
import './Detail.scss';

function Detail() {
    // const { userId, productId } = useParams();
    return (
        <div className="details">
            <Sidebar />

            <div className="detail_page_main">
                <Navbar />

                <div className="user_info">
                    <div className="user_detail">
                        <img src={userPic} alt="user" className="user_image" />

                        <div className="user_detailss">
                            <p className="name">Name: Nguyen Thanh Trung</p>
                            <p>Email: thanhtrung@gmail.com</p>
                            <p>Address: Quang Binh Province</p>
                            <p>Age: 21</p>
                        </div>
                    </div>

                    <div className="user_chart">
                        <Chart height={390} title="User spending" />
                    </div>
                </div>

                <div className="table">
                    <div className="title">Last Orders</div>
                    <TableList />
                </div>
            </div>
        </div>
    );
}

export default Detail;
