import styled from 'styled-components';

export const CollapsibleWrapper = styled.div`
    background-color: #fff;
    border-radius: 4px;
    max-width: 420px;
    margin: 0 auto 30px auto;
    text-align: left;
    padding: 20px;
    position: relative;
    min-height: 100px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.05);
`;

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 300;
    padding: 10px 15px 20px 15px;
    margin-bottom: 10px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.05);
`;

export const Panel = styled.div`
    font-size: 16px;
    line-height: 1.5em;
    box-shadow: 0 1px 1px rgba(0,0,0,0.05);
    div {
        padding: 0 15px 20px 15px;
    }
`;