import styled from "styled-components";
import Link from "next/link";

const Navbar = styled.div`
  position: absolute;
  display: flex;
  flex: 1 1 auto;
  padding: 15px;
`;

export default function Navigation() {
  return (
    <Navbar>
      <Link href="/">&larr; Home</Link>
    </Navbar>
  );
}
