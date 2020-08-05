import { css } from 'styled-components';

export const media = {
  tablet: (...args: any) =>
    css`
      @media (min-width: 610px) {
        ${css(args)}
      }
    `,
};
