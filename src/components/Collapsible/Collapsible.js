import React, { useState, useRef, useEffect } from 'react';
import { CollapsibleWrapper, ItemWrapper, Title, Panel } from './Collapsible.styles';
import { items } from '../../data';

const Item = ({item}) => {
    const [state, setState] = useState(false);
    const panelBody = useRef(null);
    const { title, content } = item;

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

    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch('https://randomuser.me/api/?results=20')
        .then(response => response.json())
        .then(data => data.results.map(user => (
            {
                title: `${user.name.first} ${user.name.last}`,
                content: `${user.login.username}`
            }
        )))
        .then(users => setUsers(users))
        .catch(error => console.log(error));

        return(() => console.log('unmounting'))

    }, []);

    return (
        <CollapsibleWrapper>
            {
                users.map(item => <Item key={item.title} item={item} />)
            }
        </CollapsibleWrapper>
    )
}

export default Collapsible;
