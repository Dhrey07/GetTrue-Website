import PropTypes from "prop-types";
import styles from "./styles.module.css"

const Button = ({ title, onClick }) => {
  return (
    <div className={`${styles.btnstyle}`} onClick={ onClick }>
      <h6>{title}</h6>
    </div>
  );
};
Button.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default Button;
