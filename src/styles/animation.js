import { css, keyframes } from "styled-components";

const fadeInkeyFrames = keyframes`
  from{
    filter: blur(5px)
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`;
export const fadeIn = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${fadeInkeyFrames} ${type};
  `;
