import styled , { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        .count {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            width: 10rem;
            height: 10rem;
            box-shadow: 2px 2px 10px  rgba(0, 0, 0, 0.5);
            border-radius: 5px;

            h1 {
                color: #030d21;
                font-size: 8rem;
                text-shadow: 2px 2px 0 cyan,
                                -2px -2px 0 red;
            }
        }
    `}
`
