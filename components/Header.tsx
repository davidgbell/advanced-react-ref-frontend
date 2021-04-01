import Link from 'next/link';
import styled from 'styled-components';
import React from 'react';
import { Nav } from './Nav';

const Logo = styled.h1`
  background: var(--green);
  position: relative;
  margin-left: 2rem;
  font-family: Georgia, 'Times New Roman', Times, serif;
  letter-spacing: 2px;
  a {
    text-decoration: none;
    color: var(--cream);
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }
`;

export const Header = () => {
  return (
    <HeaderStyles>
      <div className='bar'>
        <Logo>
          <Link href='/'>Thirsty Plants</Link>
        </Logo>
      </div>
      <div className='sub-bar'>
        <p>search</p>
      </div>
      <Nav />
    </HeaderStyles>
  );
};
