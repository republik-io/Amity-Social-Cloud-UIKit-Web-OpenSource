import styled, { css } from 'styled-components';

import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/pro-regular-svg-icons';

import Menu from '~/core/components/Menu';

export const SearchIcon = styled(FaIcon).attrs({ icon: faSearch })`
  color: ${({ theme }) => theme.palette.base.shade2};
  padding: 0 10px;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);

  &.svg-inline--fa {
    width: auto;
  }
`;

export const CommunitiesSearchContainer = styled.div`
  position: relative;

  ${({ sticky }) =>
    sticky &&
    css`
      z-index: 500;
      position: sticky;
      top: 0;
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    `}
`;

export const CommunitiesSearchInput = styled.input`
  ${({ theme }) => theme.typography.body}
  width: 100%;
  padding: 10px;
  padding-left: 40px;
  background: ${({ theme }) => theme.palette.system.background};
  border: 1px solid #d5d7dd;
  border-radius: 4px;
  outline: none;
  color: ${({ theme }) => theme.palette.base.main};

  &::placeholder {
    color: ${({ theme }) => theme.palette.base.shade1};
  }
`;

export const CommunitiesSearchResults = styled(Menu)`
  overflow-y: auto;
  max-height: 200px;
`;
