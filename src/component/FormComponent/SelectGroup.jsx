import styles from "./FormStyles.module.css";
import PropTypes from "prop-types";

// --| This component will be used as a select for every forms used. it returns a label and input with props
const SelectGroup = ({ label, children, required }) => (
  <div className={ styles.selectwrapper }>
    <p>{label} {required ? <span className="input-required">*</span> : null}</p>
    {children}
  </div>
);

SelectGroup.propTypes = {
  label: PropTypes.string,
  children: PropTypes.any,
  required: PropTypes.any
};

export default SelectGroup;
