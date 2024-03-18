import useMediaQueries from "../../utils/Hooks/useMediaQueries";
import { benefitsData } from "./data";
import styles from "./benefitsection.module.scss";

const SectionTwo = () => {
  const { BenefitsSectionWrapper, BenefitsHeaderWrapper, BenefitsSection } =
    styles;
  const { isMobile } = useMediaQueries();

  return (
    <section className={BenefitsSectionWrapper}>
      <div className={BenefitsHeaderWrapper}>
        <h2>
          Trusted by <br /> <span> 1,000,000+ </span>
          {isMobile ? "traders globally" : "people"}
        </h2>
        <p>
          <strong>Over a million people</strong> have already started their
          journey towards financial freedom with us, and each has their own
          reason for choosing PrimeXBT.
        </p>
      </div>

      <section className={BenefitsSection}>
        {benefitsData.map((data, index) => {
          return (
            <div key={index}>
              <img src={data.icon} alt="benefits-icon" loading="lazy" />
              <h3>{data.heading}</h3>
              <p
                style={{
                  borderBottom: isMobile
                    ? data.id !== 5 && "1px solid #fff"
                    : "",
                  paddingBottom: data.id === 5 && 0,
                }}
              >
                {data.text}
              </p>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default SectionTwo;
