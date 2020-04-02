import * as React from 'react';
import styled, { css } from 'styled-components';
import { DebounceInput } from 'react-debounce-input';
import {
    useSalesChannelList,
    JobsListActions,
} from '../../hooks/useJobsSearch';

type JobsSearchProps = {
    items: IJob[];
};

const JobsSearch: React.FC<JobsSearchProps> = ({ items }) => {
    const { dispatch, state } = useSalesChannelList();

    React.useEffect(() => {
        dispatch(JobsListActions.setList(items));
    }, []);

    React.useEffect(() => {
        dispatch(JobsListActions.setList(items));
    }, [state.searchString]);

    return (
        <Container>
            <ContainerTitle>Where I have worked:</ContainerTitle>
            <DebounceInput
                type="text"
                placeholder="Search"
                debounceTimeout={200}
                element={SearchBarWithLabel}
                onChange={(e) => {
                    dispatch(JobsListActions.setSearchString(e.target.value));
                }}
                value={state.searchString}
            />
            <Items>
                {state.jobs.map((job, index) => {
                    return (
                        <Job job={job} key={index + '_' + job.company_name} />
                    );
                })}
            </Items>
        </Container>
    );
};

export default JobsSearch;

const Container = styled.section`
    width: 30%;
    @media (max-width: 690px) {
        width: 100%;
    }
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


/**
 * We have to have this little wrapper so that we can add a label for accessibility
 * @param props
 * @constructor
 */
const SearchBarWithLabel: React.FC = (props) => {
    return <label><SearchBar {...props} /></label>
};

const SearchBar = styled.input`
    border: 0;
    width: calc(100% - 2rem);
    padding: 1rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.highlight};
    outline: none;
`;
