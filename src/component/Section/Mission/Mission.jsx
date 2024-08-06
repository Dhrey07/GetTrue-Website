import MissionImg from "../../../assets/missionimg.svg";
import styles from "./styles.module.css";
import Button from "../../Button/Button";

const Mission = () => {
  return (
    <div className={`${styles.mission}`}>
      <div className={styles.missioncont}>
        <div>
          <img src={MissionImg} alt="" />
        </div>
        <div className={styles.missioninfo}>
          <h6>Our Mission</h6>
          <h2>Empowering Every Connection</h2>
          <p>
            At <strong>Get Thru</strong>, we are dedicated to closing South
            Africa’s digital divide by providing affordable, reliable internet
            access and in-depth digital skills training. We believe that
            connectivity is a fundamental right and a key to unlocking
            potential.
          </p>
          <p className="margin-top-20">
            Our mission is to empower individuals and communities, foster
            innovation, and drive socio-economic progress. By ensuring that
            everyone has the tools and opportunities to connect and grow, we
            strive to create a more inclusive and prosperous future for all.
          </p>
          <div className={styles.missionbtn}>
            <Button title="Support Our Mission" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
