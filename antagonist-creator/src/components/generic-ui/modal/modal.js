import styles from './modal.module.css';
export const Modal = ({ children, isOpen, onClose = () => {} }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div>
      <div onClick={onClose} className={styles.modalBackdrop} />
      <div className={styles.modal}>
        <div className={styles.modalClose} onClick={onClose}>
          close
        </div>
        {children}
      </div>
    </div>
  );
};
