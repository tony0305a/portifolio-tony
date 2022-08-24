import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
margin-left:180px;
margin-top:200px;
width:100%;
height:800px;
h1{
    color: white;
    font-weight:bold;
    font-size:96px;
    

    @media screen and (max-width: 720px) {
      font-size:27px;
      margin-left:-70px;
    }


}
span{
    color:white;
}
#contato{
    position:relative;
    top:200px;
    left:-26px;
    width:150px;
    color: white;
    background: #1D1D1D;
    padding: 12px 17px;
    margin: 25px;
    border: 3px solid #08FDD8;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-radius: 2px;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    box-shadow: inset 0 0 0 0 #000;
	-webkit-transition: all ease 0.8s;
	-moz-transition: all ease 0.8s;
	transition: all ease 0.8s;

    &:hover {
    box-shadow: inset 150px 0 0 0 #08FDD8;
    color: #000;
}

@media screen and (max-width: 720px) {
            top:155px;
            left:-80px;
    }

}
.text{
    display:none;
    
}

@media screen and (max-width: 720px) {
      margin-top:350px;
      width:433px;
    }


`;