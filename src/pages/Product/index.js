import { useState } from "react";
import EUA from "../../assets/eua.png";
import star from "../../assets/iconstar.svg";
import detail from "../../assets/imagedetail.png";

import {
  Container,
  DivImageDetail,
  Img,
  DivDetail,
  Order,
  Title,
  DivOpinion,
  Info,
  IconEUA,
  DivStar,
  Star,
  DivComent,
  Coment,
  SubComent,
  Price,
  DivPrice,
  NotSocio,
  DivBtn,
  Btn,
  BtnDiscrement,
  BtnIncrement,
  BtnAdd,
  BtnNumber,
  Number,
  LinkBack,
} from "./styles";

import back from "../../assets/back.svg";

function Product() {
  const [number, setNumber] = useState(1);

  function increment() {
    setNumber(number + 1);
  }

  function discrement() {
    if (number < 0) {
      setNumber = 0;
    }
    setNumber(number - 1);
  }
  return (
    <Container>
     
      <LinkBack to="/">
        <img src={back} style={{ height: 20, width: 20, marginRight: 19 }} />
        Voltar
      </LinkBack>

      <DivImageDetail>
        <Img src={detail} />
      </DivImageDetail>
      
      <DivDetail>
        <Order>
          Vinhos <span> > </span> Estados Unidos <span> > </span>{" "}
          <span>Califórnia </span>
        </Order>
        <Title>Apothic Red 2019</Title>

        <DivOpinion>
          <IconEUA src={EUA} />
          <Info>Estados Unidos</Info>
          <Info>Tinto</Info>
          <Info>Meio Seco/Demi-Sec</Info>
          <Info>750 ml</Info>
          <DivStar>
            <Star src={star} />
            <Star src={star} />
            <Star src={star} />
            <Star src={star} />
          </DivStar>
        </DivOpinion>

        <DivPrice>
          <Price>
            <p>R$63,</p>
            <span>67</span>
          </Price>
          <NotSocio>NÃO SOCIO R$120,95UN.</NotSocio>
        </DivPrice>

        <DivComent>
          <Coment>Comentário do Sommelier</Coment>
          <SubComent>
            Produzido no terroir californiano, esse tinto mescla as variedades
            Zinfandel, Syrah, Cabernet Sauvignon e Merlot. Apothic é um vinho
            inspirado nas antigas Apothecas (adegas subterrâneas), um lugar
            misterioso onde há mais de 800 anos os viticultores misturavam e
            armazenavam seus cobiçados vinhos.
          </SubComent>
        </DivComent>

        <DivBtn>
          <Btn>
            <BtnNumber>
              <BtnDiscrement onClick={discrement}>-</BtnDiscrement>{" "}
              <Number>{number}</Number>{" "}
              <BtnIncrement onClick={increment}>+</BtnIncrement>
              <BtnAdd>Adicionar</BtnAdd>
            </BtnNumber>
          </Btn>
        </DivBtn>

      </DivDetail>
    </Container>
  );
}

export default Product;
