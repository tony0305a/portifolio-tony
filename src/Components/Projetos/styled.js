import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 2000px;
  width: 100%;
  p {
    color: white;
    margin-left: 150px;
    font-size: 88px;
    font-weight: bold;

    @media screen and (max-width: 720px) {
      font-size:40px;
      margin-left:130px;
    }
  }
  #projetos {
    display: flex;
    width: 100%;
    margin-top: 50px;
  }
  @media screen and (max-width: 720px) {
      width:433px;
      margin-left:0;
    }
`;
export const Projects = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-left: 150px;
  span {
    color: white;
  }
  @media screen and (max-width: 720px) {
      width:433px;
      margin-left:115px;
    }
`;
export const SingleProject = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  border: 0.5px solid white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin: 4px;

  @media screen and (max-width: 720px) {
    width: 69%;
  }

  .head {
    display: flex;
    justify-content: center;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    align-items: center;
    color: black;
    padding: 8px;
    background-color: #08fdd8;
    font-weight: bold;
  }
  .show {
    padding: 8px;
    @media screen and (max-width: 720px) {
    padding:4;
    height:200px;
  }
  }
  .desc {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 3px;
    color: white;
    @media screen and (max-width: 720px) {
      margin:1.5px;
      font-size:12px;
  }
  }
  .div-desc {
    padding: 8px;
        @media screen and (max-width: 720px) {
    padding:4;
     }
  }
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px;
  }
  .btn {
    display: flex;
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

    a {
      color: white;
      text-decoration: none;
      font-weight: bold;
      margin: 8px;
    }

    &:hover {
      box-shadow: inset 150px 0 0 0 #08fdd8;
      color: #000;
      a {
        color: black;
      }
    }
  }
  .btn-backend{
    width:120px;
    margin:8px;
    color:white;
    padding: 20px 30px;
  
  }
`;
