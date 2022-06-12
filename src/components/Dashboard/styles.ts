import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        max-width: ${theme.grid.container};
        margin: 0 auto;
        padding: ${theme.spacings.medium} 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5rem;
    `}
`
