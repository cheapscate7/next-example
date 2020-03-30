declare interface IBlob {
    title: string;
    description: string;
}

declare interface IJob {
    id: number,
    company_name: string,
    position: string,
    duration: string[],
    location: string,
    worked_with: string[],
    description: string
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
        light: number;
        normal: number;
        heavy: number;
        bold: string | number;
    };
    fontSizes: {
        jumbotron: number[];
        heading: number[];
        subHeading: number[];
        text: number[];
        subText: number[];
    };
    shadows: string[];
    fontFamily: string[];
}
