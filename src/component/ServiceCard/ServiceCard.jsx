import PropTypes from "prop-types";
import styles from "./styles.module.css";

const ServiceCard = ({ title, subtitle, serviceImg }) => {
  return (
    <div style={styles.serviceoverall}>
      <div className={styles.servicecard}>
        <img src={serviceImg} alt="service image" />
        <h6>{title}</h6>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
ServiceCard.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    serviceImg: PropTypes.any
}

export default ServiceCard;
