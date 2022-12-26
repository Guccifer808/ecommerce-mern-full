import { useState } from 'react';
import styled from 'styled-components';
import { mobile } from './../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './../redux/apiCalls';

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
    url('https://images.pexels.com/photos/5120192/pexels-photo-5120192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')
      center;
  background-size: cover;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 20%;
  background-color: white;
  ${mobile({ width: '75%' })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  padding: 15px 20px;
  background-color: #0288d1;
  border: none;
  color: white;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: red;
`;

const Link = styled.a`
  font-size: 12px;
  margin: 5px 0;
  text-decoration: underline;
  cursor: pointer;
`;
const LoginPage = () => {
  //states for user login
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    //using login func from redux and apiCalls
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder='Password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <Link>FORGOT PASSWORD</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
