import styles from "./styles.module.css";
import JoinUsImg from "../../../assets/joinusimg.svg";
import PartnerImg from "../../../assets/partnerimg.png";
import DonationImg from "../../../assets/donation.png";
import VolunteerImg from "../../../assets/volunteer.png";

const JoinUs = () => {
  return (
    <div className={`${styles.joinuscont}`}>
      <div className={`${styles.joinusinfo}`}>
        <div className={`${styles.joinusitems}`}>
          <div className={`${styles.joinmoreinfo} `}>
            <div className={styles.joinusimg}>
              <img src={JoinUsImg} alt="" />
            </div>
            <div className={`${styles.rightcont}`}>
              <h6>Join Us</h6>
              <h2>Take Action and Make a Difference</h2>
              <p>
                Help us transform lives and bridge the digital divide in South
                Africa. There are several impactful ways you can get involved
                and support our mission.
              </p>
              <button className={`${styles.joinusbtn}`}>
                <img src={PartnerImg} alt="" />
                <p>Become a Partner</p>
              </button>
              <button className={`${styles.joinusbtn}`}>
                <img src={DonationImg} alt="" />
                <p>Make a Donation</p>
              </button>
              <button className={`${styles.joinusbtn}`}>
                <img src={VolunteerImg} alt="" />
                <p>Volunteer with Us</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
