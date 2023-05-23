import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import CustomerApi from "../../../../Api/CustomerApi";
import { DataGrid } from '@mui/x-data-grid';
import Chart from '../../../Chart/Chart';
import Navbar from '../../../Bar/Navbar/Navbar';
import Sidebar from '../../../Bar/Sidebar/Sidebar';
import TableList from '../../TableProduct/TableProduct';
import userPic from '../../../../Assets/Images/portrait.png';
import classes from './Detail.module.scss';
import classes2 from '../TableCustomer.module.scss'
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";


const columns = [
    {
        field: 'id',
        headerName: 'Mã Khách hàng',
        width: 220,
        renderCell: (param) => (
            <div className={classes.userr}>
                {param.row.makh}
            </div>
        ),
    },
    {
        field: 'username',
        headerName: 'Mã đơn hàng',
        width: 280,
        renderCell: (param) => (
            <div className={classes.userr}>{param.row.madh}</div>
        )
    },
    {
        field: 'address',
        headerName: 'Tổng trị giá',
        width: 250,
        renderCell: (param) => (
            <div >{param.row.tongtrigia}</div>
        ),
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 270,
        renderCell: (params) => (
            <div className={classes.actionn}>
                <Link to={`/orders/${params.row._id}`}>
                    <button type="button" className={classes.view_btn}
                    onClick={()=>{console.log("BAM VIEW")}}
                    >
                        View
                    </button>
                </Link>
        </div>)
    }
];

function DetailCustomer() {
    // const { userId, productId } = useParams();
    let dynamicInpVal;
    const params = useParams();
    const [formInp, setFormInp] = useState(dynamicInpVal);
    const [data, setData]=useState([]);
    const GetCustomerById = (id) => {
        CustomerApi.getKHById(id)
            .then((response) => {
                setFormInp(response);
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const GetOrderById = (id) => {
        CustomerApi.getOrderByMaKH(id)
            .then((response) => {
                let index = 0;
                const fetchedData = response.orders.map((item) => {
                    index = index + 1;
                    return {
                        ...item,
                        id: index,
                    };
                });
                setData(fetchedData);
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    
    useEffect(() => {

        GetCustomerById(params.customerId);
        GetOrderById("KH02");
        
    }, []);

    return (
        <div className={classes.details}>
            <Sidebar />

            <div className={classes.detail_page_main}>
                <Navbar />

                <div className={classes.user_info}>
                    <div className={classes.user_detail}>
                        <img src={formInp?formInp.image.length>0?formInp.image[0].url:userPic:userPic} alt="user" className={classes.user_image} />

                        <div className={classes.user_detailss}>
                            <p className={classes.name}>Tên: {formInp?formInp.hoten:""}</p>
                            <p >Mã KH: {formInp?formInp.makh:""}</p>
                            <p >Giới tính: {formInp?formInp.gioitinh:""}</p>
                            <p>Email: {formInp?formInp.email:""}</p>
                            <p>Address: {formInp?formInp.diachia:""}</p>
                            <p>Ngày sinh:{formInp?formInp.ngaysinh:""}</p>
                        </div>
                    </div>

                    <div className={classes.user_chart}>
                        <Chart height={390} title="User spending" />
                    </div>
                </div>

                <div className={classes.table}>
                    <div className={classes.title}>Last Orders</div>
                    {/*<TableList />*/}
                    <div className={classes2.data_table}>
                         <DataGrid
                        className={classes2.data_grid}
                        rows={data}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        //checkboxSelection
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailCustomer;
