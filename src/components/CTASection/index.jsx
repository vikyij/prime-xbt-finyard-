import CTABackground from "../../assets/CTA-section-img.png";
import Button from "../Button";
import styles from "./cta.module.css";

const CTASection = () => {
  const { CTAWrapper, CTAWarningStyle } = styles;
  return (
    <section className={CTAWrapper}>
      <h3>
        Get started <span> in minutes</span>
      </h3>
      <p>
        Our quick and easy sign-up process is one of the things our clients love
        about us. It only takes a couple of minutes to start trading.
      </p>
      <div>
        <Button>Get Started</Button>
        <p className={CTAWarningStyle}>Capital is at risk. </p>
      </div>
    </section>
  );
};

export default CTASection;
