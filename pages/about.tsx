import BlobViewer from '../components/BlobViewer';
import { NextPage } from 'next';
import styled, { css } from 'styled-components';
import fetch from 'isomorphic-unfetch';
import { ExpandingDiv, RoundedImg, Code } from '../components/StyledComponents';
// import FindMeCard from '../components/FindMeCard';


type HomeProps = {
    title: string;
    subtitle: string[];
    blob_title: string;
    blob: IBlob[];
    find_me: IFindMe[];
};

const Home: NextPage<HomeProps> = ({ title, subtitle, blob, find_me }) => {
    const createMarkup = (string) => {
        return { __html: string };
    };
    return (
        <>
            <Title>{title}</Title>
            <Inner>
                <div>
                    {subtitle.map((s, index) => (
                        <Subtitle
                            key={`${index}_subtitle`}
                            dangerouslySetInnerHTML={createMarkup(s)}
                        />
                    ))}
                </div>
                <Widgets>
                    <BlobViewer items={blob} />
                    {/*<ExpandingDiv>*/}
                    {/*    {find_me.map((item, index) => {*/}
                    {/*        return <FindMeCard item={item} key={`${index}_card`} />*/}
                    {/*    })}*/}
                    {/*</ExpandingDiv>*/}
                </Widgets>
            </Inner>
        </>
    );
};

Home.getInitialProps = async () => {
    const base = process.env.base_url;
    return await fetch(`${base}/about-this-project.json`).then((resp) =>
        resp.json()
    );
};

export default Home;

const Title = styled.h1`
    margin-top: 3rem;
    margin-bottom: 2rem;
    font-size: ${(props) => props.theme.fontSizes.jumbotron[0]}pt;
`;

const Subtitle = styled.p`
    font-size: 1.25rem;
    width: 100%;
    text-align: right;

    @media (max-width: 425px) {
        text-align: center;
        font-size: 1rem;
    }
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
    @media (max-width: 690px) {
        flex-direction: column;
        align-items: center;
    }
`;
