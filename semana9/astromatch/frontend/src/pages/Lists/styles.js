import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Container = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: row;
`;

export const List = styled.table`
  width: 100%;
  text-align: left;
  margin-top: 20px;
  thead th {
    font-size: 20px;
    color: #b3b3b3;
    letter-spacing: 1.11px;
    font-weight: normal;
    text-transform: uppercase;
    padding: 5px 10px;
    &:last-child {
      text-align: right;
    }
  }
  tbody td {
    border-top: 1px solid #282828;
    font-size: 18px;
    padding: 0 10px;
    line-height: 40px;
    &:first-child {
      width: 80px;
      text-align: right;
    }
    &:last-child {
      text-align: right;
    }
  }
  img {
    width: 90px;
    border-radius: 50%;
  }
`;

export const User = styled.tr`
  border-top: 1px solid #282828;
  font-size: 13px;
  padding: 0 10px;
  line-height: 40px;
  background: #f5f5f5;
  color: #df4723;
`;
