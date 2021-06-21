import { Container } from "react-bootstrap";

const Header = ({ head, description }) => {
  return (
    <Container className="starter-template text-center mt-5">
      <h1>{head}</h1>
      <p className="lead text-capitalize">{description}</p>
    </Container>
  );
};

export default Header;
