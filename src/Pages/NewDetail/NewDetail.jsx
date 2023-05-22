/* eslint-disable react/no-array-index-key */
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Bar/Navbar/Navbar';
import Sidebar from '../../Components/Bar/Sidebar/Sidebar';
import blogimg from '../../Assets/Images/blog2.jpg';
import classes from './NewDetail.module.scss';
import { useParams } from 'react-router-dom'
import api from '../../Api/NewsApi'

function NewsDetail() {
    const [news, setNews] = useState();
    const { slug } = useParams();

    useEffect(() => {
        api.getNewsById(slug).then(result => setNews(result))
    }, [slug])



    return (
        <div className={classes.blog_details}>
            <Sidebar />

            <div className={classes.detail_page_main}>
                <Navbar />

                <div className={classes.blog_detailss}>
                    <h1>{news?.title}</h1>

                    <img src={news?.image} alt="Travel blogs" className={classes.blog_detail_img} />

                    <div className={classes.blog_detail_tv}>
                        <p>
                            <CalendarMonthIcon style={{ marginRight: '3px' }} />
                            {news?.dateSource}
                        </p>
                    </div>

                    {/* {news.text.map((t) => (
                        <p className={classes.blog_detail_txt}>{t}</p>
                    ))} */}

                    <div className={classes.tags}>
                        <h3>Category:</h3>
                        <span className={classes.blog_detail_tag}>
                            {news?.category}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsDetail;
