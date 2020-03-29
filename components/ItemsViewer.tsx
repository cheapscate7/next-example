import * as React from 'react'
import {ExpandingDiv} from './StyledComponents';

type ItemsViewerProps = {
    items: IItems[]
}

const ItemsViewer: React.FC<ItemsViewerProps> = (props) => {
    return <ExpandingDiv width={['240px, 1fr']}>
        {props.items.map(item => <div>{item.name}</div>)}
    </ExpandingDiv>;
};

export default ItemsViewer;