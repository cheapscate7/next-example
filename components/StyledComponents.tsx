import styled, { createGlobalStyle, css } from 'styled-components';

interface Theme {
    colors: {
        background: String;
        background_alt: String;
        color: String;
        color_alt: String;
        black: String;
        highlight: String;
    };
    fontWeights: {
        light: Number;
        normal: Number;
        heavy: Number;
        bold: String | Number;
    };
    fontSizes: {
        jumbotron: Number[];
        heading: Number[];
        subHeading: Number[];
        text: Number[];
        subText: Number[];
    };
    shadows: String[];
    fontFamily: String[];
}

interface props {
    theme: Theme;
}

/**
 * THEMES
 */

export const ThemeMain: Theme = {
    colors: {
        background: '#1b1a3a',
        background_alt: '#373654',
        color: '#b6b6b6',
        color_alt: '#ececec',
        black: '#0d0d0d',
        highlight: '#e0b703',
    },
    fontWeights: {
        light: 300,
        normal: 400,
        heavy: 500,
        bold: 'bold',
    },
    fontSizes: {
        jumbotron: [26, 28],
        heading: [18, 24],
        subHeading: [14, 16],
        text: [9, 11],
        subText: [7, 9],
    },
    shadows: ['inset 0 0 0 1px #ddd, 0 0 10px 0 rgba(0,0,0,.1)'],
    fontFamily: ['Roboto, -apple-system, sans-serif'],
};

/**
 * GLOBAL STYLES
 **/
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${(props) => props.theme.colors.color_alt};
    font-size: ${(props) => props.theme.fontSizes.text[1]}pt;
    line-height: 1.5;
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.theme.fontFamily[0]};
  }
  a {
    color: inherit;
    text-decoration: none;
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

const FlexBox = styled(Div)`
    display: flex;
    ${(props) =>
        props.noWrap &&
        css`
            flex-wrap: nowrap;
        `};
`;

export const CenteredColumn = styled(FlexBox)`
    flex-direction: column;
    justify-content: center;
`;

export const CenteredRow = styled(FlexBox)`
    flex-direction: row;
    justify-content: center;
`;

export const SpacedRow = styled(Div)`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, 45%));
    justify-content: space-between;
    align-content: flex-start;
`;