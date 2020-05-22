import React, { useState } from 'react';
import { CollapsibleWrapper, ItemWrapper, Title, Panel } from './Collapsible.styles';
import { items } from '../../data';

const Item = ({item}) => {
    const [state, setState] = useState(false);
    const { title, content } = item;
    return (
        <ItemWrapper className={state ? 'isExpanded' : null}>
            <Title onClick={() => setState(!state)}>{title}</Title>
            <Panel><div>{content}</div></Panel>
        </ItemWrapper>
    )
}

export const Collapsible = () => {
    return (
        <CollapsibleWrapper>
            {
                items.map(item => <Item key={item.title} item={item} />)
            }
        </CollapsibleWrapper>
    )
}

export default Collapsible;
