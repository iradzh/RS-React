import "./ErrorTrigger.scss";

import { useState } from "react";

import Star from "../../assets/star.png";
import { IErrorTriggerProps } from "../../types/interfaces";

const ErrorTriggerButton: React.FC<IErrorTriggerProps> = () => {
  const [errorState, setErrorState] = useState(false);

  const handleClick = () => {
    setErrorState(true);
  };

  if (errorState) {
    throw new Error("Error demonstration");
  }

  return (
    <div className="error_trigger">
      <img
        alt="Death star"
        src={Star}
        className="error_trigger__img"
        onClick={handleClick}
      />
      <p className="error_trigger__hint" onClick={handleClick}>
        throw error
      </p>
    </div>
  );
};

export default ErrorTriggerButton;
