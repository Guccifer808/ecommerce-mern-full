import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Products from './../components/Products';
import Newsletter from './../components/Newsletter';
import Footer from './../components/Footer';
import { mobile } from './../responsive';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: '0px 20px', display: 'flex', flexDirection: 'column' })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ textAlign: 'center', marginRight: 0 })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: '10px 0px' })}
`;
const Option = styled.option`
  font-size: 14px;
`;

const ProductList = () => {
  // handling links paths
  let location = useLocation();
  const category = location.pathname.split('/')[2];

  //filters and sorting
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('Popular');

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{category.toUpperCase()}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter</FilterText>
          <Select name='color' onChange={handleFilters}>
            <Option disabled defaultValue>
              Color
            </Option>
            <Option>white</Option>
            <Option>red</Option>
            <Option>black</Option>
            <Option>blue</Option>
            <Option>pink</Option>
            <Option>yellow</Option>
          </Select>
          <Select name='size' onChange={handleFilters}>
            <Option disabled defaultValue>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value='Popular'>Popular</Option>
            <Option value='Newest'>Newest</Option>
            <Option value='low'>Price: low to high</Option>
            <Option value='high'>Price: high to low</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
