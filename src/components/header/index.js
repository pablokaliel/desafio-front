import {
  Container,
  DivLogo,
  Swapper,
  ImgLogo,
  DivOptions,
  Options,
  DivPerfil,
  DivSearch,
  Search,
  DivIconPerfil,
  IconPerfil,
  DivExit,
  Exit,
} from "./styles";

import { data } from "../product";

import iconperfil from "../../assets/iconperfil.svg";
import iconsearch from "../../assets/iconsearch.png";
import Bitmap from "../../assets/Bitmap.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Container>
      <Swapper>
        <DivLogo>
          <Link to="/">
            <ImgLogo src={logo} alt="logo no header" />
          </Link>
        </DivLogo>

        <DivOptions>
          <Options href="#">Clube</Options>
          <Options href="#">Loja</Options>
          <Options href="#">Produtores</Options>
          <Options href="#">Ofertas</Options>
          <Options href="#">Eventos</Options>
        </DivOptions>

        <DivPerfil>
          <DivSearch>
            <Search src={iconsearch} alt="botão pesquisar" />
          </DivSearch>

          <DivIconPerfil>
            <IconPerfil src={iconperfil} alt="botão perfil" />
          </DivIconPerfil>

          <DivExit>
            <Exit src={Bitmap} alt="botão bitmap" />
          </DivExit>
        </DivPerfil>
      </Swapper>
    </Container>
  );
}

export default Header;
