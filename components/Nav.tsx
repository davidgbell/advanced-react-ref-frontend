import Link from 'next/link';
import React from 'react';

export const Nav = () => {
  return (
    <nav>
      <Link href='/products'>Products</Link>
      <Link href='/sell'>Sell</Link>
      <Link href='/orders'>Orders</Link>
      <Link href='/Account'>Account </Link>
    </nav>
  );
};
