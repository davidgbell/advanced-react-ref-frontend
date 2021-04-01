import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import { ProductItem } from './ProductItem';

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      name
      description
      price
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export const ProductsList = () => {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <ProductListStyles>
      {data.allProducts.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ProductListStyles>
  );
};
