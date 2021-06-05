import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  flex: 1 1 100%;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => props.direction};
  height: 100vh;
`;
export const PinkLink = styled.a`
  display: inline-flex;
  position: relative;
  padding: 0.2em 0;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: hotpink;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
    transform: translate3d(-100%, 0, 0);
  }
  &:hover::after{
    transform: translate3d(0, 0, 0);
    opacity 1;
  }
  &:hover{
    cursor:pointer;
  }
`;
