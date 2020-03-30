declare interface IBlob {
    title: string;
    description: string;
}

declare interface Theme {
    colors: {
        background: string;
        background_alt: string;
        color_one: string;
        color_two: string;
        color_three: string;
        highlight: string;
        background_contrast: string;
    };
    fontWeights: {
        light: Number;
        normal: Number;
        heavy: Number;
        bold: string | Number;
    };
    fontSizes: {
        jumbotron: Number[];
        heading: Number[];
        subHeading: Number[];
        text: Number[];
        subText: Number[];
    };
    shadows: string[];
    fontFamily: string[];
}
