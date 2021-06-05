import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { Container, PinkLink } from "../components/scaffold";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const examples = {
  "stagger-list": "Leverages AnimateSharedLayout",
  "route-transition": "Leverages AnimateSharedLayout",
  "fade-in-up": "Leveraging AnimatePresence",
};

const UnorderedList = styled(motion.ul)``;
const ListItem = styled.li`
  font-size: 1.5em;
`;

const LtitleWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  &:hover {
    cursor: pointer;
  }
`;

const Ltitle = styled.span`
  display: flex;
  margin-right: 15px;
  &:after {
  }
`;

const Ldescription = styled(motion.span)`
  font-size: 0.75em;
  height: 1em;
`;

const IconWrapper = styled(motion.div)`
  display: flex;
  transform-origin: center;
`;

const ListWrapper = styled.div`
  align-self: center;
`;

const descVariants = {
  initial: {
    opacity: 0,
    y: "-20px",
  },
  animate: {
    opacity: 1,
    y: "0",
  },
};

const chevUp = {
  initial: { transform: "rotate(180deg)" },
  animate: { transform: "rotate(0deg)" },
};
const chevDown = {
  initial: { transform: "rotate(0deg)" },
  animate: { transform: "rotate(180deg)" },
};
const Item = ({ theExample }) => {
  const [show, toggleShowDesc] = useState(false);
  const toggleDesc = () => toggleShowDesc(!show);

  return (
    <>
      <LtitleWrapper>
        <Ltitle>
          <Link href="/[theExample]" as={`/${theExample}`}>
            <PinkLink>{theExample}</PinkLink>
          </Link>
        </Ltitle>
        <AnimatePresence>
          <IconWrapper
            variants={show ? chevUp : chevDown}
            initial="initial"
            animate="animate"
            exit="initial"
          >
            <FontAwesomeIcon
              onClick={toggleDesc}
              style={{ width: "10px" }}
              icon={faChevronUp}
            />
          </IconWrapper>
        </AnimatePresence>
      </LtitleWrapper>
      <AnimatePresence>
        {show && (
          <Ldescription
            variants={descVariants}
            initial="initial"
            animate="animate"
            exit="initial"
          >
            {examples[theExample]}
          </Ldescription>
        )}
      </AnimatePresence>
    </>
  );
};

const List = () => {
  return Object.keys(examples).map((example) => {
    return (
      <ListItem key={example}>
        <Item theExample={example} />
      </ListItem>
    );
  });
};

export default function Home() {
  return (
    <Container direction="column">
      <Head>
        <title>noletorious - framer motion</title>
        <meta
          name="description"
          content="A place where noletorious adds motion to ui objects"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ListWrapper>
        <span>examples: </span>
        <UnorderedList>
          <List />
        </UnorderedList>
      </ListWrapper>
    </Container>
  );
}
