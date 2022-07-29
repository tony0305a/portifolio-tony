import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { InView, useInView } from "react-intersection-observer";
import ReactTextTransition, { presets } from "react-text-transition";
import { imagesUrl } from "../../imgs";

const Projetos = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const [headerText, setHeaderText] = useState("-");

  useEffect(() => {}, []);

  return (
    <S.Wrapper>
      <InView
        as="div"
        onChange={(inView, entry) => {
          if (inView) {
            setHeaderText("Meus Projetos");
          } else {
            setHeaderText("-");
          }
        }}
      >
        <ReactTextTransition inline springConfig={presets.wobbly}>
          <p>{headerText}</p>
        </ReactTextTransition>
      </InView>
      <InView
        id="projetos"
        as="div"
        onChange={(inView, entry) => console.log(inView)}
      >
        <S.Projects>
          <S.SingleProject>
            <span className="head">Tonyscout</span>
            <img className="show" src={`${imagesUrl}/scout.png`} />
            <div className="div-desc">
              <span className="desc">
                Projeto desenvolvido utilizando ReactJs e a API da Riot Games.{" "}
              </span>
              <span className="desc">
                O site fornece informações do jogador e um gerador de gráficos
                baseado no histórico de partidas.
              </span>
              <span className="desc" >
                As partidas são armazenadas em um banco de dados PostgreSQL por
                uma segunda API desenvolvida por mim em Node, que além disso,
                faz as requições com os servidores da Riot.
              </span>
              <span className="desc" >O projeto ainda está em desenvolvimento.</span>
            </div>
            <div className="buttons" >
                <div className="btn" >
                <img src={`${imagesUrl}/web.png`} width="28" />
                <a href="https://tonyscout.vercel.app" target="_blank" >Visite</a>
                </div>
                <div className="btn" >
                <img src={`${imagesUrl}/git.png`} width="28" />
                <a href="https://github.com/tony0305a/tonyscout" target="_blank" >Visite</a>
                </div>
            </div>
          </S.SingleProject>
          <S.SingleProject>
            <span className="head">Frontend/Shopping</span>
          </S.SingleProject>
          <S.SingleProject>
            <span className="head">Encurtador</span>
          </S.SingleProject>
          <S.SingleProject>
            <span className="head">Autenticação</span>
          </S.SingleProject>
          <S.SingleProject>
            <span className="head">Simple Multiplayer game</span>
          </S.SingleProject>
        </S.Projects>
      </InView>
    </S.Wrapper>
  );
};

export default Projetos;
