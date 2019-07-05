import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  margin: 20px 0 40px 10px;
  display: inline-flex;
  padding: 4px 8px;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: bold;
  font-size: 16px;
  border-bottom: 2px solid #ff0404;
  color: #ff0404;
  transition: opacity 0.2s;

  &:active {
    background: #ff0404;
    color: #fff;
  }

  &:hover {
    opacity: 0.7;
  }
`;
