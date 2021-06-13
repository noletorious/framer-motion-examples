import styled from "styled-components";
import { Container } from "../components/scaffold";
import { motion } from "framer-motion";

const listWrapperVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 4,
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
};

const ListWrapper = styled(motion.div).attrs({
  variants: listWrapperVariants,
  initial: "initial",
  animate: "animate",
})`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const listItemVariants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
  },
};
const ListItem = styled(motion.span).attrs({
  variants: listItemVariants,
})`
  position: relative;
  display: flex;
  margin: 0 0.5em;
`;

const ListArray = ["one", "two", "three"];

export default function StaggerList() {
  return (
    <Container direction="row">
      <ListWrapper>
        {ListArray.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </ListWrapper>
    </Container>
  );
}
