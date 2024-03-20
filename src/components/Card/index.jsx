import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles'

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://cdn.pixabay.com/photo/2023/11/16/20/07/burst-8393020_1280.jpg" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/121521741?v=4"/>
          <div>
            <h4>Francielle</h4>
            <p>Há 5 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>Projeto feito o curso de html e css no bootcamp dio do Global avanade...<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
        <h4>#HTML #CSS #JavaScript</h4>
        <p>
          <FiThumbsUp /> 10
        </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }