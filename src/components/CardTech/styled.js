import styled from "styled-components";

export const CardBtn = styled.button`
  border: none;
  background-color: transparent;
  li {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    background: var(--color-grey-4);
    border-radius: 4px;
    padding: 1rem;
  }

  h2 {
    font-weight: 700;
    font-size: 14px;
    color: var(--color-grey-0);
  }

  p {
    font-weight: 400;
    font-size: 12px;
    color: var(--color-grey-1);
  }
`;
