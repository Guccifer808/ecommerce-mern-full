import {
  MailOutline,
  Facebook,
  Instagram,
  Phone,
  Pinterest,
  Twitter,
  Room,
} from '@material-ui/icons';
import styled from 'styled-components';
import paymentIcons from '../assets/payment_icons.png';
import { mobile } from './../responsive';

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })}
`;
// Left Side
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialsContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
// Middle Side
const Middle = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: 'none' })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  font-weight: 500;
`;
// Right Side
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  align-items: center;
  display: flex;
`;
const Payment = styled.img`
  width: 60%;
  height: 25px;
  object-fit: cover;
  ${mobile({ width: '95%' })}
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SHOP.</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          consequatur corporis, beatae iusto quidem neque fugiat ipsum veritatis
          itaque praesentium eaque provident in, mollitia dignissimos minima
          impedit quaerat facilis perspiciatis assumenda repudiandae enim! Rem,
          ab.
        </Description>
        <SocialsContainer>
          <SocialIcon color='3B5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='E60023'>
            <Pinterest />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <Twitter />
          </SocialIcon>
        </SocialsContainer>
      </Left>
      <Middle>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>For Him</ListItem>
          <ListItem>For Her</ListItem>
          <ListItem>Accesories</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Return Order</ListItem>
          <ListItem>Return Policy</ListItem>
        </List>
      </Middle>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} /> Khreschatyk st., Kyiv 02222
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} />0 800 8080
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} />
          contact@shop.ua
        </ContactItem>
        <Payment src={paymentIcons} />
      </Right>
    </Container>
  );
};

export default Footer;
