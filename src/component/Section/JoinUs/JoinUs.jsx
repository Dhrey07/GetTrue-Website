import styles from "./styles.module.css";
import JoinUsImg from "../../../assets/joinusimg.svg";
import PartnerImg from "../../../assets/partnerimg.png";
import DonationImg from "../../../assets/donation.png";
import VolunteerImg from "../../../assets/volunteer.png";
import Button from "../../Button/Button";
import { useState } from "react";
import Modal from "../../../component/Modal";
import { Grid } from "@mui/material";
import InputGroup from "../../FormComponent/InputGroup";
import SelectGroup from "../../FormComponent/SelectGroup";
import TextAreaGroup from "../../FormComponent/TextAreaGroup";

const JoinUs = () => {
  const [showButton, setShowButton] = useState(false);
  const [selectedOption, setSelectedOption] = useState("select");

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    console.log("Selected option:", selectedValue);
  };

  const handleModal = () => {
    setShowButton(!showButton);
  };

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
              <button onClick={handleModal} className={`${styles.joinusbtn}`}>
                <img src={PartnerImg} alt="" />
                <p>Become a Partner</p>
              </button>
              <button onClick={handleModal} className={`${styles.joinusbtn}`}>
                <img src={DonationImg} alt="" />
                <p>Make a Donation</p>
              </button>
              <button onClick={handleModal} className={`${styles.joinusbtn}`}>
                <img src={VolunteerImg} alt="" />
                <p>Volunteer with Us</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Support Our Mission"
        subtitle={
          <div>
            Thank you for your interest in supporting our mission. Please choose how
             you`d like to contribute, and provide your details below.
          </div>
        }
        modalContent={
          <>
            <Grid container spacing={2} className="input-padding">
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <InputGroup
                  label="First Name"
                  margin="normal"
                  placeHolder="Enter your first name"
                  inputType="text"
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <InputGroup
                  label="Last Name"
                  margin="normal"
                  placeHolder="Enter your last name"
                  inputType="text"
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <InputGroup
                  label="Cell Number"
                  margin="normal"
                  placeHolder="Enter your cell number"
                  inputType="text"
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <InputGroup
                  label="Email Address"
                  margin="normal"
                  placeHolder="Enter your email address"
                  inputType="text"
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <SelectGroup label="Mode of Support:">
                  <select
                    name="type"
                    value={selectedOption}
                    onChange={handleSelectChange}
                  >
                    <option value="select">--- Select ---</option>
                    <option value="sponsor">Sponsor</option>
                    <option value="donate">
                      Donate
                    </option>
                    <option value="partner">
                      Become a Partner
                    </option>
                  </select>
                </SelectGroup>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                    <TextAreaGroup
                      label="Additional Information"
                      margin="normal"
                      placeholder="Additional Information (Optional)"
                    />
                  </Grid>
            </Grid>
          </>
        }
        modalFooter={
          <>
            <div className={styles.modalFooterBtn}>
              <Button title="Support Now" onClick={handleModal} />
            </div>
          </>
        }
        isopen={showButton}
        closeModal={handleModal}
      />
    </div>
  );
};

export default JoinUs;
