import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 115px;
  height: 2000px;
  flex-direction: column;
  background-color: #181818;
  position: fixed;
  @media screen and (max-width: 720px) {
    width: 80px;

  }
`;
export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  span {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin: 8px;
  }
  @media screen and (max-width: 720px) {
      span{
        display:none;
      }
      img{
        width:80px;
      }
  }
`;
export const Medias = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-top:200px;
width:100%;
img{
    margin:4px;
}
`;
