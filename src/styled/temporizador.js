import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: auto;
  width: 30%;
  text-align: center;
  @media (max-width: 820px) {
    width: 85%;
  }
`;

export const StyledCont = styled.div`
  margin: 28% 0;
  @media (max-width: 540px) {
    margin: 45% 0;
  }
`;

export const Styledcontainertempo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

export const StyleP = styled.p`
  color: hsl(345, 95%, 68%);
  font-size: 55px;
  font-weight: 700;
  background-color: hsl(236, 21%, 26%);
  padding: 12px 15px;
  border-radius: 5px;
  margin-bottom: 15%;
  @media (max-width: 820px) {
    padding: 8px 6px;
  }
`;

export const StyleFondo = styled.img`
  position: relative;
  width: 100%;
  @media (max-width: 540px) {
    height: 150px;
  }
`;

export const StyleRedes = styled.div`
  position: absolute;
  margin-top: -7%;
  text-align: center;

  width: 100%;
  @media (max-width: 540px) {
    margin-top: -20%;
  }
`;

export const StyleImgred = styled.img`
  margin-left: 3%;
`;
