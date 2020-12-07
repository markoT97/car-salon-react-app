import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
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
    dialogContent: {
      overflowY: "initial",
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
  })
);

export default function Modal(props: {
  title: string;
  open: boolean;
  children: any;
  close: Function;
}) {
  const classes = useStyles();

  const { title, open, children, close } = props;

  const handleClose = () => {
    close();
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
          {title}
        </DialogTitle>
        <div className={classes.modalBody}>
          <DialogContent>{children}</DialogContent>
        </div>
      </Dialog>
    </div>
  );
}
