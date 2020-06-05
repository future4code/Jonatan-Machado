import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 90%;
    height: 20px;
    background: #e02041;
    border: 0;
    border-radius: 8px;
    color: #fff;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 12px;
    transition: filter 0.3s;
  }
  button:hover {
    filter: brightness(80%);
  }

  table th,
  td {
    padding: 20px;
    border: 1px solid black;
  }
`;

export const Register = styled.span`
  width: 8%;
  height: 20px;
  background: #e02041;
  border: 0;
  border-radius: 10px;
  color: #fff;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  transition: filter 0.3s;

  :hover {
    filter: brightness(80%);
  }
`;
