import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 1120px;

  margin-top: 40px;
  margin: 0 auto;
`;

export const DivRefine = styled.div`
  margin-top: 40px;

  @media (max-width: 770px) {
    display: none;
  }
`;

export const Title = styled.h1`
  margin-bottom: 32px;
  font-size: 20px;
`;

export const SubTitle = styled.p`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 400;
`;

export const DivOptions = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DivRatio = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 26px;
`;

export const Options = styled.input`
  margin-right: 5px;
`;

export const DivProduct = styled.div`
  margin-top: 40px;
  margin-left: 130px;
  margin-bottom: 80px;

  @media (max-width: 770px) {
    margin: 0 auto;
    margin-top: 40px;
  }
`;

export const DivGrid = styled.div``;

export const DivFind = styled.div`
  margin-bottom: 14px;
  padding: 10px 0px;
  border-bottom: 1px solid #ededed;
`;

export const ItensFind = styled.div``;

export const SwapperBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 37px 0px;
`;

export const Swapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 256px;
  height: 333px;

  background: #fff;
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
`;

export const DivImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  text-align: center;
`;

export const Img = styled.img`
  margin-bottom: 8px;
  transition: all 0.3s;
  
  :hover {
    scale: 1.173;
  }

  cursor: pointer;
`;

export const DivSocio = styled.div`
  p {
    font-size: 11px;
    font-weight: bold;
    color: #1d1d1b;
  }

  span {
    color: #b6116e;
    font-size: 17px;
    margin-left: 6px;
  }
`;

export const DivNotSocio = styled.div`
  margin-top: 8px;
  margin-bottom: 20px;
  p {
    font-size: 12px;
    font-weight: bold;
    color: #888888;
  }
`;

export const NickProduct = styled.div`
  display: -webkit-box;
  margin-bottom: 6px;

  font-size: 16px;
  color: #1d1d1b;
`;

export const SwapperGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  margin-top: 42px;

  @media (max-width: 770px) {
    grid-template-columns: 1fr;
    margin-top: 32px;
  }
`;

export const BtnBuy = styled.button`
  width: 256px;
  height: 40px;

  background: #7ebc43;
  box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
  border-radius: 3.89354px;
  color: #fff;
  border: none;

  margin-top: 16px;

  transition: all 0.3s ease-in-out;

  :hover {
    background: #659d30;
  }
`;

export const Price = styled.div`
  display: flex;
  margin: 8px 0px;

  font-size: 11px;
  color: #888888;

  p {
    text-decoration: line-through;
    margin-right: 4px;
  }

  span {
    width: 48px;
    height: 13px;

    font-size: 10px;
    color: #fff;
    background: #f79552;
  }
`;

export const LinkProx = styled(Link)`
  font-size: 12px;
  color: #b6116e;
`;

export const BtnProxTwo = styled.button`
  width: 73px;
  height: 38px;

  border: 1px solid #b6116e;
  border-radius: 3px;
  color: #b6116e;
  margin-right: 8px;

  transition: all 0.3s ease-in-out;

  :focus {
    background: #b6116e;
    color: #fff;
  }
`;

export const BtnProxThree = styled.button`
  height: 38px;
  width: 38px;

  border: 1px solid #b6116e;
  border-radius: 3px;
  color: #b6116e;
  margin-right: 8px;

  transition: all 0.3s ease-in-out;

  :focus {
    background: #b6116e;
    color: #fff;
  }
`;

export const BtnProxOne = styled.button`
  height: 38px;
  width: 38px;

  border: 1px solid #b6116e;
  border-radius: 3px;
  color: #b6116e;
  margin-right: 8px;

  transition: all 0.3s ease-in-out;

  :focus {
    background: #b6116e;
    color: #fff;
  }
`;

export const Points = styled.p`
  color: #b6116e;
  margin-left: 8px;
  margin-right: 14px;
`;
