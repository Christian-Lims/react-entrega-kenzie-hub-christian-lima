import styled from "styled-components";

export const DivHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;

  img {
    width: 122.06px;
    height: 21.21px;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--color-grey-0);
  }

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--color-grey-1);
  }
`;
