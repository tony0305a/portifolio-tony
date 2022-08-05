import React, { useEffect, useState } from 'react'
import * as S from './styled'
import ReactTextTransition, {presets} from 'react-text-transition'
import { Link } from 'react-router-dom'

const Home = () => {
    const [bemVindo,setBemVindo] = useState(" ")
    const [greetings,setGreetings] = useState(" ")
    const [greetings2,setGreetings2] = useState(" ")
    const [complement,setComplement] = useState(" ")
    const [renderContato, setRenderContato] = useState(false)

    useEffect(()=>{
        setInterval(()=>{
            setBemVindo(`Olá,`)
        },1000)
        setInterval(()=>{
            setGreetings(`meu nome é Antônio`)
        },2000)
        setInterval(()=>{
            setGreetings2(`Desenvolvedor Web`)
        },3500)
        setInterval(()=>{
            setComplement(`Frontend / Backend`)
        },4000)
        setInterval(()=>{
            setRenderContato(true)
        },4000)

    },[])


  return (
    <S.Wrapper>
        <ReactTextTransition  inline springConfig={presets.wobbly}>
        <h1>{bemVindo}</h1>
        <h1>{greetings}</h1>
        <h1>{greetings2}</h1>
        <span>{complement}</span>
        </ReactTextTransition>
        {renderContato?(<>
        <Link to='/contato'>
        <button id='contato' >Contato</button>
        </Link>
        </>):(<></>)}
    </S.Wrapper> 
  )
}

export default Home