import { IconButton } from "@mui/material";
import styles from "./modal.module.css";
import CloseIcon from "@mui/icons-material/Close";

export const Modal = ({ children, isOpen, onClose = () => {} }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div>
      <div onClick={onClose} className={styles.modalBackdrop} />
      <div className={styles.modal}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        {children}
      </div>
    </div>
  );
};
