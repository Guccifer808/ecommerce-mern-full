import Navbar from './../components/Navbar';
import Announcement from './../components/Announcement';
import Footer from './../components/Footer';
import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from './../responsive';
import { useSelector } from 'react-redux/es/exports';
import StripeCheckout from 'react-stripe-checkout';
import { useState } from 'react';
import { useEffect } from 'react';
import { userRequest } from '../requestMethods';
import { useNavigate } from 'react-router-dom';

//Stripe public key
const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: 10 })}
`;

const Title = styled.h1`
  font-weight: 400;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopInfo = styled.div`
  ${mobile({ display: 'none' })}
`;
const TopText = styled.span`
  margin: 0 10px;
  text-decoration: underline;
  cursor: pointer;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 500;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;
const ProductInfo = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
  margin: 50px 0px;
  ${'' /* padding was none */}
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetails = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  ${'' /* margin-bottom was 20px */}
  cursor: pointer;
`;
const ProductAmount = styled.div`
  font-size: 20px;
  margin: 5px;
  font-weight: 500;
  ${mobile({ margin: '5px 15px' })}
`;
const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: 500;
  ${mobile({ marginBottom: 20 })}
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 400;
`;
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '24px'};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Cart = () => {
  //cart fetch
  const cart = useSelector((state) => state.cart);
  //Stripe checkout
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  //redirect after successful checkout
  const navigate = useNavigate();
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post('/checkout/payment', {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        navigate('/success', { data: res.data });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate]);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopInfo>
            <TopText>SHOPPING BAG(5)</TopText>
            <TopText>WISHLIST (2)</TopText>
          </TopInfo>
          <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <ProductInfo>
            {cart.products.map((product) => (
              <Product key={product.title}>
                <ProductDetails>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product: </b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID: </b> {product.id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size: </b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetails>
              </Product>
            ))}
            <Hr />
          </ProductInfo>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discoung</SummaryItemText>
              <SummaryItemPrice>$ -5.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name='SHOP.'
              image='https://avatars.githubusercontent.com/u/36012294?v=4'
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
