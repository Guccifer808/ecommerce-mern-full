import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { Badge } from '@mui/material';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
//Styled Components
const Container = styled.div`
  height: 60px;
  ${mobile({ height: '50px' })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: '10px 0px' })}
`;
//Left side of the container
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Languages = styled.span`
  font-size: 14;
  cursor: pointer;
  font-weight: 400;
  ${mobile({ display: 'none' })}
`;
const Search = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  &:hover,
  &:focus {
    outline: none;
  }
  ${mobile({ width: '50px' })}
  ${'' /* ${mobile({ display: 'none' })} */}
`;
//Middle side of the container
const Middle = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-transform: uppercase;
  ${mobile({ fontSize: 24 })}
`;
//Right side of the container
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    flex: 2,
    justifyContent: 'space-around',
  })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: 500;
  ${mobile({ fontSize: 12, marginLeft: '10px' })}
`;

const Navbar = () => {
  // cart quantity hook
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Languages>EN</Languages>
          <Search>
            <Input placeholder='Search' />
            <SearchIcon
              style={{ color: 'gray', fontSize: 18, cursor: 'pointer' }}
            />
          </Search>
        </Left>
        <Middle>
          <Logo>SHOP.</Logo>
        </Middle>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign in</MenuItem>
          <Link to='/cart'>
            <MenuItem>
              <Badge color='info' variant='dot' badgeContent={quantity}>
                <ShoppingBasketOutlinedIcon color='action' />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
