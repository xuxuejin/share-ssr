import React, { useEffect, useState } from "react";
import WithStyle from "@/components/WithStyle";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { getNewsData } from "@/store/news/createActions";
import styles from "./index.less";



import { Swiper, SwiperSlide } from 'swiper/react';
// import { Thumbs } from 'swiper';

// import "swiper/css";
import "swiper/css"
import "swiper/css/bundle"
import "swiper/css/effect-cube"
// import "./styles.css";
import SwiperCore, {
  EffectCube,Pagination
} from 'swiper';
SwiperCore.use([EffectCube,Pagination]);

const NewsRaw = (props) => {
  const {
    propGetNewsData,
    news: { newsData },
  } = props;

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    //
    propGetNewsData();
  }, []);

  return (
    <>
      <Helmet>
        <title>news标题</title>
        <meta name="keywords" content="news关键词1，news关键词2" />
        <meta name="decsription" content="news描述" />
      </Helmet>
      <Swiper 
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          "shadow": true,
          "slideShadows": true,
          "shadowOffset": 20,
          "shadowScale": 0.94
        }} 
        pagination={true} 
        className="mySwiper"
      >
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide>
      </Swiper>
      
      {/* <ul className={styles.news}>
        {newsData.length &&
          newsData.map((item, index) => (
            <li key={index.toString()}>
              <img src={item.image} />
              <div>
                <h2>{item.title}</h2>
                <span>{item.passtime}</span>
              </div>
            </li>
          ))}
      </ul> */}
    </>
  );
};

const mapStateToProps = ({ news }) => ({ news });

const mapDispatchToProps = (dispatch) => ({
  propGetNewsData() {
    dispatch(getNewsData());
  },
});

const News = connect(
  mapStateToProps,
  mapDispatchToProps
)(WithStyle(NewsRaw, styles));

News.getInitState = ({ store }) => store.dispatch(getNewsData());

export default News;
