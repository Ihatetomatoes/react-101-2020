import React from 'react';
import { CollapsibleWrapper, Title, Panel } from './Collapsible.styles';
import { items } from '../../data';

const Item = ({item}) => {
    const { title, content } = item;
    return (
        <>
            <Title>{title}</Title>
            <Panel><div>{content}</div></Panel>
        </>
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
