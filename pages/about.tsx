import index from '../mock/index.js';
import jobs from '../mock/jobs.js';
import BlobViewer from '../components/BlobViewer';
import { NextPage } from 'next';
import styled, { css } from 'styled-components';
import {ExpandingDiv, RoundedImg} from '../components/StyledComponents';
import JobsSearch from "../components/JobsSearch/JobsSearch";

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
                    <Icon radius="2px" elevated src={'/me.jpg'} alt="picture_of_me" />{' '}
                    <Subtitle dangerouslySetInnerHTML={subtitleMarkup} />
                </div>
                <Widgets>
                    <BlobViewer items={blob} />
                    <JobsSearch items={jobs}/>
                </Widgets>
            </Inner>
        </>
    );
};

Home.getInitialProps = async () => {
    return {
        ...index,
        jobs
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
        font-size: ${props.theme.fontSizes.subHeading[1]}pt;
    `};
    width: 100%;
    text-align: right;
    .italics {
        font-style: italic;
        ${(props) => css`
            color: ${props.theme.colors.color_three};
        `};
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
`;

const Widgets = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 3.5rem;
`;
