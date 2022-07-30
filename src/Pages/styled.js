import styled from "styled-components";

export const WrapperContato = styled.div`
display:flex;
flex-direction:column;
margin-left:130px;
width:50%;
h1{
    color:#08FDD8;
    font-weight:bold;
    font-size:62px;
    margin-top:200px;
    width:100%;

}
.cont{
    display:flex;
    align-items:center;
    img{
        margin:4px;
    }
}
`;
export const Contacts = styled.div`
display:flex;
flex-direction:column;
width:100%;
background-color:#1D1D1D;
margin-top:50px;
margin-left:50px;
span{
    font-weight:bold;
    letter-spacing:1px;
    color:white;
    font-size:24px;
}
`;
export const Message = styled.div`
display:flex;
width:100%;
flex-direction:column;
input{
    background-color:#2B2B2B;
    padding:8px;
    margin:8px;
    color:white;
}
.data{
    display:flex;
    flex-wrap:no-wrap;
    input{
        width:100%;
    }
}
.sub{
    input{
        width:100%;
    }
}
textarea{
    text-align:initial;
    width:100%;
    height:200px;
    background-color:#2B2B2B;
    padding:8px;
    margin:8px;
    color:white;
}
.btn {
    display: flex;
    color:white;
    margin: 8px;
    justify-content: center;
    align-items: center;
    background: #1d1d1d;
    padding: 12px 17px;
    border: 3px solid #08fdd8;
    letter-spacing: 1px;
    cursor: pointer;
    box-shadow: inset 0 0 0 0 #000;
    -webkit-transition: all ease 0.8s;
    -moz-transition: all ease 0.8s;
    transition: all ease 0.8s;
    width: 120px;

    &:hover {
      box-shadow: inset 150px 0 0 0 #08fdd8;
      color: #000;
    }
  }
`;
export const SobreWrapper = styled.div`
display:flex;
margin-left:115px;

@keyframes example {
  0%   {background-color: red;}
  25%  {background-color: yellow;}
  50%  {background-color: blue;}
  100% {background-color: green;}
}

/* The element to apply the animation to */
.container {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}


`;