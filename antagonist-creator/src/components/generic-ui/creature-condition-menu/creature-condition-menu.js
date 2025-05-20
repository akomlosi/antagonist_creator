import { useCallback, useState } from "react";
import styles from "./creature-condition-menu.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@components/generic-ui/button/button";
import { Menu, styled } from "@mui/material";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 0,
    background: "#00000080",
    backdropFilter: "blur(4px)",
    border: "1px dashed #59b3b71f",
    color: " #59b3b7",
  },
}));

export const CONDITIONS = {
  ALIVE: "Alive",
  KNOCKED_DOWN: "Knocked Down",
  DEAD: "Dead",
};

export const CreatureConditionMenu = ({ title, onConditionChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [condition, setCondition] = useState(CONDITIONS.ALIVE);
  const open = Boolean(anchorEl);
  const handleConditionsButtonClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectConditionClick = useCallback(
    (condition) => {
      setCondition(condition);
      handleClose();
      onConditionChange(condition);
    },
    [onConditionChange]
  );

  return (
    <div className={styles.headerBlock}>
      <span className="space-right">{title}</span>
      <Button
        onClick={handleConditionsButtonClick}
        className={styles.conditionsButton}
      >
        {condition}
        <KeyboardArrowDownIcon />
      </Button>
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {condition !== CONDITIONS.ALIVE && (
          <Button onClick={() => handleSelectConditionClick(CONDITIONS.ALIVE)}>
            {CONDITIONS.ALIVE}
          </Button>
        )}
        {condition !== CONDITIONS.KNOCKED_DOWN && (
          <Button
            onClick={() => handleSelectConditionClick(CONDITIONS.KNOCKED_DOWN)}
          >
            {CONDITIONS.KNOCKED_DOWN}
          </Button>
        )}
        {condition !== CONDITIONS.DEAD && (
          <Button onClick={() => handleSelectConditionClick(CONDITIONS.DEAD)}>
            {CONDITIONS.DEAD}
          </Button>
        )}
      </StyledMenu>
    </div>
  );
};
