import React, { useCallback, useEffect } from "react";
import "./styles.css";
const Button: React.FC<{ onClick: () => void }> = ({
  onClick = () => ({}),
  children,
}) => {
  return (
    <button className="button-pmr" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
