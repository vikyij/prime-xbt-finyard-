import PrimeXBTLogo from "../../assets/images/PrimeXBT_logo.svg";
import styles from "./footer.module.scss";

const Footer = () => {
  const { FooterWrapper, legalTermsStyle } = styles;

  const openLegalTerms = () => {
    window.open("https://start.primexbt.com/legal-terms", "_blank");
  };

  return (
    <section className={FooterWrapper}>
      <div>
        <img src={PrimeXBTLogo} alt="PrimeXBT-logo" loading="lazy" />
        <p>
          PrimeXBT © 2023. All rights reserved. <br />
          General information:
          <a
            href="mailto:support@help.primexbt.com"
            aria-label="mailto primexbt support"
          >
            info@primexbt.com
          </a>
          <br />
          Technical support:{" "}
          <a
            href="mailto:support@help.primexbt.com"
            aria-label="mailto primexbt support"
          >
            support@help.primexbt.com
          </a>
        </p>
      </div>
      <p className={legalTermsStyle} onClick={openLegalTerms}>
        Legal Terms
      </p>
    </section>
  );
};

export default Footer;
