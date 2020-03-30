import index from '../api/index.js';
import BlobViewer from '../components/BlobViewer';
import { NextPage } from 'next';
import styled, { css } from 'styled-components';

type HomeProps = {
    title: string;
    subtitle: string;
    blob: IBlob[];
};

const Home: NextPage<HomeProps> = ({ title, subtitle, blob }) => {
    const searchres = '';
    return (
        <>
            <Title>{title}</Title>
            <div>
                <img src={'/me.jpg'} /> <Subtitle>{subtitle}</Subtitle>
            </div>
            <BlobViewer items={blob} />
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
    border-bottom: 1px solid ${(props) => props.theme.colors.highlight};
`;

const Subtitle = styled.p`
    ${(props) => css`
        font-size: ${props.theme.fontSizes.subHeading[1]}pt;
    `};
    width: calc(100% - 160px);
    float: right;
    text-align: right;
`;
