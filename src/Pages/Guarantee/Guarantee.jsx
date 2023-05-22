import React from 'react';
import { useState } from 'react';
import Navbar from '../../Components/Bar/Navbar/Navbar';
import Sidebar from '../../Components/Bar/Sidebar/Sidebar';
import classes from './Guarantee.module.scss';
import TableGuarantee from '../../Components/DataTable/TableGuarantee/TableGuarantee';
import axios from 'axios';

function Guarantee(){
    const [sdt,setSdt] = useState("09877763123");

    const handleChangeSDT = (e)=>{
        setSdt(e.target.value);
    }

    const [data, setData] = useState([]);

    const handleSearchGuarantee = () => {
        if(sdt!=""){
            axios
            .get(`https://applestore213.onrender.com/api/baohanh/sdt/${sdt}`)
            .then((response) => {
              const newData = response.data.map(item => ({
                  ...item,
                  id: item.mabh // Thêm trường dữ liệu mới
                  }));
                  setData(newData)
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        else console.log(sdt)
    }
    return(
        <div className={classes.list_page}>
            <Sidebar />
            <div className={classes.list_page_main}>
                <Navbar />
                <div className={classes.data_table}>
                    <div className={classes.btnn}>
                        <span>Nhập số điện thoại khách hàng:</span>
                        <input type="text" value={sdt} onChange={handleChangeSDT} />
                        <button type="button" onClick={handleSearchGuarantee}>Tìm</button>
                    </div>

                    {/* select the content of the table  */}

                    {data.length !== 0 && (() => {
                        return (
                            <>
                            <div>
                                Khách hàng: {data[0].hoten}
                            </div>
                            <div style={{marginTop:30}}>
                                <TableGuarantee data={data} />
                            </div>
                            </>
                        );
                        })()}

                    
                </div>
            </div>
        </div>
    );
}

export default Guarantee;