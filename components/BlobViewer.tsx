import * as React from 'react';
import styled, { css } from 'styled-components';

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
  width: 65%;
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
    grid-template-columns: 50% 50%;
    gap: 5px;
    &:last-child {
        margin-bottom: 0.1rem;
    }
    h3 {
        ${(props) => css`
            color: ${props.theme.colors.color_two};
            font-weight: ${props.theme.fontWeights.bold};
            font-size: 1.3rem;
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
    @media (max-width: 1024px) {
        h3 {
          font-size: 1rem;
        }
    }
`;
