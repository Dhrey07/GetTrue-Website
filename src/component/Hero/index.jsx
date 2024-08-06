import Button from "../Button/Button";
import styles from "./styles.module.css";

const index = () => {
  return (
    <div className={`${styles.herooverall}`}>
      <div className={`${styles.herocont}`}>
        <p className="color-green">Affordable Internet Access and Digital Skills Training for All</p>
        <h1 className="color-white">Bridging the Digital Divide <br /> in South Africa</h1>
        <p className="color-white">
          Connecting South Africa from every corner - empowering communities
          with reliable internet and essential digital skills. Join us in
          bridging the digital divide, enhancing opportunities, and driving
          growth across urban and rural areas.
        </p>
        <div className={`${styles.herobtn}`}>
          <Button title="Get Connected Now" />
        </div>
      </div>
    </div>
  );
};

export default index;
