import * as React from 'react';
import { ExpandingDiv } from './StyledComponents';
import styled, { css } from 'styled-components';
import SanitizedHTML from 'react-sanitized-html';

type BlobViewerProps = {
    items: IBlob[];
};

const BlobViewer: React.FC<BlobViewerProps> = ({ items }) => {
    return (
        <BlobList>
            {items.map((item, index) => {
                return <BlobItem item={item} key={`blob_${index}`} />;
            })}
        </BlobList>
    );
};

export default BlobViewer;

const BlobList = styled.ul`
  list-style-type: none;
  margin-top: 3.5rem;
  //padding: 0.5rem;
  // border-radius: 2px;
  // box-shadow: ${(props) => props.theme.shadows[0]};
`;

type BlobItemProps = {
    item: IBlob;
};
const BlobItem: React.FC<BlobItemProps> = ({ item }) => {
    const markup = { __html: item.description };
    return (
        <Item>
            <h3>{item.title}</h3>
            <p dangerouslySetInnerHTML={markup} />
        </Item>
    );
};

const Item = styled.li`
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: 30rem calc(100% - 30rem);
    &:last-child {
        margin-bottom: 0.1rem;
    }
    h3 {
        ${(props) => css`
            color: ${props.theme.colors.color_two};
            font-weight: ${props.theme.fontWeights.bold};
            font-size: ${props.theme.fontSizes.heading[0]}pt;
        `};
        margin: 0.1rem;
    }
    p {
        margin: auto 0.1rem;
    }
    .italics {
        font-style: italic;
        ${(props) => css`
            color: ${props.theme.colors.color_three};
        `};
    }
`;
