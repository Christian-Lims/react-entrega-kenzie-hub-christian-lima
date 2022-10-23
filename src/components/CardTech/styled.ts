import styled from "styled-components";

export const CardLi = styled.li`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background: var(--color-grey-4);
  border-radius: 4px;
  padding: 1rem;
  cursor: pointer;

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

  &:hover {
    background-color: var(--color-grey-2);

    p {
      color: var(--color-grey-0);
    }
  }
`;
