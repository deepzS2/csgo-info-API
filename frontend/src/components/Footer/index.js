import React from "react";

import { Container, FooterImg } from "./styles";

// Assets
import img from "../../assets/footer.svg";

const Header = () => {
  return (
    <Container>
      <FooterImg src={img} />
    </Container>
  );
};

export default Header;
