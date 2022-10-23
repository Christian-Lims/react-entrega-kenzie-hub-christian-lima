import styled from "styled-components";

export const ButtonDefault = styled.button`
  width: max-content;
  padding: 0px 16.2426px;
  background: var(--color-grey-3);
  border-radius: 4px;
  font-weight: 600;
  font-size: 12px;
  line-height: 28px;
  text-align: center;
  color: var(--color-grey-0);
  border: transparent;

  &:hover {
    background-color: var(--color-grey-2);
  }
`;

export const ButtonPrimary = styled.button`
  height: 48px;
  background: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  color: var(--color-grey-0);

  &:hover {
    background-color: var(--color-primary-negative);
    border: transparent;
  }

  &:focus {
    background-color: var(--color-primary-focus);
    border: var(--color-grey-0);
  }
`;

export const ButtonSecundary = styled.button`
  height: 48px;
  background: var(--color-grey-1);
  border: 1px solid var(--color-grey-1);
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  color: var(--color-grey-0);

  &:hover {
    background-color: var(--color-grey-2);
    border: transparent;
  }

  &:focus {
    background-color: var((--color-grey-3));
    border: var(--color-grey-0);
  }
`;
