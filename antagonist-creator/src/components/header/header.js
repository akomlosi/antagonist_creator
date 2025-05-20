import { useCallback, useState } from "react";
import { Button } from "../generic-ui/button/button";
import styles from "./header.module.css";
import { Drawer, IconButton, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const HEADER_BUTTONS = {
  UNIQUE: "unique",
  GUARDIANS: "guardians",
  KNOWN_THREATS: "known-threats",
  ABOUT: "about",
};

const ButtonsContainer = ({ onMenuButtonClick }) => (
  <>
    <Button
      title="Generate Creatures for Unique Encounters"
      onClick={() => onMenuButtonClick(HEADER_BUTTONS.UNIQUE)}
    >
      UNIQUE CREATURES
    </Button>
    <Button
      title="Generate Guardian Creatures"
      onClick={() => onMenuButtonClick(HEADER_BUTTONS.GUARDIANS)}
    >
      GUARDIANS
    </Button>
    <Button
      title="Coming soon..."
      onClick={() => onMenuButtonClick(HEADER_BUTTONS.KNOWN_THREATS)}
      disabled
    >
      KNOWN THREATS
    </Button>
    <Button onClick={() => onMenuButtonClick(HEADER_BUTTONS.ABOUT)}>
      ABOUT
    </Button>
  </>
);

const CustomDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: 300,
    padding: theme.spacing(2),
    background: "#00000080",
    backdropFilter: "blur(4px)",
    border: "1px dashed #59b3b71f",
    top: 71,
    borderTop: "none",
  },
}));

const Header = ({ onMenuButtonClick }) => {
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setOpen(!open);
    }
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setOpen(false);
  };

  const handleMenuButtonClick = (...args) => {
    onMenuButtonClick(...args);
    setOpen(false);
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerLogo} />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        //sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <CustomDrawer
        variant="temporary"
        open={open}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        slotProps={{
          root: {
            keepMounted: true, // Better open performance on mobile.
          },
        }}
      >
        <ButtonsContainer onMenuButtonClick={handleMenuButtonClick} />
      </CustomDrawer>
    </div>
  );
};

export default Header;
