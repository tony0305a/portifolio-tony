import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 115px;
  height: 100vh;
  flex-direction: column;
  background-color: #181818;
  position: fixed;
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
`;
export const Medias = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-top:200px;
width:100%;
img{
    margin:8px;
}
`;
