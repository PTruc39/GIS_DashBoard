import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import React, { useState, useEffect } from 'react';
import Input from '../../Components/Input/Input';
import Navbar from '../../Components/Bar/Navbar/Navbar';
import Sidebar from '../../Components/Bar/Sidebar/Sidebar';
// import noImage from '../../../Assets/Images/no-results.png';
import classes from './AddBody.module.scss';
import axios from 'axios';
import Swal from 'sweetalert2'
import { Link, history } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import BodyApi from '../../Api/BodyApi';

function AddBody({ inputs, titlee, typee }) {
    const [type, setType] = useState("Prism")
    // const [isDisabledHeight, setIsDisabledHeight] = (false)
    // const [isDisabledWidth, setIsDisabledWidth] = (true)
    const [bodyInpVal, setBodyInpVal] = useState({
        name: "",
        path: "",
        color: "",
        height: 0,
        material: "Xi măng"
    })

    const [coordinates, setCoordinates] = useState()

    const inputWidth = {
        id: 5,
        name: 'width',
        lable: 'Width',
        type: 'number',
        placeholder: '0',
        required: false,
        errorMsg: 'Width is required!',
    }
    const inputHeight = {
        id: 6,
        name: 'height',
        lable: 'Height',
        type: 'number',
        placeholder: '0',
        required: false,
        errorMsg: 'Height is required!',
    }

    const inputPath = {
        name: 'generalPath',
        lable: 'Face Path',
        type: 'text',
        placeholder: 'a/b/c',
        required: false,
        errorMsg: 'Path is required!',
    }

    const inputCoordinates = {
        name: 'nodeData',
        lable: 'Coordinates',
        type: 'text',
        placeholder: 'a/b/c',
        required: false,
        errorMsg: 'Path is required!',
    }


    // const []
    // dynamically change the state values
    // State để lưu trữ giá trị được chọn
    const [selectedValue, setSelectedValue] = useState('');

    // Hàm xử lý sự kiện onChange
    const handleSelectChange = (event) => {
        setType(event.target.value)
        setSelectedValue(event.target.value);
    };

    useEffect(()=>{
            if(type === 'Prism')
            {
                setBodyInpVal({
                    name: "",
                    path: "",
                    color: "",
                    height: 0,
                    material: ""
                })
            } else if (type)
            {
                setBodyInpVal({
                    name: "",
                    path: "",
                    color: "",
                    width: 0,
                    material: ""
                })
            }
    },[type])
    
    const [formInp, setFormInp] = useState(bodyInpVal);
    const [formInp2, setFormInp2] = useState({
        generalPath: "",
        nodeData: [[[[0]]]]
    })

    const [ file, setFile] = useState('');

    const image = false;
    
    const {id} = useParams();

    const navigate = useNavigate();

    function AddNewItem(type) {
        console.log(type);
        console.log("formInp", formInp)
        // axios.post(GetApiPost(type), formInp)
        // .then(response => {
        //     console.log(response.data);
        //         })
        // .then(()=>navigate(-1))
        // .catch(error => {
        //     console.error(error);
        // });   
    }
    
    const handleSuccessAction = () => {
        Swal.fire({
            title: "Success",
            icon: "success",
            text: "Update successfully",
            button: "Ok"    
        });
      };

      const handleCoordinatesChange = (e) => {
        setCoordinates(e.target.value);
        convertInputToArray(e);
      };
      const convertInputToArray = (e) => {
        try {
          // Parse chuỗi đầu vào thành một mảng
          console.log(e.target.value)
          const newArray = JSON.parse(e.target.value);
    
          console.log(newArray)
          // Kiểm tra xem newArray có phải là mảng [[[[float]]]] hay không
          if (
            Array.isArray(newArray) &&
            Array.isArray(newArray[0]) &&
            Array.isArray(newArray[0][0]) &&
            Array.isArray(newArray[0][0][0]) &&
            typeof newArray[0][0][0][0] === 'number'
          ) {
            // Nếu là mảng mong muốn, bạn có thể lưu vào state hoặc thực hiện các thao tác khác
            console.log('Mảng mới:', newArray);
            setFormInp2({...formInp2, ["nodeData"]: newArray})
          } else {
            throw new Error('Chuỗi đầu vào không hợp lệ');
          }
        } catch (error) {
          console.error('Lỗi khi chuyển đổi chuỗi:', error.message);
        }
      };
    const handleChange = (e) => {
        console.log(e.target.value)
        setFormInp({ ...formInp, [e.target.name]: e.target.value });
    };

    const handleChange2 = (e) => {
        console.log("path face nè: ",e.target.value)
        setFormInp2({ ...formInp2, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        AddNewItem(type);
        console.log(formInp);
        try {
            let response
            if(type === "Prism")
            {
                response = await BodyApi.postPrism(formInp);
            } else if(type === "BodyComp")
            {
                response = await BodyApi.postBodyComp(formInp);
            }
            console.log("response cho cái body ",response)

            if (response.path === formInp.path) {
                // Thành công, hiển thị thông báo
                Swal.fire({
                  title: "Thành công",
                  icon: "success",
                  text: "Thêm thành công",
                  confirmButtonText: 'Ok',
                }).then((result) => {
                  if (result.isConfirmed) {
                    console.log("OKKKKKK");
                    // Nếu người dùng nhấp OK, bạn có thể thực hiện hành động khác, ví dụ: điều hướng đến trang khác
                  }
                });
            } else {
                // Thất bại, hiển thị thông báo lỗi
                Swal.fire({
                  title: "Lỗi",
                  icon: "error",
                  text: "Có lỗi xảy ra khi thêm",
                  confirmButtonText: 'Ok',
                });
            }
        } catch (error) {
            console.error('Lỗi khi gọi API:', error.message);
        }
        
    };

    const handleSubmit2 = async(e) => {
        e.preventDefault();
        // AddNewItem(type);
        // convertInputToArray();
        console.log(formInp2);
        try {
            let response = await BodyApi.postFaceNode(formInp2);

            console.log(response)
            if (response === "Success") {
                response = await BodyApi.postFaceNodeIds(formInp2);
                // Thành công, hiển thị thông báo
            if (response === "Success") {
                Swal.fire({
                  title: "Thành công",
                  icon: "success",
                  text: "Thêm thành công",
                  confirmButtonText: 'Ok',
                }).then((result) => {
                  if (result.isConfirmed) {
                    console.log("OKKKKKK");
                  }
                });
            } else {
                // Thất bại, hiển thị thông báo lỗi
                Swal.fire({
                  title: "Lỗi",
                  icon: "error",
                  text: "Có lỗi xảy ra khi thêm",
                  confirmButtonText: 'Ok',
                });
            }
        }
        } catch (error) {
            console.error('Lỗi khi gọi API:', error.message);
        }
    };
    return (
        <div className={classes.add_new}>
            <Sidebar />

            <div className={classes.new_page}>
                <Navbar />

                <div className={classes.new_page_main}>
                    <div className={classes.new_page_content}>
                        <form onSubmit={handleSubmit2} className={classes.form2}>
                                <Input
                                    {...inputPath}
                                    value={formInp2[inputWidth.name]}
                                    onChange={handleChange2}
                                />
                                 <Input
                                    {...inputCoordinates}
                                    value={coordinates}
                                    onChange={handleCoordinatesChange}
                                />
                                
                            <button type="submit" className={classes.submit_btn}>
                                Tạo Face mới
                            </button>
                        </form>

                        <form onSubmit={handleSubmit} className={classes.form}>
                            <div>
                                <label htmlFor="selectOption"><b>Chọn loại body:</b></label>
                                <select
                                    id="selectOption"
                                    value={selectedValue}
                                    onChange={handleSelectChange}
                                >
                                    <option value="Prism">Prism</option>
                                    <option value="BodyComp">BodyComp</option>
                                </select>   
                            </div>

                            {inputs.map((detail) => (
                                <Input
                                    key={detail.id}
                                    {...detail}
                                    value={formInp[detail.name]}
                                    onChange={handleChange}
                                />
                            ))}
                            <Input
                                    key={inputWidth.id}
                                    {...inputWidth}
                                    disabled={type==='BodyComp'? false : true }
                                    value={formInp[inputWidth.name]}
                                    onChange={handleChange}
                                />
                            <Input
                                    key={inputHeight.id}
                                    {...inputHeight}
                                    disabled={type==='Prism'? false : true }
                                    value={formInp[inputHeight.name]}
                                    onChange={handleChange}
                                />
                            <div>
                                <label htmlFor="material"><b>Chọn vật liệu:</b></label>
                                <select
                                    id="material"
                                    name="material"
                                    value={formInp['material']}
                                    onChange={handleChange}
                                >
                                    <option value="Xi măng">Xi măng</option>
                                    <option value="Ngói">Ngói</option>
                                    <option value="Kính">Kính</option>
                                    <option value="Gỗ">Gỗ</option>
                                    <option value="Sắt">Sắt</option>
                                </select>
                            </div>

                            <button type="submit" className={classes.submit_btn}>
                                Tạo Body mới
                            </button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBody;