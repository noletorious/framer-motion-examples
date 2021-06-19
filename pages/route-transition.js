import Navigation from "../components/navigation";
import { Container } from "../components/scaffold";
import RouteTransitionButtons from "../components/route-transition-buttons";
import styled from "styled-components";
import { motion } from "framer-motion";

const ButtonId = styled(motion.div).attrs({ layoutId: "transbuttons" })``;

export default function RouteTransition() {
  return (
    <>
      <Navigation />
      <Container direction="row">
        <ButtonId>
          <RouteTransitionButtons page="first" />
        </ButtonId>
      </Container>
    </>
  );
}
