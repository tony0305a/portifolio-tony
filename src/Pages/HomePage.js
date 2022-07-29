import React from 'react'
import Sidebar from '../Components/Sidebar'
import * as S from '../AppStyle'
import Projetos from '../Components/Projetos'
import Home from '../Components/Home'

const HomePage = () => {
  return (
    <S.Wrapper>
        <Sidebar />
        <S.Column>
          <Home />
          <Projetos />
        </S.Column>
    </S.Wrapper>
  )
}

export default HomePage