import React, { useState, useEffect, useRef } from "react";
import styles from "./NewsAdd.module.scss";
import './NewsAdd.css'
import Swal from "sweetalert2";
import { Box } from "@mui/system";
import { Grid, Button, Select, FormControl, InputLabel, MenuItem } from "@mui/material";
import api from '../../Api/NewsApi'
import JoditEditor from 'jodit-react';
import { useMemo } from "react";
import Sidebar from "../../Components/Bar/Sidebar/Sidebar";
import Navbar from "../../Components/Bar/Navbar/Navbar";
import { useNavigate } from "react-router-dom";


function NewsAdd() {
  const navigate = useNavigate();

  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [dateSource, setDateSource] = useState();
  const [category, setCategory] = useState();
  const [detail, setDetail] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const editor = useRef(null);
  const config = useMemo(
    () => ({
      readonly: false,
      uploader: { insertImageAsBase64URI: true },
      removeButtons: ["brush", "file", "fullsize"],
      showXPathInStatusbar: false,
      showCharsCounter: false,
      showWordsCounter: false,
    }),
    []
  );

  const inputId = [
    "image",
    "title",
    "description",
    "dateSource",
  ];

  const useStateEvent = [
    setImage,
    setTitle,
    setDescription,
    setDateSource,
  ];

  const placeHolder = [
    "Nhập link ảnh",
    "Nhập tiêu đề",
    "Nhập mô tả",
    "Nhập ngày đăng",
  ];

  const textValue = [
    "Link ảnh",
    "Tiêu đề",
    "Mô tả",
    "Ngày đăng",
  ];

  const inputType = ["text", "text", "text", "text"]

  // object data
  const data = {
    image: image,
    title: title,
    description: description,
    dateSource: dateSource,
    category: category,
    detail: detail,
  };



  const handleBlur = (e) => {
    if (e.target.value === "") {
      e.target.style.borderColor = "red";
    } else {
      e.target.style.borderColor = "#000";
    }
  };


  const handleCreatePost = async (e) => {
    e.preventDefault();
    api.createNews(data)
      .then(async (res) => {
        await Swal.fire({
          position: "center",
          icon: "success",
          title: "Tạo dữ liệu thành công!",
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/news")
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.add_new}>
      <Sidebar />

      <div className={styles.new_page}>
        <Navbar />

        <div className={styles.new_page_main}>
          <div className={styles.bPopup}>
            <h3>Thêm tin tức</h3>
            <br />
            <Box sx={{ flexGrow: 1, overflow: "scroll" }}>
              <form onSubmit={handleCreatePost}>
                <Grid container>
                  {inputId.map((item, index) => (
                    <Grid key={index} item xs={4} sx={{ height: "93px" }}>
                      <label htmlFor={item[index]} className={styles.label}>
                        {textValue[index]}
                      </label>
                      <br />
                      <input
                        id={item[index]}
                        name={item[index]}
                        type={inputType[index]}
                        required
                        placeholder={placeHolder[index]}
                        onChange={(e) =>
                          useStateEvent[index](
                            e.target.value
                          )
                        }
                        onBlur={handleBlur}
                      />
                    </Grid>
                  ))}
                  <Grid item xs={4} sx={{ height: "93px" }}>
                    <FormControl fullWidth sx={{ m: 1, minWidth: 120 }} size="small">
                      <InputLabel id="demo-simple-select-label">Loại tin tức</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Phân loại"
                        onChange={handleChange}
                      >
                        <MenuItem value={"appleNews"}>Tin tức Apple</MenuItem>
                        <MenuItem value={"review"}>Bài viết Review</MenuItem>
                        <MenuItem value={"explore"}>Khám phá</MenuItem>
                        <MenuItem value={"trick"}>Thủ thuật</MenuItem>
                        <MenuItem value={"other"}>Tin khác</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <label className={styles.label}>Chi tiết</label>
                  </Grid>
                  <Grid item xs={12}>
                    <JoditEditor
                      ref={editor}
                      value={detail}
                      config={config}
                      tabIndex={999} // tabIndex of textarea
                      onChange={newContent => {
                        setDetail(newContent)
                      }}
                    />
                  </Grid>
                </Grid>
                <div className={styles.btn}>
                  <Button
                    variant="contained"
                    color="success"
                    size="large"
                    sx={{
                      fontSize: "14px",
                      width: "160px",
                      margin: "24px 0 0"
                    }}
                    type={"submit"}
                  onClick={handleCreatePost}
                  >
                    Thêm dữ liệu
                  </Button>
                  <Button
                variant="contained"
                color="error"
                size="large"
                sx={{
                  fontSize: "14px",
                  width: "100px",
                  margin: "24px 36px 0 20px"
                }}
                onClick={() => navigate("/news")}
              >
                Hủy
              </Button>
                </div>
              </form>
            </Box>
          </div>

        </div>
      </div>
    </div>

  );
}

export default NewsAdd;