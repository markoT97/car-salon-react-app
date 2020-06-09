import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  Button,
  Icon,
  Zoom,
  useScrollTrigger,
  Container,
  Fab,
} from "@material-ui/core";
import {
  AccountCircle,
  MoreVert as MoreIcon,
  KeyboardArrowUp,
} from "@material-ui/icons";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    grow: {
      flexGrow: 1,
    },
    navbar: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    toolbar: {
      alignItems: "flex-start",
    },
    inputRoot: {
      color: "inherit",
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  })
);

interface Props {
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const { children } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default function PrimarySearchAppBar(props: Props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const profileGuestNavigationItems = [
    { title: "Log In", icon: "power", route: "/login" },
    { title: "Register", icon: "power", route: "/register" },
  ];

  /*
  const profileUserNavigationItems = [
    { title: "Profile", icon: "power", route: "/my-profile" },
    { title: "Settings", icon: "settings", route: "/settings" },
    { title: "Dashboard", icon: "power", route: "/dashboard" },
    { title: "Logout", icon: "power", route: "/" },
  ];
  */

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {profileGuestNavigationItems.map((item, i) => {
        return (
          <MenuItem key={i} component={Link} to={item.route}>
            {item.title}
          </MenuItem>
        );
      })}
    </Menu>
  );

  const basicNavigationItems = [
    { title: "Home", icon: "home", route: "/" },
    {
      title: "Services",
      icon: "settings_application_icon",
      route: "/services",
    },
    { title: "Vehicle Models", icon: "drive_eta", route: "/vehicle-models" },
    { title: "Contact", icon: "phone", route: "/contact" },
  ];

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {basicNavigationItems.map((item, i) => {
        return (
          <MenuItem key={i} component={Link} to={item.route}>
            <IconButton
              aria-label="account of current user"
              aria-haspopup="true"
              color="primary"
            >
              <Icon>{item.icon}</Icon>
            </IconButton>
            <p>{item.title}</p>
          </MenuItem>
        );
      })}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" elevation={0} color="secondary">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Car Salon
          </Typography>

          <div className={classes.sectionDesktop}>
            {basicNavigationItems.map((item, i) => {
              return (
                <Button
                  key={i}
                  color="inherit"
                  component={Link}
                  to={item.route}
                >
                  {item.title}
                </Button>
              );
            })}
          </div>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        {renderMobileMenu}
        {renderMenu}
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </div>
  );
}
