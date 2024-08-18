import Button from "../Button/Button";
import { useState } from "react";
import styles from "./styles.module.css";
import Modal from "../../component/Modal";
import { Grid } from "@mui/material";
import InputGroup from "../FormComponent/InputGroup";

const Hero = () => {
  const [showButton, setShowButton] = useState(false);

  const handleModal = () => {
    setShowButton(!showButton);
  };

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
          <Button title="Get Connected Now" onClick={handleModal} />
        </div>
      </div>
      <Modal
        title="Get Connected Now"
        subtitle={
          <div>
            We`re excited about the upcoming launch of our services! Please leave your details,
             and we`ll notify you as soon as this feature is available.
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
            </Grid>
          </>
        }
        modalFooter={
          <>
            <div className={styles.modalFooterBtn}>
              <Button title="Notify Me" onClick={handleModal} />
            </div>
          </>
        }
        isopen={showButton}
        closeModal={handleModal}
      />
    </div>
  );
};

export default Hero;
