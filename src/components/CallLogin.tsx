import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const CallLogin: React.FC<Props> = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide" : "Show"}
      </button>
      {show && children}
    </div>
  );
};
