import GetTrueLogo from "../../assets/gettruelogo.svg";
import Button from "../Button/Button";
import styles from "./styles.module.css";

const index = () => {
  return (
    <div className={`${styles.navbar}`}>
      <div className={`${styles.navbarcont} `}>
        <div className={`${styles.imglogo} `}>
          <div>
            <img src={GetTrueLogo} alt="logo" />
          </div>
          <h5>Get Thru</h5>
        </div>
        <div>
          <Button title="Start Your Journey" />
        </div>
      </div>
    </div>
  );
};

export default index;
