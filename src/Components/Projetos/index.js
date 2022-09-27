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
            <img className="show" height="265" src={`${imagesUrl}/scout.png`}  />
            <div className="div-desc">
              <span className="desc">
                Projeto desenvolvido utilizando ReactJs e a API da Riot Games.{" "}
              </span>
              <span className="desc">
                O site fornece informações do jogador e um gerador de gráficos
                baseado no histórico de partidas.
              </span>
              <span className="desc">
                As partidas são armazenadas em um banco de dados PostgreSQL por
                uma segunda API desenvolvida por mim em Node, que além disso,
                faz as requições com os servidores da Riot.
              </span>
              <span className="desc">
                O projeto ainda está em desenvolvimento.
              </span>
            </div>
            <div className="buttons">
              <div className="btn">
                <img src={`${imagesUrl}/web.png`} width="28" />
                <a href="https://tonyscout.vercel.app" target="_blank">
                  Visite
                </a>
              </div>
              <div className="btn">
                <img src={`${imagesUrl}/git.png`} width="28" />
                <a
                  href="https://github.com/tony0305a/tonyscout"
                  target="_blank"
                >
                  Visite
                </a>
              </div>
            </div>
          </S.SingleProject>
          <S.SingleProject>
            <span className="head">React Shop</span>
            <img className="show" height="265" src={`${imagesUrl}/shop.png`} />
            <div className="div-desc">
              <span className="desc">
                Um projeto realizado para conclusão do bootcamp Impulso
                Javascript Evolution.{" "}
              </span>
              <span className="desc">
                O projeto é integrado com um backend desenvolvido em Nodejs e o layout foi inspirado no site do submarino/americanas
              </span>
              <span className="desc">
                Possui algumas funcionalidades padrões de web-commerces, como um
                sistema de avaliações e carrinho funcionais.
              </span>
            </div>
            <div className="buttons">
              <div className="btn">
                <img src={`${imagesUrl}/web.png`} width="28" />
                <a href="https://dio-react-shop.vercel.app" target="_blank">
                  Visite
                </a>
              </div>
              <div className="btn">
                <img src={`${imagesUrl}/git.png`} width="28" />
                <a
                  href="https://github.com/tony0305a/dio-react-shop"
                  target="_blank"
                >
                  Visite
                </a>
              </div>
            </div>
            <div className="buttons">
              <div className="btn">
                <img src={`${imagesUrl}/git.png`} width="28" />
                <a
                  href="https://github.com/tony0305a/dio-react-shop"
                  target="_blank"
                >
                  Backend
                </a>
              </div>
            </div>
          </S.SingleProject>
          <S.SingleProject>
            <span className="head">Multiplayer game</span>
            <img className="show" height="265" src={`${imagesUrl}/game.png`} />
            <div className="div-desc">
              <span className="desc">
                Um game simples desenvolvido em Javascript utilizando Firebase
              </span>
              <span className="desc">
                O jogo consiste em pegar moedas que aparecem aleatoriamente pelo mapa.
              </span>
              <span className="desc">
              Cada jogador possui um contador para as moedas adquiridas, também, é possivel alterar o avatar e o nome.
              </span>
            </div>
            <div className="buttons">
              <div className="btn">
                <img src={`${imagesUrl}/web.png`} width="28" />
                <a href="https://multiplayer-demo-rouge.vercel.app/" target="_blank">
                  Visite
                </a>
              </div>
              <div className="btn">
                <img src={`${imagesUrl}/git.png`} width="28" />
                <a
                  href="https://github.com/tony0305a/multiplayer-demo"
                  target="_blank"
                >
                  Visite
                </a>
              </div>
            </div>
          </S.SingleProject>
          <S.SingleProject>
            <span className="head">New React app</span>
            <img className="show" height="265" src={`${imagesUrl}/newapp.png`} />
            <div className="div-desc">
              <span className="desc">
                Um repositório pre-configurado.
              </span>
              <span className="desc">
                Para ganhar tempo em desenvolvimento esse repositório possui um projeto com providers, routes, axios já instanciado.
              </span>
            </div>
            <div className="buttons">
              <div className="btn">
                <img src={`${imagesUrl}/git.png`} width="28" />
                <a href="https://github.com/tony0305a/new-react-app" target="_blank">
                  Visite
                </a>
              </div>
            </div>
          </S.SingleProject>
          <S.SingleProject>
            <span className="head">Layout Olx Homepage</span>
            <img className="show" height="265" src={`${imagesUrl}/newapp.png`} />
            <div className="div-desc">
              <span className="desc">
                Uma copia do layout da pagina inicial da olx.
              </span>
              <span className="desc">
                Projeto desenvolvido em React utilizando a biblioteca React Components. 
              </span>
              <span className="desc">
                A pagina,também, possui o layout do login e é responsiva à aparelhos moveis. 
              </span>
            </div>
            <div className="buttons">
              <div className="btn">
                <img src={`${imagesUrl}/olx.png`} width="28" />
                <a href="https://github.com/tony0305a/olxhomepagelayout" target="_blank">
                  Visite
                </a>
              </div>
            </div>
          </S.SingleProject>
        </S.Projects>
      </InView>
    </S.Wrapper>
  );
};

export default Projetos;
