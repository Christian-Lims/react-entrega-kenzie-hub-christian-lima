import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 350px;

  @media (max-width: 400px) {
    width: 90vw;
  }
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-3);
  width: 100%;
  padding: 1rem;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;

    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 0;
      color: var(--color-negative);
      margin-bottom: 0.3rem;
      align-self: flex-end;
    }
  }

  label {
    font-weight: 400;
    font-size: 14px;
    color: var(--color-grey-0);
  }

  input,
  select {
    height: 48px;
    width: 100%;
    background: var(--color-grey-2);
    border: 1.2182px solid var(--color-grey-2);
    border-radius: 4px;
    padding: 0px 16.2426px;
    font-weight: 400;
    font-size: 14px;
    color: var(--color-grey-1);
  }
`;
