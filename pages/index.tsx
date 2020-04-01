import BlobViewer from '../components/BlobViewer';
import { NextPage } from 'next';
import styled, { css } from 'styled-components';
import fetch from 'isomorphic-unfetch';
import { ExpandingDiv, RoundedImg } from '../components/StyledComponents';
import JobsSearch from '../components/JobsSearch/JobsSearch';

type HomeProps = {
    title: string;
    subtitle: string;
    blob: IBlob[];
    jobs: IJob[];
};

const Home: NextPage<HomeProps> = ({ title, subtitle, blob, jobs }) => {
    const searchres = '';
    const subtitleMarkup = { __html: subtitle };
    return (
        <>
            <Title>{title}</Title>
            <Inner>
                <div>
                    <Icon
                        radius="2px"
                        elevated
                        src={'/me.jpg'}
                        alt="picture_of_me"
                    />{' '}
                    <Subtitle dangerouslySetInnerHTML={subtitleMarkup} />
                </div>
                <Widgets>
                    <BlobViewer items={blob} />
                    <JobsSearch items={jobs} />
                </Widgets>
            </Inner>
        </>
    );
};

Home.getInitialProps = async () => {
    const base = process.env.base_url;
    const index_response = await fetch(`${base}/about_me.json`).then((resp) =>
        resp.json()
    );
    const jobs_response = await fetch(`${base}/jobs.json`).then((resp) =>
        resp.json()
    );

    return {
        ...index_response,
        jobs: jobs_response,
    };
};


export default Home;

const Title = styled.h1`
    margin-top: 3rem;
    margin-bottom: 2rem;
    font-size: ${(props) => props.theme.fontSizes.jumbotron[0]}pt;
`;

const Subtitle = styled.p`
    ${(props) => css`
        font-size: 1.25rem;
    `};
    width: 100%;
    text-align: right;
    .italics {
        font-style: italic;
        ${(props) => css`
            color: ${props.theme.colors.color_three};
        `};
    }
    @media (max-width: 1024px) {
    }
`;

const Icon = styled(RoundedImg)`
    float: left;
    shape-outside: inset();
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
`;

const Inner = styled.section`
    padding: 5rem 10rem;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1255px) {
        padding: 2.5rem 3rem;
    }
`;

const Widgets = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 3.5rem;
`;
