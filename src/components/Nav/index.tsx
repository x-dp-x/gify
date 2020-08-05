import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'wouter';
import { Link } from '../Link';
import { paths, colors } from '../../constants';

const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 0 0 40px 0;
`;

interface NavLinkProps {
  active: boolean;
}

const NavLink = styled.div`
  ${({ active }: NavLinkProps) =>
    active ? `border-bottom: 2px solid ${colors.blue};` : ``}
  margin: 0 20px 0 0;
`;

interface isActiveTypes {
  currentPath: string;
  pathToCheck: string;
}

const isActive = ({ currentPath, pathToCheck }: isActiveTypes) =>
  currentPath === pathToCheck;

export const Nav = () => {
  const [location] = useLocation();
  const currentPath = location;
  return (
    <Wrapper>
      <NavLink
        data-testid="search-link"
        active={isActive({ currentPath, pathToCheck: paths.search })}
      >
        <Link href={paths.search} color="blue" size="medium">
          Search
        </Link>
      </NavLink>
      <NavLink
        active={isActive({ currentPath, pathToCheck: paths.favourites })}
      >
        <Link href={paths.favourites} color="blue" size="medium">
          Favourites
        </Link>
      </NavLink>
    </Wrapper>
  );
};
