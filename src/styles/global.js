import { createGlobalStyle } from "styled-components";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
</style>;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body{
    background-color: var(--color-grey-4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  ol, ul, li {
    list-style: none;
  } 

  button{
    cursor: pointer;
  }

  :root{
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --color-grey-0: #F8F9FA;
    --color-grey-1: #868E96;
    --color-grey-2: #343B41;
    --color-grey-3: #212529;
    --color-grey-4: #121214;
    --color-negative: #E83F5B;
    --color-sucess: #3FE864;
  }
`;
export default GlobalStyle;
