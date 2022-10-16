import styled from "styled-components";

export const NavBar = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid var(--color-grey-3);
  background-color: var(--color-grey-4);

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1000px;
    align-items: center;
    padding: 0 1rem;
  }

  img {
    width: 90.81px;
  }
`;

export const Header = styled.header`
  width: 100vw;
  height: 90px;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid var(--color-grey-3);

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1000px;
    align-items: center;
    padding: 0 1rem;
  }

  h1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--color-grey-0);
  }

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--color-grey-1);
  }
`;

export const Main = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  main {
    display: flex;
    width: 100%;
    max-width: 1000px;
    align-items: center;
    padding: 0 1rem;
    gap: 1rem;
  }

  h1 {
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    color: var(--color-grey-0);
  }
  ul {
    background-color: var(--color-grey-3);
    border-radius: 4px;
    padding: 1.2rem;
    gap: 0.8rem;
    display: flex;
    flex-direction: column;
  }
`;

export const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    button {
      background-color: var(--color-grey-3);
      border: transparent;
      border-radius: 4px;
      font-size: 20px;
      color: var(--color-grey-0);
      width: 28px;
      height: 28px;

      &:hover {
        background-color: var(--color-grey-2);
      }
    }
  }
`;
