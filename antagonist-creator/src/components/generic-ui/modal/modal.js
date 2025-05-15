export const Modal = ({ children, isOpen, onClose = () => {} }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div>
      <div className="generic-ui-modal">
        <div className="generic-ui-modal-close" onClick={onClose}>
          close
        </div>
        {children}
      </div>
    </div>
  );
};
