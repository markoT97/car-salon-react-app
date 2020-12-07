import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../redux-store";
import { setPurchaseModalVisibility } from "../../redux-store/modals/actions";
import { Alert } from "@material-ui/lab";
import { Grid } from "@material-ui/core";
import { Vehicle } from "../../data/models/Vehicle";
import { purchaseVehicle } from "../../redux-store/vehicleList/actions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialogPaper: {
      margin: 0,
    },
    modalHeader: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      padding: "15px",
      fontWeight: 900,
    },
    modalBody: {
      padding: 0,
    },
    headingText: {
      color: theme.palette.primary.main,
    },
    vehicleImage: {
      width: "90%",
    },
    imgResponsive: {
      maxWidth: "100%",
    },
  })
);

export default function PurchaseConfirmationModal(props: {
  selectedVehicle: Vehicle;
  customerId: number;
}) {
  const classes = useStyles();
  const { selectedVehicle, customerId } = props;
  const { brandName, modelName, image } = selectedVehicle;

  const open = useSelector(
    (state: AppState) => state.modals.purchaseModal.visibility
  );

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setPurchaseModalVisibility(false));
  };

  const handleConfirm = () => {
    dispatch(purchaseVehicle(selectedVehicle, customerId));
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        classes={{ paper: classes.dialogPaper }}
      >
        <DialogTitle
          id="alert-dialog-slide-title"
          className={classes.modalHeader}
        >
          {"COMPLETE RESERVATION"}
        </DialogTitle>
        <div className={classes.modalBody}>
          <Alert severity="warning">
            <div className="checkout-info-box">
              <h3>
                Upon completing this reservation enquiry, you will receive::
              </h3>
              <p>
                Your rental voucher to produce on arrival at the rental desk and
                a toll-free customer support number.
              </p>
            </div>
          </Alert>

          <DialogContent>
            <Grid container spacing={1}>
              <Grid item md={6}>
                <h3 className={classes.headingText}>Location &amp; Date</h3>
                <div className="info-box">
                  <span className="glyphicon glyphicon-calendar"></span>
                  <h4 className="info-box-title">Pick-Up Time</h4>
                  <p className="info-box-description">
                    <span id="pick-up-date-ph">09/23/2020</span> at{" "}
                    <span id="pick-up-time-ph">12:00 AM</span>
                  </p>
                  <input
                    type="hidden"
                    name="pick-up"
                    id="pick-up"
                    value="09/23/2020 at 12:00 AM"
                  />
                </div>
                <div className="info-box">
                  <span className="glyphicon glyphicon-calendar"></span>
                  <h4 className="info-box-title">Drop-Off Time</h4>
                  <p className="info-box-description">
                    <span id="drop-off-date-ph">09/24/2020</span> at{" "}
                    <span id="drop-off-time-ph">12:00 AM</span>
                  </p>
                  <input
                    type="hidden"
                    name="drop-off"
                    id="drop-off"
                    value="09/24/2020 at 12:00 AM"
                  />
                </div>
                <div className="info-box">
                  <span className="glyphicon glyphicon-map-marker"></span>
                  <h4 className="info-box-title">Pick-Up Location</h4>
                  <p className="info-box-description" id="pickup-location-ph">
                    fdsdg
                  </p>
                  <input
                    type="hidden"
                    name="pickup-location"
                    id="pickup-location"
                    value="fdsdg"
                  />
                </div>
                <div className="info-box">
                  <span className="glyphicon glyphicon-map-marker"></span>
                  <h4 className="info-box-title">Drop-Off Location</h4>
                  <p className="info-box-description" id="dropoff-location-ph">
                    fdsdg
                  </p>
                  <input
                    type="hidden"
                    name="dropoff-location"
                    id="dropoff-location"
                    value="fdsdg"
                  />
                </div>
              </Grid>

              <Grid item md={6}>
                <h3 className={classes.headingText}>
                  CAR:{" "}
                  <span id="selected-car-ph">
                    {brandName} {modelName}
                  </span>
                </h3>

                <input
                  type="hidden"
                  name="selected-car"
                  id="selected-car"
                  value="Audi A1 S-LINE"
                />

                <div className={classes.vehicleImage}>
                  <img
                    className={classes.imgResponsive}
                    id="selected-vehicle-image"
                    src={image.path + image.name + "." + image.extension}
                    alt="Vehicle"
                  />
                </div>
              </Grid>
            </Grid>
          </DialogContent>
        </div>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="contained">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary" variant="contained">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
