import formatMoney from '../utils/formatMoney';
import { ProductStyles } from './styles/ProductStyles';

export const ProductItem = ({ product }) => {
  return (
    <ProductStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{formatMoney(product.price)}</p>
    </ProductStyles>
  );
};
