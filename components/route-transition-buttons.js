import styled from "styled-components";
import Link from "next/link";

const Button = styled.a`
  margin: 0 1em;
  &:hover {
    cursor: pointer;
  }
`;

const pages = ["route-transition", "route-transition-2"];

export default function RouteTransitionButtons(props) {
  return (
    <>
      {pages.map((p) => {
        return (
          <Link href={p}>
            <Button>{p}</Button>
          </Link>
        );
      })}
    </>
  );
}
