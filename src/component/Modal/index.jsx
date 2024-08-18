import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import close_btn from "../../assets/close-btn.png";
// import AddSubject_btn from "../../assets/images/plus-circle.svg";
import classes from "./ModalStyles.module.css";
import PropTypes from "prop-types";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Modal = ({
  closeModal,
  isopen,
  title,
  subtitle,
  modalContent,
  modalFooter,
}) => {
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={closeModal}
        aria-labelledby="customized-dialog-title"
        open={isopen}
      >
        <div className={`${classes.modalpopup}`}>
          <div className={`${classes.modalinfo}`}>
            <div className={classes.addclassheader}>
              <div className={`${classes.modalheadcontainer}`}>
                <h3 className={classes.modaltitle}>{title}</h3>
              </div>
            </div>
            <div className={`${classes.texttag}`}>{subtitle}</div>
            <DialogContent
              className={`${classes.css1t1j96hMuiPaperrootMuiDialogpaper}`}
            >
              {modalContent}
            </DialogContent>
            <div>{modalFooter}</div>
          </div>
          <div className={classes.closeimg}>
            <img onClick={closeModal} src={close_btn} alt="" />
          </div>
        </div>
      </BootstrapDialog>
    </React.Fragment>
  );
};
Modal.propTypes = {
  closeModal: PropTypes.bool,
  isopen: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  modalContent: PropTypes.any,
  modalFooter: PropTypes.any,
};

export default Modal;
