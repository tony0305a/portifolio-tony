import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './styled'
const Nav = () => {
  return (
    <S.Wrapper>
      <Link to="/">
        <button>Home</button>
        </Link>
        <Link to="/sobre">
        <button>Sobre</button>
        </Link>
        <Link to="/contato">
        <button>Contato</button>
        </Link>
    </S.Wrapper>
  )
}

export default Nav