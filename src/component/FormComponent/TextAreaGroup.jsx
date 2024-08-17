import styles from "./FormStyles.module.css";
import PropTypes from "prop-types";

// --| This component will be used as a text area for every forms used. it returns a label and input with props
const TextAreaGroup = ({ label, inputName, value, onChange, placeHolder, }) => (
  <div className={styles.areawrapper}>
    <p>{label}</p>
    <textarea value={value} name={inputName} onChange={onChange} placeholder={placeHolder} />
  </div>
);
TextAreaGroup.propTypes = {
  inputType: PropTypes.string,
  label: PropTypes.string,
  inputName: PropTypes.string,
  value: PropTypes.string,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func
};
export default TextAreaGroup;
