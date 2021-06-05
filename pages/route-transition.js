import Navigation from "../components/navigation";
import { Container } from "../components/scaffold";
import RouteTransitionButtons from "../components/route-transition-buttons";

export default function RouteTransition() {
  return (
    <>
      <Navigation />
      <Container direction="row">
        <RouteTransitionButtons />
      </Container>
    </>
  );
}
