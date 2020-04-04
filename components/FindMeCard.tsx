import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { ExpandingDiv, RoundedImg, SectionTitle } from './StyledComponents';

type FindMeCardsProps = {
    items: IFindMe[];
};

const FindMeCards: React.FC<FindMeCardsProps> = ({ items }) => {
    return (
        <Container>
            <SectionTitle>Find Me</SectionTitle>
            <ExpandingDiv>
                {items.map((item, index) => (
                    <FindMeCard item={item} key={`${index}_find_me_card`} />
                ))}
            </ExpandingDiv>
        </Container>
    );
};

export default FindMeCards;

const Container = styled.section`
    width: 100%;
`;

type FindMeCardProps = {
    item: IFindMe;
};

const FindMeCard: React.FC<FindMeCardProps> = ({ item }) => {
    return (
        <AlignedDiv>
            <HoverLink href={item.link}>
                <IconOverlay>{item.label}</IconOverlay>
                <Icon radius="2px" elevated src={`${item.name}.webp`} />
            </HoverLink>
        </AlignedDiv>
    );
};

const AlignedDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HoverLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    div {
        display: none;
        position: absolute;
        transform-origin: center center;
    }
    &:hover {
        div {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;

const IconOverlay = styled.div`
  background-color: ${props => props.theme.colors.color_one};
  position: absolute;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.colors.highlight};
  font-weight: ${props => props.theme.fontWeights.bold};
  
`;

const Icon = styled(RoundedImg)`
    height: 90px;
`;
