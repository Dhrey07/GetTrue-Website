import styles from "./styles.module.css";
import PropTypes from "prop-types";
import QuoteIcon from "../../assets/quotes.svg";

const TestimonialCard = ({ testimony, clientImg, clientName, clientTitle }) => {
  return (
    <div className={`${styles.cardstyle}`}>
      <div>
        <img src={QuoteIcon} alt="quote icon" />
      </div>
      <div className={`${styles.testimonytext}`}>
        <p>{testimony}</p>
      </div>
      <div className={`${styles.clientinfo} flex gap-10 align-item-center`}>
        <div>
          <img src={clientImg} alt="" />
        </div>
        <div>
          <p>
            <strong>{clientName}</strong>
          </p>
          <p>{clientTitle}</p>
        </div>
      </div>
    </div>
  );
};
TestimonialCard.propTypes = {
  testimony: PropTypes.string,
  clientImg: PropTypes.any,
  clientName: PropTypes.string,
  clientTitle: PropTypes.string,
};

export default TestimonialCard;
