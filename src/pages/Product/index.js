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
   if( number > 9){
    return(
    alert(`unidade maxima por compra é ${number}`))
   }
   setNumber(number + 1);
  }

  function discrement() {
    if (number < 1) {
     return
    }
    setNumber(number - 1);
  }
  return (
    <Container>
     
      <LinkBack to="/">
        <img src={back} style={{ height: 20, width: 20, marginRight: 19 }}  alt="botao voltar"/>
        Voltar
      </LinkBack>

      <DivImageDetail>
        <Img src={detail} alt="imagem grande de detalhe" />
      </DivImageDetail>
      
      <DivDetail>
        <Order>
          Vinhos <span> {">"} </span> Estados Unidos <span> {">"} </span>{" "}
          <span>Califórnia </span>
        </Order>
        <Title>Apothic Red 2019</Title>

        <DivOpinion>
          <IconEUA src={EUA} alt="icone Estados Unidos" />
          <Info>Estados Unidos</Info>
          <Info>Tinto</Info>
          <Info>Meio Seco/Demi-Sec</Info>
          <Info>750 ml</Info>
          <DivStar>
            <Star src={star} alt="icone estrela" />
            <Star src={star} alt="icone estrela" />
            <Star src={star} alt="icone estrela" />
            <Star src={star} alt="icone estrela" />
            <span>(2)</span>
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
