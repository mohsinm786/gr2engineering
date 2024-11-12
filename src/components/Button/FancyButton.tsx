"use client";

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledButton = styled.div`
  outline: none;
  cursor: pointer;
  border: none;
  padding: 0.9rem 2rem;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;
  letter-spacing: 0.05rem;
  font-weight: 700;
  font-size: 17px;
  border-radius: 500px;
  overflow: hidden;
  background: #11B0B8;
  color: ghostwhite;
  text-align: center;

  & span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
  }

  &:hover span {
    color: black;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 120%;
    height: 100%;
    background: #002171;
    transform: skew(30deg);
    z-index: 0;
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  &:hover::before {
    transform: translate3d(100%, 0, 0);
  }
`;

interface FancyButtonProps {
  text: string;
  path: string;
}

const FancyButton: React.FC<FancyButtonProps> = ({ text, path }) => {
  return (
    <Link href={path}>
      <StyledButton>
        <span>{text}</span>
      </StyledButton>
    </Link>
  );
};

export default FancyButton;
