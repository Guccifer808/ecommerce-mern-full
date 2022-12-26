import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import { mobile } from './../responsive';

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ height: '40vh' })}
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: 'center' })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: '85%' })}
`;
const Input = styled.input`
  border: none;
  flex: 10;
  padding-left: 20px;
  font-size: 14px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #0288d1;
  color: white;
  ${mobile({ flex: 2 })}
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates and best deals.</Description>
      <InputContainer>
        <Input placeholder='Your email' />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
