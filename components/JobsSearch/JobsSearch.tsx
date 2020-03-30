import * as React from 'react';
import styled, { css } from 'styled-components';

const JobsSearch: React.FC = () => {
    return <Container>
        <Container><ContainerTitle>Where I have worked:</ContainerTitle></Container>
        <SearchBar type="text" placeholder="Search"></SearchBar>
        <Items></Items>
    </Container>
}

export default JobsSearch;


const SearchBar = styled.input`
  border: 0;
  width: 100%;
  padding: 1rem;
`;

const Container = styled.section`
  width: 100%;
  
`;

const Items = styled.ul`
  list-style-type: none;
  width: 100%;
`;

const ContainerTitle = styled.h3`
  color: ${props => props.theme.colors.highlight};
`;