import PropTypes from "prop-types";
import styles from "./styles.module.css"

const Button = ({ title }) => {
  return (
    <div className={`${styles.btnstyle}`}>
      <h6>{title}</h6>
    </div>
  );
};
Button.propTypes = {
    title: PropTypes.string.isRequired
};

export default Button;
