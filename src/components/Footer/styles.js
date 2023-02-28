import styled from "styled-components";
import { BsFacebook, BsInstagram, BsEnvelope, BsSearch } from "react-icons/bs";

import { Link } from "react-router-dom";

export const Container = styled.div`
  background: #fff;
  width: 100%;
`;
export const Nick = styled(Link)`
  color: #010101;
  margin-top: 6px;
  cursor: pointer;
  transition: all 0.5s;
  color:#000;
  :hover {
    color: #d14b8f;
  }
`;

export const SwapperFooter = styled.div`
  display: flex;
  grid-auto-flow: column;
  padding: 0px 10px;
  border-bottom: 1px solid gray;
  @media (max-width: 770px) {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid gray;
  }
`;
export const FooterText = styled.div`
  width: 550px;
  border-right: 1px solid gray;
  margin-top: 10px;
  text-align: justify;
  padding: 0px 10px;
  @media (max-width: 770px) {
    width: 100%;
    border-bottom: 1px solid gray;
    border-right: none;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:0px;
    padding-bottom:10px;
  }
`;
export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  border-right: 1px solid gray;
  width: 550px;
  align-items: center;
  padding-bottom:10px;
  @media (max-width: 770px) {
    width: 100%;
    border-bottom: 1px solid gray;
    align-items: center;
    border-right: none;
    padding-bottom:10px;
  }
`;
export const Title = styled.h1`
  margin-bottom:12px;
  font-size: 25px;
`;
export const Text = styled.span`
  
  font-size: 15px;
`;
export const DivImg = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
align-items:center;
justify-content:center;
  @media (max-width: 770px) {
    width: 325px;
    padding:20px 0px;
  }
`;
export const FooterIcons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 500px;
  align-items: center;
  @media (max-width: 770px) {
    width: 100%;
    flex-direction: column;
    align-items:center;
    display: flex;
    justify-content: space-between;
  }
`;
export const Copyright = styled.span`
 text-align: justify;
`;

export const DivIcons = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 770px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 10px 0px;
  }
`;
export const Context = styled.div`
  text-align: center;
  padding: 10px 0px;
`;
export const ImgPg = styled.img`

`;
export const Email = styled(BsEnvelope)`
  
  height: 20px;
  width: 20px;
  margin-top: 6px;
  cursor: pointer;
  transition: all 0.5s;
  color:#000;
  :hover {
    color: #d14b8f;
  }
`;
export const Instagram = styled(BsInstagram)`
  
  height: 20px;
  width: 20px;
  margin-top: 6px;
  cursor: pointer;
  transition: all 0.5s;
  color:#000;
  :hover {
    color: #d14b8f;
  }
`;

export const Facebook = styled(BsFacebook)`
  
  height: 20px;
  width: 20px;
  margin-top: 6px;
  transition: all 0.5s;
  color:#000;
  cursor: pointer;
  :hover {
    color: #d14b8f;
  }
`;
