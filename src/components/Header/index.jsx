import Slider from "react-slick";
import PrimeXBTLogo from "../../assets/images/PrimeXBT_logo.svg";
import { carouselData } from "./data";
import Button from "../Button";
import styles from "./header.module.scss";

const Header = () => {
  const {
    carouselWrapper,
    carouselLeftContent,
    navButton,
    CTAStyle,
    CTAWrapper,
    carouselIimage,
  } = styles;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    cssEase: "linear",
    swipeToSlide: true,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {carouselData.map((content) => {
          return (
            <div className={carouselWrapper} key={content.id}>
              <nav>
                <img src={PrimeXBTLogo} alt="PrimeXBT-logo" loading="lazy" />
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
              <img
                src={content.imgUrl}
                className={carouselIimage}
                alt="carousel-image"
                loading="lazy"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Header;
