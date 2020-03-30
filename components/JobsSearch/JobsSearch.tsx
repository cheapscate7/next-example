import * as React from 'react';
import styled, { css } from 'styled-components';

type JobsSearchProps = {
    items: IJob[];
};

const JobsSearch: React.FC<JobsSearchProps> = ({ items }) => {
    return (
        <Container>
            <ContainerTitle>Where I have worked:</ContainerTitle>
            <SearchBar type="text" placeholder="Search" />
            <Items>
                {items.map((job, index) => {
                    return (
                        <Job job={job} key={index + '_' + job.company_name} />
                    );
                })}
            </Items>
        </Container>
    );
};

export default JobsSearch;

const SearchBar = styled.input`
    border: 0;
    width: calc(100% - 2rem);
    padding: 1rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.highlight};
    outline: none;
`;

const Container = styled.section`
    width: 30%;
`;

const Items = styled.ul`
    list-style-type: none;
    width: 100%;
`;

const ContainerTitle = styled.h3`
    width: 100%;
    color: ${(props) => props.theme.colors.highlight};
`;

type JobProps = {
    job: IJob;
};

const Job: React.FC<JobProps> = ({ job }) => {
    return (
        <JobContainer>
            <p>
                <span className="company_name">{job.company_name}</span> /
                <span className="position"> {job.position}</span>
            </p>
            <p className="duration">
                {job.duration.length === 2
                    ? `${job.duration[0]} - ${job.duration[1]}`
                    : `Intermittently around ${job.duration[0]}`}
            </p>
        </JobContainer>
    );
};

const JobContainer = styled.li`
    .company_name {
        color: ${(props) => props.theme.colors.color_two};
    }
    .position {
        color: ${(props) => props.theme.colors.color_three};
    }
    .duration {
      font-style: italic;
    }
`;
