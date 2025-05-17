import { Button } from "../generic-ui/button/button";
import styles from "./header.module.css";

export const HEADER_BUTTONS = {
  UNIQUE: "unique",
  GUARDIANS: "guardians",
  KNOWN_THREATS: "known-threats",
  ABOUT: "about",
};

const Header = ({ onMenuButtonClick }) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLogo} />
      <div className={styles.headerMenuButtonsContainer}>
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
      </div>
    </div>
  );
};

export default Header;
