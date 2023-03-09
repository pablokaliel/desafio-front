import {
  Container,
  DivRefine,
  DivRatio,
  Title,
  SubTitle,
  DivOptions,
  Options,
  DivProduct,
  DivFind,
  ItensFind,
  Swapper,
  DivImg,
  Img,
  NickProduct,
  Price,
  BtnBuy,
  DivGrid,
  SwapperGrid,
  DivNotSocio,
  DivSocio,
  LinkProx,
  BtnProxTwo,
  BtnProxThree,
  BtnProxOne,
  Points,
  SwapperBtn,
} from "./styles";

import arrowprox from "../../assets/arrow2.png";
import vinho from "../../assets/Rectangle.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Product() {
  const data = [
    {
      id: 1,
      title: "Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014",
      oldprice: "37,90",
      off: "60%OFF",
      image: vinho,
      socioWine: "Socio Wine",
      price: "R$30,00",
      notSocio: "Não Socio",
      priceNot: "Não sócio R$ 37,40",
    },
    {
      id: 2,
      title: "Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014",
      oldprice: "37,90",
      off: "60%OFF",
      image: vinho,
      socioWine: "Socio Wine",
      price: "R$30,00",
      notSocio: "Não Socio",
      priceNot: "Não sócio R$ 37,40",
    },
    {
      id: 3,
      title: "maça",
      oldprice: "37,90",
      off: "60%OFF",
      image: vinho,
      socioWine: "Socio Wine",
      price: "R$30,00",
      notSocio: "Não Socio",
      priceNot: "Não sócio R$ 37,40",
    },
    {
      id: 4,
      title: "Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014",
      oldprice: "37,90",
      off: "60%OFF",
      image: vinho,
      socioWine: "Socio Wine",
      price: "R$30,00",
      notSocio: "Não Socio",
      priceNot: "Não sócio R$ 37,40",
    },
    {
      id: 5,
      title: "Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014",
      oldprice: "37,90",
      off: "60%OFF",
      image: vinho,
      socioWine: "Socio Wine",
      price: "R$30,00",
      notSocio: "Não Socio",
      priceNot: "Não sócio R$ 37,40",
    },
    {
      id: 6,
      title: "Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014",
      oldprice: "37,90",
      off: "60%OFF",
      image: vinho,
      socioWine: "Socio Wine",
      price: "R$30,00",
      notSocio: "Não Socio",
      priceNot: "Não sócio R$ 37,40",
    },
    {
      id: 7,
      title: "Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014",
      oldprice: "37,90",
      off: "60%OFF",
      image: vinho,
      socioWine: "Socio Wine",
      price: "R$30,00",
      notSocio: "Não Socio",
      priceNot: "Não sócio R$ 37,40",
    },
    {
      id: 8,
      title: "Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014",
      oldprice: "37,90",
      off: "60%OFF",
      image: vinho,
      socioWine: "Socio Wine",
      price: "R$30,00",
      notSocio: "Não Socio",
      priceNot: "Não sócio R$ 37,40",
    },
    {
      id: 9,
      title: "Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014",
      oldprice: "37,90",
      off: "60%OFF",
      image: vinho,
      socioWine: "Socio Wine",
      price: "R$30,00",
      notSocio: "Não Socio",
      priceNot: "Não sócio R$ 37,40",
    },
  ];

  const numberList = data.length;
  const [selected, setSelectedValue] = useState("R$40");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <Container>
      <DivRefine>
        <Title>Refine sua busca:</Title>
        <SubTitle>Por preço</SubTitle>

        <DivOptions>
          <DivRatio>
            <Options
              type="checkbox"
              checked={selected === "R$40"}
              onChange={handleChange}
              value="R$40"
            />{" "}
            <p>até R$40</p>
          </DivRatio>

          <DivRatio>
            <Options
              type="checkbox"
              checked={selected === "R$40 a R$60"}
              onChange={handleChange}
              value="R$40 a R$60"
            />{" "}
            <p>R$40 A R$60</p>
          </DivRatio>

          <DivRatio>
            <Options
              type="checkbox"
              checked={selected === "R$100 a R$200"}
              onChange={handleChange}
              value="R$100 a R$200"
            />{" "}
            <p>R$100 A R$200</p>
          </DivRatio>

          <DivRatio>
            <Options
              type="checkbox"
              checked={selected === "R$200 a R$500"}
              onChange={handleChange}
              value="R$200 a R$500"
            />{" "}
            <p>R$200 A R$500</p>
          </DivRatio>

          <DivRatio>
            <Options
              type="checkbox"
              checked={selected === "acima de R$500"}
              onChange={handleChange}
              value="acima de R$500"
            />{" "}
            <p>Acima de R$500</p>
          </DivRatio>
        </DivOptions>
      </DivRefine>

      <DivProduct>
        <DivFind>
          <ItensFind>{numberList} produtos encontrados</ItensFind>
        </DivFind>

        <SwapperGrid>
          {data
            .slice(0, numberList)
            .map(
              ({
                id,
                price,
                title,
                image,
                oldprice,
                off,
                socioWine,
                priceNot,
              }) => {
                return (
                  <DivGrid key={id}>
                    <Swapper>
                      <DivImg>
                        <Link to="/product">
                          <Img src={image} alt="imagem do produto" />
                        </Link>
                        <NickProduct>{title}</NickProduct>
                        <Price>
                          <p>{oldprice}</p> <span>{off}</span>
                        </Price>
                        <DivSocio>
                          <p>
                            {socioWine} <span>{price}</span>
                          </p>
                        </DivSocio>
                        <DivNotSocio>
                          <p>{priceNot}</p>
                        </DivNotSocio>
                      </DivImg>
                    </Swapper>

                    <Link to="/product">
                      <BtnBuy>ADICIONAR AO CARRINHO</BtnBuy>
                    </Link>
                  </DivGrid>
                );
              }
            )}
        </SwapperGrid>
        <SwapperBtn>
          <BtnProxOne>1</BtnProxOne>
          <BtnProxTwo>2</BtnProxTwo>
          <BtnProxThree>3</BtnProxThree>
          <Points>...</Points>
          <LinkProx>
            Proximo <img src={arrowprox} alt="botao prox" />
            <img src={arrowprox} alt="botão prox" />
          </LinkProx>
        </SwapperBtn>
      </DivProduct>
    </Container>
  );
}

export default Product;
