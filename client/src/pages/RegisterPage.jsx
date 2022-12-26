import styled from 'styled-components';
import { mobile } from './../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url('https://images.pexels.com/photos/3771088/pexels-photo-3771088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')
      center;
  background-size: cover;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  ${mobile({ width: '75%' })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  padding: 15px 20px;
  background-color: #0288d1;
  border: none;
  color: white;
  font-weight: 500;
  cursor: pointer;
  margin: 0 auto;
`;

const RegisterPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder='Name' />
          <Input placeholder='Last Name' />
          <Input placeholder='Email' />
          <Input placeholder='Username' />
          <Input placeholder='Password' />
          <Input placeholder='Confirm Password' />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>Privacy Policy</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default RegisterPage;
