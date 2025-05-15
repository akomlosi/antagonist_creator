export const ButtonGroup = ({ children, title = null }) => (
  <div className="generic-iu-button-group">
    {title && <h3 className="neutral">{title}</h3>}
    {children}
  </div>
);
