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
          <Link to="/"><ImgLogo src={logo}/></Link>
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
            <Search src={iconsearch} />
          </DivSearch>
          
          <DivIconPerfil>
            <IconPerfil src={iconperfil} />
          </DivIconPerfil>
          
          <DivExit>
            <Exit src={Bitmap} />
          </DivExit>
        </DivPerfil>

      </Swapper>
    </Container>
  );
}

export default Header;
