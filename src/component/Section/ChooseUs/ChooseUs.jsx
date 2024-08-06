import ChooseUsImg from "../../../assets/chooseimg.svg";
import TechImg from "../../../assets/tech.svg";
import styles from "./styles.module.css";
import PartnershipImg from "../../../assets/partnership.svg";
import CommunityImg from "../../../assets/community.svg";
import ProveIcon from "../../../assets/proveicon.svg";

const ChooseUs = () => {
  return (
    <div className={`${styles.chooseuscont}`}>
      <div className={`${styles.margincont}`}>
        <div className={`${styles.chooseus}`}>
          <div className={styles.forimg}>
            <img src={ChooseUsImg} alt="choose us" />
          </div>
          <div className={`${styles.chooseinfo}`}>
            <h6>Why Choose Us?</h6>
            <h2>Our Commitment to Making a Difference</h2>
            <p>
              At <strong>Get Thru</strong>, we are dedicated to making a
              tangible impact in bridging the digital divide.
              <strong>Here’s why we stand out:</strong>
            </p>
            <div className={`${styles.extrainfo} flex gap-10`}>
              <div>
                <img src={TechImg} alt="" />
              </div>
              <div>
                <h6>Innovative Technology</h6>
                <p className="margin-top-8">
                  We use state-of-the-art technology to deliver reliable and
                  efficient internet solutions that cater to a variety of needs,
                  ensuring high performance and connectivity.
                </p>
                <div className={`${styles.hr}`}> <hr /> </div>
              </div>
            </div>
            <div className={`${styles.extrainfo} flex gap-10`}>
              <div>
                <img src={PartnershipImg} alt="" />
              </div>
              <div>
                <h6>Local Partnerships</h6>
                <p className="margin-top-8">
                  By working closely with local organizations and communities,
                  we ensure that our services are relevant, culturally
                  sensitive, and effectively address the unique challenges faced
                  by different regions.
                </p>
                <div className={`${styles.hr}`}> <hr /> </div>
              </div>
            </div>
            <div className={`${styles.extrainfo} flex gap-10`}>
              <div>
                <img src={CommunityImg} alt="" />
              </div>
              <div>
                <h6>Community-Centric Approach</h6>
                <p className="margin-top-8">
                  Our mission is driven by a deep understanding of community
                  needs. We focus on accessibility, affordability, and
                  inclusivity to make sure that no one is left behind in the
                  digital age.
                </p>
                <div className={`${styles.hr}`}> <hr /> </div>
              </div>
            </div>
            <div className={`${styles.extrainfo} flex gap-10`}>
              <div>
                <img src={ProveIcon} alt="" />
              </div>
              <div>
                <h6>Proven Impact</h6>
                <p className="margin-top-8">
                  We have a proven track record of transforming lives through
                  our services. From enhancing educational opportunities to
                  boosting local businesses, our work creates lasting positive
                  change across South Africa.
                </p>
                <div className={`${styles.hr}`}> <hr /> </div>
              </div>
            </div>
            <div className={`${styles.extrainfo} flex gap-10`}>
              <div>
                <img src={ProveIcon} alt="" />
              </div>
              <div>
                <h6>Sustainable Development</h6>
                <p className="margin-top-8">
                  We are committed to sustainability, not just in providing
                  services but also in ensuring that our projects contribute to
                  the long-term growth and development of the communities we
                  serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
