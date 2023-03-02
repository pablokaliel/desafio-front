import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 89px;

  background-color: #fff;
  border-bottom: 0.5px solid #cccccc;
  
  @media (max-width: 770px) {
  width:100%;
  }
`;

export const Swapper = styled.div`
  display: flex;
  margin: auto;
  
  max-width: 1120px;
  height: 100%;

  @media (max-width: 770px) {
  width:100%;
  }
`;

export const DivLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const ImgLogo = styled.img`
width: 100px;
height: 28px;
`;

export const DivOptions = styled.ul`
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  
  
  flex: 3;
  
  @media (max-width: 770px) {
  display:none;
  }
`;

export const Options = styled.a`
  list-style: none;
  font-size: 18px;
  color: #555555;
  padding:10px;
  margin-right:48px;
  transition: all 0.3s ease-in-out;
  :nth-child(1){
    margin-left:80px;
  }
  :focus {
    color: #d14b8f;
    border-bottom: 1px solid #d14b8f;
  }

  :hover{
    color: #d14b8f;
  }
`;

export const DivPerfil = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  flex: 1;
`;

export const DivSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 56px;
  height: 56px;

  border: 2px solid #555555;
  border-radius: 100%;
`;

export const Search = styled.img``;

export const DivIconPerfil = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 56px;
  height: 56px;
  
  border: 2px solid #555555;
  border-radius: 100%;
`;

export const IconPerfil = styled.img``;

export const DivExit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
  width: 56px;
  height: 56px;
  overflow: hidden;

  border: 2px solid #555555;
  border-radius: 100%;
  background: #f6b554;
`;

export const Exit = styled.img``;
