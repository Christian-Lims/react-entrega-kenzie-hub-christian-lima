import styled from "styled-components";

export const DivHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  img {
    width: 144.06px;
    height: 19.97px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: var(--color-grey-0);
  align-self: center;
  margin: 1rem 0;
`;

export const DivFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--color-grey-1);
    align-self: center;
    margin: 1rem 0;
  }
  a {
    height: 48px;
    background: var(--color-grey-1);
    border: 1px solid var(--color-grey-1);
    border-radius: 4px;
    font-weight: 500;
    font-size: 16px;
    color: var(--color-grey-0);
    width: 100%;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: var(--color-grey-2);
      border: transparent;
    }

    &:focus {
      background-color: var((--color-grey-3));
      border: var(--color-grey-0);
    }
  }
`;
