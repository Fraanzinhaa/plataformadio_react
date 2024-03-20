import { Column, Container, FazerLoginText, Row, SubTitleRegister, TemContaText, TextRegister, Title, TitleRegister, Wrapper } from './styles';

import { useNavigate } from 'react-router-dom';
import { useForm  } from "react-hook-form";


import { MdEmail, MdLock, MdAccountCircle  } from 'react-icons/md';

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

const Register = () => {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/feed')
  }

  const {
    control, handleSubmit, formState: { errors } } = useForm();
    

  return (<>
  <Header />
  <Container>
    <Column>
      <Title>
        A plataforma para você aprender com experts, dominar as principais tecnologias
         e entrar mais rápido nas empresas mais desejadas.
      </Title>
    </Column>
    <Column>
      <Wrapper>
      <TitleRegister>Comece agora grátis</TitleRegister>
          <SubTitleRegister>Crie sua conta e make the change._</SubTitleRegister>
          <form onSubmit={handleSubmit}>
            <Input name="name" placeholder="Nome completo" control={control} leftIcon={<MdAccountCircle />}/>
            <Input name="email" placeholder="E-mail" control={control} leftIcon={<MdEmail />}/>
            <Input name="password" placeholder="Password" control={control} type="password" leftIcon={<MdLock />}/>
            <Button title="Criar minha conta" variant="secondary"  type="submit" onClick={handleClickSignIn}/>
          </form>
          <Row>
            <TextRegister>Ao clicar em "criar minha conta grátis", declaro que aceito 
              as Políticas de Privacidade e os Termos de Uso da DIO.
            </TextRegister>
          </Row>
          <Row>
            <TemContaText>Já tenho conta.</TemContaText>
            <FazerLoginText>Fazer login</FazerLoginText>
          </Row>
      </Wrapper>
    </Column>
  </Container>
  </>)

}

export { Register }