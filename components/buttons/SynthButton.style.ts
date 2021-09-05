import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 10px 35px 10px 35px;
    background: linear-gradient(95.04deg, rgba(0, 0, 0, 0) 3.11%, rgba(0, 0, 0, 0.12) 94.96%), #212426;
    border: 2px solid rgba(0, 0, 0, 0.08);
    box-shadow: -6px -6px 12px rgba(255, 255, 255, 0.04), 6px 6px 12px rgba(0, 0, 0, 0.16);
    border-radius: 100px;
    color: #F9D3B4 ;

    &:hover {
        background: linear-gradient(95.04deg, rgba(0, 0, 0, 0.12) 3.11%, rgba(0, 0, 0, 0) 94.96%), #212426;
        border: 2px solid rgba(255, 255, 255, 0.02);
        box-shadow: -6px -6px 12px rgba(255, 255, 255, 0.04), 6px 6px 12px rgba(0, 0, 0, 0.16);
        color: rgba(249, 211, 180, 0.4);
  }
`;