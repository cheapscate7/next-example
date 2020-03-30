import index from '../api/index.js';
import BlobViewer from '../components/BlobViewer';
import { NextPage } from 'next';
import styled, { css } from 'styled-components';
import { RoundedImg } from '../components/StyledComponents';

type HomeProps = {
    title: string;
    subtitle: string;
    blob: IBlob[];
};

const Home: NextPage<HomeProps> = ({ title, subtitle, blob }) => {
    const searchres = '';
    const subtitleMarkup = { __html: subtitle };
    return (
        <>
            <Title>{title}</Title>
            <Inner>
                <div>
                    <RoundedImg radius="2px" elevated src={'/me.jpg'} />{' '}
                    <Subtitle dangerouslySetInnerHTML={subtitleMarkup} />
                </div>
                <div>
                    <BlobViewer items={blob} />
                </div>
            </Inner>
        </>
    );
};

Home.getInitialProps = async () => {
    return index;
};

export default Home;

const Title = styled.h1`
    margin-top: 3rem;
    margin-bottom: 2rem;
    font-size: ${(props) => props.theme.fontSizes.jumbotron[0]}pt;
`;

const Subtitle = styled.p`
    ${(props) => css`
        font-size: ${props.theme.fontSizes.subHeading[1]}pt;
    `};
    width: calc(100% - 160px);
    float: right;
    text-align: right;
    .italics {
        font-style: italic;
        ${(props) => css`
            color: ${props.theme.colors.color_three};
        `};
    }
`;

const Inner = styled.section`
    padding: 5rem 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
