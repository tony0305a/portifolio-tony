import React from 'react'
import * as S from './styled'
import Carousel from 'better-react-carousel'
import { imagesUrl } from '../imgs'


const responsive = [  {
  breakpoint: 800,
  cols: 2,
  rows: 1,
  loop: true,
  autoplay:5000
}]

const Sobre = () => {
  return (
    <S.SobreWrapper>
        <div className='container' >
        <h1>Sobre mim</h1>
        <div>
          <p className='abt' >
            Meu nome é Luiz Antônio, estou atualmentente cursando o 4º periodo de Matemática e em paralelo a isso estudando
            e buscando sempre conhecer mais sobre uma das minhas grandes paixões: a internet.
          </p>
          <p className='abt' >Desde criança a internet sempre foi muito presente na minha vida. Com isso as primeiras redes sociais, os games em Flash e em rede sempre me encantaram profundamente.</p>
          <p className='abt' >Hoje eu busco criar e construir conteúdos para internet.</p>
        </div>
        <h1 className='m-t' >Bootcamps</h1>
          <div id='bootcamps' >
              <Carousel cols={2} rows={1} width="100%" loop  responsiveLayout={responsive} containerStyle={{width:'100%'}}  >
                <Carousel.Item>
                  <a href='https://www.dio.me/certificate/2B7C92C2/share' target='_blank' >
                  <img  src={`${imagesUrl}/certificados/2B7C92C2.jpg`}/>
                  </a>
                </Carousel.Item>
                <Carousel.Item>
                <a href='https://www.dio.me/certificate/CF8944D0/share' target='_blank' >
                  <img  src={`${imagesUrl}/certificados/CF8944D0.jpg`}/>
                  </a>
                </Carousel.Item>
              </Carousel>
          </div>
          <h1 className='m-t' >Certificados</h1>
          <div id='certificados' >
            <Carousel cols={2} rows={1} loop responsiveLayout={responsive} >
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/0D7B7962/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/0D7B7962.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/0E407638/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/0E407638.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/02A6F837/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/02A6F837.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/2AAC5FC2/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/2AAC5FC2.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/2E105674/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/2E105674.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/2EB21DC6/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/2EB21DC6.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/3A289CC5/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/3A289CC5.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/3F575D2F/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/3F575D2F.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/4BFC2106/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/4BFC2106.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/4C8EC3FC/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/4C8EC3FC.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/4D54C7CE/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/4D54C7CE.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/4E291F5F/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/4E291F5F.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/6B105778/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/6B105778.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/6F408AA4/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/6F408AA4.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/7C0545D0/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/7C0545D0.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/7EA9C218/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/7EA9C218.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/8A5EBF5C/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/8A5EBF5C.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/8A253D54/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/8A253D54.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/32D183B2/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/32D183B2.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/49EA5C40/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/49EA5C40.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/75BB5EE0/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/75BB5EE0.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/92B9C4C9/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/92B9C4C9.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/93E6741F/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/93E6741F.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/213E2E61/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/213E2E61.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/346D1898/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/346D1898.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/441A9D23/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/441A9D23.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/570A1923/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/570A1923.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/786BC265/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/786BC265.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/825E8739/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/825E8739.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/996F6264/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/996F6264.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/3630CC5B/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/3630CC5B.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/22416F28/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/22416F28.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/702403D4/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/702403D4.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/02660890/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/02660890.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/8338010B/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/8338010B.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/23090199/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/23090199.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/30640208/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/30640208.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/A8B15A62/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/A8B15A62.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/AA759201/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/AA759201.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/B294DEC5/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/B294DEC5.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/B429A458/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/B429A458.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/BE99F0F0/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/BE99F0F0.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/C1283EE8/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/C1283EE8.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/CC7E1C0B/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/CC7E1C0B.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/CD7F10EE/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/CD7F10EE.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/D0BA6192/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/D0BA6192.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/DFEDBDC4/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/DFEDBDC4.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/E3A516EB/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/E3A516EB.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/E85409C5/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/E85409C5.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/EBFD59D7/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/EBFD59D7.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/F15CD74C/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/F15CD74C.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/F28DDB9E/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/F28DDB9E.jpg`}/>
                  </a>
                </Carousel.Item>
            <Carousel.Item>
                  <a href='https://www.dio.me/certificate/FF99C867/share' target='_blank' >
                  <img src={`${imagesUrl}/certificados/FF99C867.jpg`}/>
                  </a>
                </Carousel.Item>
            </Carousel>
          </div>
        </div>
    </S.SobreWrapper>
  )
}

export default Sobre