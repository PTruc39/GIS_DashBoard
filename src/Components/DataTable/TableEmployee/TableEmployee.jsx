import { DataGrid } from '@mui/x-data-grid';
import React, { useState,useEffect } from 'react';
import EmployeeApi from '../../../Api/EmployeeApi.js';
import { Link } from 'react-router-dom';
import man from '../../../Assets/Images/portrait.png';
import classes from './TableEmployee.module.scss';
import { update } from 'immutable';
import Swal from 'sweetalert2';


const userData = [
    {
        id: '1',
        hoten: 'Trúc',
        email: 'linha1xp@gmail.com',
        image: man,
        role: 'admin',
        sdt:'0987'
    },
    {
        id: '2',
        hoten: 'Trúc',
        email: 'linha1xp@gmail.com',
        image: man,
        role: 'admin',
        sdt:'0987'
    },
    {
        id: '3',
        hoten: 'Trúc',
        email: 'linha1xp@gmail.com',
        image: man,
        role: 'admin',
        sdt:'0987'
    },
    {
        id: '4',
        hoten: 'Trúc',
        email: 'linha1xp@gmail.com',
        image: man,
        role: 'admin',
        sdt:'0987'
    }
];

function TableEmployee({type}) {
    const [data, setData] = useState(userData);


    const GetAllProduct = () => {
        EmployeeApi.getAllNV()
            .then((response) => {
                let index = 0;
                const fetchedData = response.map((item) => {
                    index = index + 1;
                    return {
                        ...item
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
        GetAllProduct();
    }, []);

    const handleDlt = (id) => {
        EmployeeApi.deleteNV(id)
            .then((response) => {
                console.log("Xóa thành công.");
            })
            .catch((error) => {
                console.error("Error deleting item:", error);
            });
    };

    const handleSuccessAction = async (id) => {
        const notification = await Swal.fire({
            title: "Xóa nhân viên này?",
            icon: "warning",
            text: "Bạn có muốn xóa nhân viên này?",
            button: "Ok",
            showCancelButton: true,
            confirmButtonText: "Ok",
        });
        if (notification.isConfirmed) {
            handleDlt(id);
            Swal.fire({
                title: "Xóa thành công",
                icon: "success",
                showConfirmButton: false,
                timer: 800,
            });
            GetAllProduct();
            window.location.reload();
        }
    };

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 110,
            renderCell: (param) => (
                <div className={classes.userr}>
                    {param.row.id}
                </div>
            ),
        },
        {
            field: 'name',
            headerName: 'Tên',
            width: 180,
        },
        { field: 'role', headerName: 'Chức vụ', width: 120 },
        { field: 'email', headerName: 'Email', width: 280 },
        {
            field: 'sdt',
            headerName: 'SDT',
            width: 150,
            renderCell: (param) => (
                <div className={`status ${param.row.address}`}>{param.row.sdt}</div>
            ),
        },
        {
            field: 'action',
            headerName: 'Hành động',
            width: 270,
            renderCell: (params) => (
                <div className={classes.actionn}>
                    <button
                        type="button"
                        className={classes.delete_btn}
                        onClick={() => handleSuccessAction(params.row._id)}
                    >
                        Xóa
                    </button>
                    <Link 
                        to={`/employees/updatenew/${params.row.id}`}
                        style={{ textDecoration: 'none' }}
                        
                    >
                        <button
                            type="button"
                            className={classes.update_btn}

                        >Cập Nhật</button>

                    </Link>
                    
                </div>
            ),
        },
    ];

    return (
        <div className={classes.data_table}>
            <DataGrid
                className={classes.data_grid}
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    );
}

export default TableEmployee;
