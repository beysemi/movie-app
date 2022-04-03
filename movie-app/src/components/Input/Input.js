import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
const InputContainer = styled.div``;
const InputLabel = styled.label``;
const InputElement = styled.input`
    background-color: ${({theme}) => theme.input.backgroundColor};
    padding: 24px 16px;
    border: 1px solid ${({theme}) => theme.input.borderColor};
    border-radius: 12px;
    max-width: 344px;
    max-height: 64px;
    width: 100%;
    height: 64px;
    color: ${({theme}) => theme.input.color};
    font-size: 16px;
    &:focus {
        outline: none;
    }
`;

const Input = ({leftIcon,rightIcon,labelText,type,name,placeholder="Label"}) => {
    return (
        <>
            <InputContainer>
                <Icon iconName={leftIcon} />
                <InputElement type={type} name={name} placeholder={placeholder} />
                <InputLabel>{labelText}</InputLabel>
                <Icon iconName={rightIcon} />
            </InputContainer>
            
        </>
    );
}

export default Input;
