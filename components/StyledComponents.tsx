import styled, { createGlobalStyle, css } from 'styled-components';

/**
 * THEMES
 */

export const ThemeMain: Theme = {
    colors: {
        background: '#fffffe',
        background_alt: '#1b1a3a',
        color_one: '#fcdb67',
        color_two: '#fc67aa',
        color_three: '#5cbad1',
        highlight: '#f15b4d',
        background_contrast: '#171717',
    },
    fontWeights: {
        light: 300,
        normal: 400,
        heavy: 500,
        bold: 'bold',
    },
    fontSizes: {
        jumbotron: [28, 30],
        heading: [18, 24],
        subHeading: [14, 16],
        text: [9, 11],
        subText: [7, 9],
    },
    shadows: [
        'inset 0 0 0 1px #ddd, 0 0 10px 0 rgba(0,0,0,.1)',
        '0px 0px 6px 0px rgba(0,0,0,0.75)',
    ],
    fontFamily: [
        '"Roboto", -apple-system, sans-serif',
        '"Poppins", -apple-system, sans-serif',
        'menlo, inconsolata, monospace'
    ],
};

/**
 * GLOBAL STYLES
 **/
export const GlobalStyle = createGlobalStyle`
  /**
  Roboto
   */
  @font-face {
      font-family: 'Roboto';
      font-weight: bold;
      font-display: swap;
      src: url('/fonts/Roboto-Bold.ttf');
  }
  @font-face {
      font-family: 'Roboto';
      font-display: swap;
      src: url('/fonts/Roboto-Regular.ttf');
      font-weight: 400;
  }
  @font-face {
      font-family: 'Roboto';
      font-display: swap;
      src: url('/fonts/Roboto-Light.ttf');
      font-weight: 300;
  }
  
  /**
  Poppins
   */
  @font-face {
      font-family: 'Poppins';
      font-display: swap;
      src: url('/fonts/Poppins-Bold.ttf');
      font-weight: bold;
  }
  @font-face {
      font-family: 'Poppins';
      font-display: swap;
      src: url('/fonts/Poppins-Regular.ttf');
      font-weight: 400;
  }
  @font-face {
      font-family: 'Poppins';
      font-display: swap;
      src: url('/fonts/Poppins-Light.ttf');
      font-weight: 300;
  }
  body {
        margin: 0;
        padding: 0;
        ${(props) => css`
            background-color: ${props.theme.colors.background};
            color: ${props.theme.colors.background_contrast};
            font-size: ${props.theme.fontSizes.text[1]}pt;
            font-family: ${props.theme.fontFamily[0]};
        `};
        line-height: 1.5;
  }
    a {
        color: inherit;
        text-decoration: none;
    }
    
    ul {
      padding: 0;
    }
    
    h1 {
        ${(props) => css`
            font-family: ${props.theme.fontFamily[1]};
            color: ${props.theme.colors.highlight};
            font-weight: ${props.theme.fontWeights.bold};
            font-size: ${props.theme.fontSizes.heading[1]}pt;
        `};
    }
    h2, h3, h4 {
      ${(props) => css`
          font-family: ${props.theme.fontFamily[0]};
      `};
    }
    p {
      margin: 0;
      .italics {
        font-style: italic;
        ${(props) => css`
            color: ${props.theme.colors.color_three};
        `};
      }
    }
`;
/**
 * DIV
 **/

const Div = styled.div`
    ${(props) =>
        props.elevated &&
        css`
            box-shadow: ${props.theme.shadows[0]};
        `};
`;

export const ExpandingDiv = styled(Div)`
    display: grid;
    gap: 1rem;
    width: 100%;
    grid-template-columns: repeat(
        auto-fit,
        minmax(
            ${(props) =>
                props.itemwidth
                    ? `${props.itemwidth[0]}, ${props.itemwidth[1]}`
                    : '210px, 1fr'}
        )
    );
`;

/**
 * IMG
 */

const Img = styled.img`
    ${(props) =>
        props.elevated &&
        css`
            box-shadow: ${props.theme.shadows[1]};
        `};
`;

export const RoundedImg = styled(Img)`
    border-radius: ${(props) => props.radius || '5px'};
`;

/**
 * SPANS
 */

const Code = styled.span`
    font-family: ${props => props.theme.fontFamily[0]};
    font-size: calc(1em - 2px);
    color: #555;
    background-color: #f0f0f0;
    padding: 0.2em 0.4em;
    border-radius: 2px;
`;
