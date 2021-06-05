import styled from "styled-components";
import { Container } from "../components/scaffold";
import Navigation from "../components/navigation";
import { motion } from "framer-motion";

const Card = styled(motion.div)`
  max-width: 300px;
  width: 300px;
  height: 200px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
  padding: 1em;
`;

export default function FadeInUp() {
  return (
    <>
      <Navigation />
      <Container>
        <Card
          initial={{ opacity: 0, y: 10, scale: 1 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-50px" }}
        >
          The Card
        </Card>
      </Container>
    </>
  );
}
