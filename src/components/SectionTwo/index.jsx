import useMediaQueries from "../../utils/Hooks/useMediaQueries";
import { benefitsData } from "./data";
import styles from "./sectionheader.module.css";

const SectionTwo = () => {
  const { SectionTwoWrapper, SectionHeaderWrapper, BenefitsSection } = styles;
  const { isMobile } = useMediaQueries();

  return (
    <section className={SectionTwoWrapper}>
      <div className={SectionHeaderWrapper}>
        <h2>
          Trusted by <br /> <span> 1,000,000+</span>
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
              <img src={data.icon} alt="benefits-icon" />
              <h6>{data.heading}</h6>
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
