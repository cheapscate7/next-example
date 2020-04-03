import BlobViewer from '../components/BlobViewer';
import { NextPage } from 'next';
import styled, { css } from 'styled-components';
import fetch from 'isomorphic-unfetch';
import SubtitleCard from '../components/cards/SubtitleCard';

type HomeProps = {
    title: string;
    subtitle: string[];
    sections: ISection[];
    find_me: IFindMe[];
};

const Home: NextPage<HomeProps> = ({ title, subtitle, sections, find_me }) => {
    return (
        <>
            <Title>{title}</Title>
            <Inner>
                <SubtitleCard subtitle={subtitle} />
                {sections.map((section, index) => (
                    <Section
                        section={section}
                        key={`about_section_${index}`}
                    ></Section>
                ))}
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

type SectionProps = {
    section: ISection;
};

const Section: React.FC<SectionProps> = ({ section }) => {
    const createMarkup = (string) => {
        return { __html: string };
    };
    return (
        <SectionContainer>
            <SectionTitle>{section.title}</SectionTitle>
            <SectionList>
                {section.subtitle.map((point, index) => (
                    <li key={`${index}_section_point`}>
                        <p dangerouslySetInnerHTML={createMarkup(point)}></p>
                    </li>
                ))}
            </SectionList>
        </SectionContainer>
    );
};

const SectionContainer = styled.section`
  text-align: left;
`;

const SectionTitle = styled.h2`
    margin-top: 3rem;
    margin-bottom: 2rem;
    text-align: left;
    font-size: ${(props) => props.theme.fontSizes.heading[0]}pt;
    color: ${props => props.theme.colors.color_two};
`;

const SectionList = styled.ul`
    list-style-type: none;
    font-size: 1.1rem;
    li {
        margin: 0;
    }
`;
