import styled from 'styled-components';

//Styled Components
const Container = styled.div`
  height: 30px;
  background-color: #0288d1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
      &#x1F389; Save 30% OFF With Promo Code: SAVE30 &#x1F6D2;
    </Container>
  );
};

export default Announcement;
