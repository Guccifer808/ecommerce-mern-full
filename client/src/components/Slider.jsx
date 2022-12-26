import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../data';
import { mobile } from '../responsive';
//Styled Components
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  ${mobile({ display: 'none' })}
`;
const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  color: white;
  background-color: #0000008a;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  &:hover,
  &:focus {
    opacity: 0.75;
    color: white;
    background-color: #0000008a;
  }
  cursor: pointer;
  ${'' /* Slider arrow func */}
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  ${'' /* Slides transform -100vw for each slide */}
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;
const Slides = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  ${'' /* was 100vw on desktop dev */}
  height: 100vh;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Img = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 72px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spaacing: 2px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  &:hover,
  &:focus {
    border: 2px solid #0288d1;
  }
`;
const Slider = () => {
  //Slider arrow func
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slides bg={item.bg} key={item.id}>
            <ImgContainer>
              <Img src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slides>
        ))}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
