import Slider from "react-slick";
import PrimeXBTLogo from "../../assets/PrimeXBT_logo.svg";

import { carouselData } from "./data";
import Button from "../Button";
import styles from "./header.module.css";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  cssEase: "linear",
  swipeToSlide: true,
  arrows: false,
};

const Header = () => {
  const {
    carouselWrapper,
    carouselLeftContent,
    navButton,
    CTAStyle,
    CTAWrapper,
  } = styles;
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {carouselData.map((content) => {
          return (
            <div className={carouselWrapper} key={content.id}>
              <nav>
                <img src={PrimeXBTLogo} alt="PrimeXBT-logo" />
                <button className={navButton}>Join Now</button>
              </nav>
              <div className={carouselLeftContent}>
                <h1>
                  <span>Financial freedom means</span>
                  {content.heading}
                </h1>
                <p>
                  Whatever financial freedom means to you, you can earn it with
                  PrimeXBT!
                  <strong>
                    Invest in Crypto and trade 100+ global markets
                  </strong>
                  on our easy-to-use app and webtrader.
                </p>
                <div className={CTAWrapper}>
                  <Button>{content.CTA}</Button>
                  <p className={CTAStyle}>{content.warningText}</p>
                </div>
              </div>
              <img src={content.imgUrl} alt="carousel-image" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Header;
