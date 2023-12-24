import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './TableOrder.module.scss';
import api from '../../../Api/OrderApi'
import Swal from 'sweetalert2';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function TableOrder({ type }) {
    const [data, setData] = useState();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => { setOpen(false); setSelected(null) };
    useEffect(() => {
        api.getAllOrders().then(result => setData(result))
    }, [])
    const [selected, setSelected] = useState(null);
    const [products, setProducts] = useState(null);

    const handleDelete = (madh) => {
        Swal.fire({
            title: 'Bạn muốn xóa không?',
            showDenyButton: true,
            confirmButtonText: 'Có',
            denyButtonText: 'Không',
            customClass: {
                actions: 'my-actions',
                cancelButton: 'order-1 right-gap',
                confirmButton: 'order-2',
                denyButton: 'order-3',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                api.deleteOrder(madh).then(async (res) => {
                    await Swal.fire('Xóa thành công!', '', 'success');
                    window.location.reload();
                }).catch((err) => {
                    console.log(err);
                });
            }
        })
    };

    // useEffect(() => {
    //     if (selected) {
    //         if (selected.products.length !== 0) {
    //             let arr = [];
    //             console.log(selected)
    //             selected.products.map((product, index) => axios.get(`http://localhost:3001/api/productn/${product.productId}`)
    //                 .then(response => {
    //                     arr.push({name: response.data.tensanpham, soluong: product.soluong});
    //                 })
    //                 .catch(error => {
    //                     console.error(error);
    //                 })
    //             )
    //             setProducts(arr)
    //         }
    //     } else {
    //         setProducts(null)
    //     }
    // }, [selected])

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 50,
        },
        
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'sdt', headerName: 'SDT', width: 300 },
        { field: 'message', headerName: 'Nội dung', width: 300 },
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => (
                <div className={classes.actionn}>
                    <button type="button" className={classes.view_btn} onClick={() => { handleOpen(); setSelected(params.row) }}>
                        Xem
                    </button>
                    <button
                        type="button"
                        className={classes.delete_btn}
                        onClick={() => handleDelete(params.row.madh)}
                    >
                        Xóa
                    </button>
                    
                </div>
            ),
        },
    ];

    return (
        <div className={classes.blog_page}>

            <div className={classes.blog_page_main}>

                <div className={classes.blog_page_table}>

                    {data && <DataGrid
                        rowHeight={100}
                        getRowId={(row) => row.id}
                        className={classes.data_grid}
                        rows={data}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                    />}
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            {selected && <div>
                                <p>Tên người gửi: {selected.name}</p><br></br>
                                <p>Email: {selected.email}</p><br></br>
                                <p>Nội dung: {selected.message}</p><br></br>
                                <p>Ngày gửi: {selected.createdAt}</p><br></br>
                    
                                
                            </div>}
                        </Box>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default TableOrder;
