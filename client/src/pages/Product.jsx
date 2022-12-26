import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from './../responsive';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { publicRequest } from '../requestMethods';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({ padding: 5, flexDirection: 'column' })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 85vh;
  object-fit: cover;
  ${mobile({ height: '40vh' })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: '10px' })}
`;

const Title = styled.h1`
  font-weight: 400;
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 400;
  font-size: 32px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  ${'' /* width: 40%; /// WAS 50% */}
  margin: 20px 0px;
  ${mobile({ width: '100%' })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option`
  font-size: 14px;
`;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  ${mobile({ width: '100%' })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 900;
  cursor: pointer;
`;

const Amount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid #0288d1;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #0288d1;
  background-color: white;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    background-color: #0288d1;
    color: white;
    transition: 0.5s;
  }
`;

const Product = () => {
  //handling links
  let location = useLocation();
  const id = location.pathname.split('/')[2];
  //quantity
  const [quantity, setQuantity] = useState(1);
  // products
  const [product, setProduct] = useState({});
  //color of product
  const [color, setColor] = useState('');
  // size of product
  const [size, setSize] = useState({});
  // dispatch hook
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get('/products/find/' + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);
  // handling remove/add buttons
  const handleQuantity = (type) => {
    if (type === 'remove') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  // handling Add To Cart
  const handleAddToCart = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity('remove')} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity('add')} />
            </AmountContainer>
            <Button onClick={handleAddToCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
