import styled from "styled-components";
import { useState } from "react";

export default function Light({ top, left, highLightWidth, highLightTop }) {
  const [light, setLight] = useState(false);
  return (
    <>
      <Lamp
        className="light"
        onClick={() => {
          setLight(!light);
        }}
        top={top}
        left={left}
      >
        {light ? (
          <img
            src="../src/assets/light_on.svg"
            alt="LAPM_ON"
            top={top}
            left={left}
          />
        ) : (
          <img
            src="../src/assets/light_off.svg"
            alt="LAPM_OFF"
            top={top}
            left={left}
          />
        )}
      </Lamp>
      <HighLigth top={highLightTop} width={highLightWidth} />
    </>
  );
}

const Lamp = styled.div`
  position: absolute;
  top: ${props => props.top + "rem"};
  left: ${props => props.left + "rem"};
  cursor: pointer;
  z-index: 5;
  img {
    height: 4.5rem;
  }
  @media screen and (max-width: 668px) {
    top: ${props => props.top - 0.1 + "rem"};
    left: ${props => props.left + "rem"};
    img {
      height: 4rem;
    }
  }
`;

const HighLigth = styled.div`
  position: absolute;
  width: ${props => props.width + "rem"};
  border: 2.5px solid rgba(247, 192, 15, 0.4);
  border-radius: 3px;
  top: ${props => props.top - 0.625 + "rem"};
  @media screen and (max-width: 668px) {
    width: ${props => props.width - 1.3 + "rem"};
    top: ${props => props.top - 1.3 + "rem"};
  }
`;
