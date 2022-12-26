import styled from 'styled-components';
import ProductItem from './ProductItem';
import { mobile } from './../responsive';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
  ${mobile({ padding: 0 })}
`;

const Products = ({ category, filters, sort }) => {
  //Products state
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  // fetch cetegory if no cat fetch all products
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/products?category=${category}`
            : 'http://localhost:5000/api/products'
        );
        setProducts(res.data); // updating products
      } catch (err) {}
    };
    getProducts();
  }, [category]);

  //filtering throuh products and looking for our values/keys
  useEffect(() => {
    category &&
      setFilteredProduct(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [category, filters, products]);

  //sort
  useEffect(() => {
    if (sort === 'Popular') {
      setFilteredProduct((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === 'low') {
      setFilteredProduct((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProduct((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);
  return (
    <Container>
      {category
        ? filteredProduct.map((item) => (
            <ProductItem item={item} key={item.id} />
          ))
        : products.map((item) => <ProductItem item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
