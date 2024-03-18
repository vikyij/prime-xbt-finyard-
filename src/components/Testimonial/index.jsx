import Slider from "react-slick";
import { testimonialData } from "./data";
import StarRating from "../StarRating";
import useMediaQueries from "../../utils/Hooks/useMediaQueries";
import styles from "./testimonial.module.scss";

const Testimonials = () => {
  const { TestimonialWrapper, TopSectionWrapper, ClientTestimonialStyle } =
    styles;

  const { isMobile } = useMediaQueries();

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "110px",
    variableWidth: isMobile ? false : true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 650,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={TestimonialWrapper}>
      <div className={TopSectionWrapper}>
        <h3>
          Hear what our <span> clients </span> have to say
        </h3>
        <p>
          Need more information about the quality of our services? Here’s what
          some of our happy clients had to say.
        </p>
      </div>
      <Slider {...settings}>
        {testimonialData.map((data) => {
          return (
            <div key={data.id} className={ClientTestimonialStyle}>
              <div>
                <img src={data.clientLogo} alt="client-logo" loading="lazy" />
                <StarRating rating={data.rating} />
              </div>
              <p>{data.testimony}</p>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Testimonials;
