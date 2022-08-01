import React from "react";
import { imagesUrl } from "../imgs";
import * as S from "./styled";

const Contato = () => {
  return (
    <S.WrapperContato>
      <h1>Fale comigo</h1>
      <S.Contacts>
        <div className="cont">
          <img src={`${imagesUrl}/phone.png`} width="24" alt="phone icon" />
          <a href="https://wa.me/5582994441081?text=Olá, vim pelo portifolio">
            <img
              src={`${imagesUrl}/whats.png`}
              width="35"
              alt="whatsapp icon"
            />
          </a>
          <span>
            <a href="https://wa.me/5582994441081?text=Olá, vim pelo portifolio">
              +55 (82) 994441081
            </a>
          </span>
        </div>
        <div className="cont">
          <img src={`${imagesUrl}/mail.png`} width="40" alt="email icon" />
          <span>
            <a href="mailto:luiz.santos@iqb.ufal.br">luiz.santos@iqb.ufal.br</a>
          </span>
        </div>
      </S.Contacts>
      <h2 id="deixe" >Ou deixe uma mensagem!</h2>
      <S.Message>
        <div>
          <form>
            <div className="data">
              <input type="text" placeholder="Nome" name="nome" />
              <input type="email" placeholder="Email" name="email" />
            </div>
            <div className="sub">
              <input type="text" placeholder="Assunto" name="assunto" />
            </div>
            <textarea name="mensagem" placeholder="Mensagem"/>
            <button className="btn" >Enviar</button>
          </form>
        </div>
      </S.Message>
    </S.WrapperContato>
  );
};

export default Contato;
