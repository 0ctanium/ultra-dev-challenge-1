import styled from "styled-components";

export const Input = styled.input`
  box-sizing: border-box;
  font-size: 16px;
  border: solid 1px #8c8c8c;
  border-radius: 2px;
  display: block;
  appearance: none;
  width: 100%;
  color: #000;
  padding: 10px 11px;
  height: 44px;
  outline: none;
`;

export const TextField = styled(Input)`
  height: 48px;
  padding: 10px 10px 0;
  width: 100%;
`