import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 1120px;

  margin: 24px auto;
  
  @media (max-width: 770px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Swapper = styled.div`
  display: flex;
  max-width: 1120px;

  background-color: #fff;
  margin: 0 auto;
`;

export const DivImageDetail = styled.div`
  margin-top: 80px;
`;

export const Img = styled.img`
  @media (max-width: 770px) {
    width: 100%;
  }
`;

export const DivDetail = styled.div`
  width: 100%;

  margin-top: 80px;
  margin-left: 162px;

  @media (max-width: 770px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0px auto;
  }
`;

export const Order = styled.div`
  margin-right: 8px;
  margin-left: 8px;

  color: #c81a78;

  span {
    color: #888888;
    margin-right: 8px;
  }
`;

export const Title = styled.h1`
  margin-top: 18px;
  margin-bottom: 8px;
`;

export const DivOpinion = styled.div`
  display: flex;
  margin-bottom: 48px;
`;

export const Info = styled.span`
  margin-right: 8px;

  &:nth-child(2) {
    display: none;
  }
`;

export const IconEUA = styled.img`
  margin-right: 8px;

  @media (max-width: 770px) {
    display: none;
  }
`;

export const DivStar = styled.div`
  display: flex;

  span {
    font-size: 11px;
  }

  @media (max-width: 770px) {
    display: none;
  }
`;

export const LinkBack = styled(Link)`
  display: flex;
  margin-top: 30px;

  color: #000;

  transition: all 0.3s;

  :hover {
    opacity: 0.6;
  }
`;

export const Star = styled.img`
  cursor: pointer;
`;

export const DivComent = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 770px) {
    display: none;
  }
`;

export const Coment = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const SubComent = styled.span`
  font-size: 14px;
  margin-top: 8px;
`;

export const Price = styled.div`
  display: flex;
  align-items: flex-end;

  font-weight: bold;

  p {
    font-size: 30px;
    color: #c81a78;
  }

  span {
    font-size: 28px;
    color: #c81a78;
  }
`;
export const DivPrice = styled.div``;

export const NotSocio = styled.div`
  color: #888;
  margin-bottom: 48px;
`;

export const DivBtn = styled.div`
  margin-top: 48px;

  @media (max-width: 770px) {
    margin: 0px 0px 48px 0px;
  }
`;

export const Btn = styled.button`
  height: 56px;
  width: 328px;

  background: #7ebc43;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.35);
  border-radius: 4px;
  border: none;

  transition: all 0.3s ease-in-out;

  :hover {
    background: #659d30;
  }
`;

export const BtnDiscrement = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 24px;
  width: 24px;

  border: 1px solid #fff;
  border-radius: 24px;
  background: transparent;
  color: #fff;

  @media (max-width: 770px) {
    display: none;
  }
`;

export const BtnIncrement = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 24px;
  width: 24px;

  border: 1px solid #fff;
  border-radius: 24px;
  background: transparent;
  color: #fff;

  @media (max-width: 770px) {
    display: none;
  }
`;

export const BtnAdd = styled.button`
  color: #fff;
  padding: 8px;
  background: transparent;
`;

export const BtnNumber = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  height: 100%;

  background-color: transparent;
  color: #fff;
`;

export const Number = styled.p`
  @media (max-width: 770px) {
    display: none;
  }
`;
