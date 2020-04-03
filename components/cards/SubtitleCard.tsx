import * as React from 'react';
import { RoundedImg } from '../StyledComponents';
import styled, { css } from 'styled-components';

type SubtitleCardProps = {
    subtitle: string[];
    iconSrc?: string;
    iconAlt?: string;
};

const SubtitleCard: React.FC<SubtitleCardProps> = ({
    subtitle,
    iconSrc,
    iconAlt,
}) => {
    const createMarkup = (string) => {
        return { __html: string };
    };

    return (
        <>
            {iconSrc && (
                <Icon radius="2px" elevated src={iconSrc} alt={iconAlt} />
            )}
            {subtitle.map((sub, index) => (
                <Subtitle
                    key={`${index}_subtitle`}
                    dangerouslySetInnerHTML={createMarkup(sub)}
                />
            ))}
        </>
    );
};

export default SubtitleCard;

const Icon = styled(RoundedImg)`
    shape-outside: inset();
    margin-bottom: 0.5rem;
    float: left;
    margin-right: 0.5rem;

    @media (max-width: 425px) {
        width: 100%;
    }
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
