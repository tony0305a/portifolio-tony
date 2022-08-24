import React, { useEffect, useState } from 'react'
import * as S from './styled'
import ReactTextTransition, {presets} from 'react-text-transition'
import { Link } from 'react-router-dom'

const Home = () => {
    const [hello,setHello] = useState(" ")
    const [helloClass,setHelloClass] = useState(" ")
    const [greetings,setGreetings] = useState(" ")
    const [greetingsClass,setGreetingsClass] = useState(" ")
    const [greetings2,setGreetings2] = useState(" ")
    const [greetingsClass2,setGreetingsClass2] = useState(" ")
    const [complement,setComplement] = useState(" ")
    const [complementClass,setComplementClass] = useState(" ")
    const [renderContato, setRenderContato] = useState(false)

    useEffect(()=>{
        setInterval(()=>{
            setHello(`Olá,`)
            setHelloClass('animate__animated animate__bounce')
        },1000)
        setInterval(()=>{
            setGreetings(`meu nome é Antônio`)
            setGreetingsClass('animate__animated animate__backInLeft')
        },2000)
        setInterval(()=>{
            setGreetings2(`Desenvolvedor Web`)
            setGreetingsClass2('animate__animated animate__bounceInRight')
        },3500)
        setInterval(()=>{
            setComplement(`Front end / Back end`)
            setComplementClass('animate__animated animate__bounceIn')
        },4000)
        setInterval(()=>{
            setRenderContato(true)
        },4300)

    },[])


  return (
    <S.Wrapper>
        <h1 className={helloClass}>{hello}</h1>
        <h1 className={greetingsClass}>{greetings}</h1>
        <h1 className={greetingsClass2} >{greetings2}</h1>
        <span className={complementClass} >{complement}</span>
        {renderContato?(<>
        <Link to='/contato'>
        <button id='contato' >Contato</button>
        </Link>
        </>):(<></>)}
    </S.Wrapper> 
  )
}

export default Home