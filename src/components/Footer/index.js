import {
  Container,
  Nick,
  Context,
  FooterContact,
  SwapperFooter,
  FooterText,
  Title,
  Text,
  FooterIcons,
  Copyright,
  Facebook,
  Instagram,
  Email,
  ImgPg,
  DivImg,
  DivIcons,
} from "./styles";

import pagamento from "../../assets/logo.png";

function Footer() {
  return (
    <Container>
      <SwapperFooter>
        <FooterText>
          <Title>Quem Somos?</Title>
          <Text>
            Vinho é, genericamente, uma bebida alcoólica produzida por
            fermentação do sumo de uva. Na União Europeia, o vinho é legalmente
            definido como o produto obtido exclusivamente por fermentação
            parcial ou total de uvas frescas, inteiras ou esmagadas, ou de
            mostos.
          </Text>
        </FooterText>
        <FooterContact>
          <Title>Suporte</Title>
          <Nick to="/">central de ajuda </Nick>
          <Nick to="/">fale conosco </Nick>
          <Nick to="/">Cuidados com seu vinho </Nick>
          <Nick to="/">Politica de Privacidade </Nick>
          <Nick to="/">Blog </Nick>
        </FooterContact>
        <FooterContact>
          <DivImg>
            <ImgPg src={pagamento} />
          </DivImg>
        </FooterContact>
        <FooterIcons>
          <Title>Redes Sociais</Title>
          <DivIcons>
            <a
              href="https://github.com/pablokaliel"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/pablokallyel/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Instagram />
            </a>
            <a href="https://github.com/pablokaliel" rel="noopener noreferrer" target="_blank">
              <Email />
            </a>
          </DivIcons>
        </FooterIcons>
      </SwapperFooter>
      <Context>
        <Copyright>&copy;2022 Copyright: React</Copyright>
      </Context>
    </Container>
  );
}

export default Footer;
