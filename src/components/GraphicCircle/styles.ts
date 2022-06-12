import styled , { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 1rem;
    `}
`
