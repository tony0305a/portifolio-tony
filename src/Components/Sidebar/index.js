import React from 'react'
import { imagesUrl } from '../../imgs'
import Nav from '../Nav'
import * as S from './styled'
const Sidebar = () => {
  return (
    <S.Wrapper>
        <S.Logo>
        <img src={`${imagesUrl}/logo.png`} width="60" height="115"  />
        <span>Web Developer</span>
        </S.Logo>

        <Nav/>

        <S.Medias>
          <img src={`${imagesUrl}/git.png`} width="28"  />
          <img src={`${imagesUrl}/link.png`} width="28"  />
        </S.Medias>
    </S.Wrapper>
  )
}

export default Sidebar