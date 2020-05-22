import React, { useState, useRef } from 'react';
import { CollapsibleWrapper, ItemWrapper, Title, Panel } from './Collapsible.styles';
import { items } from '../../data';

const Item = ({item}) => {
    const [state, setState] = useState(false);
    const panelBody = useRef(null);
    const { title, content } = item;

    console.log(panelBody.current);
    const currentHeight = state ? panelBody.current.clientHeight : 0;

    return (
        <ItemWrapper className={state ? 'isExpanded' : null}>
            <Title onClick={() => setState(!state)}>{title}</Title>
            <Panel style={{height: `${currentHeight}px`}}>
                <div ref={panelBody}>{content}</div>
            </Panel>
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
