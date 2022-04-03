import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';

const ButtonElement = styled.button`
    background-color: ${({theme,variant=defaultVariant }) => theme.button[variant].backgroundColor};
    color: ${({theme,variant=defaultVariant}) => theme.button[variant].color};
    border: 1px solid ${({theme,variant=defaultVariant}) => theme.button[variant].borderColor};
    padding:16px 32px;
    border-radius: 12px;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    &:hover {
        background-color: ${({theme,variant}) => theme.button[variant].hoverBackgroundColor};
    }
    &:active {
        border-color: ${({theme,variant}) => theme.button[variant].activeBorderColor};
    }
    &:disabled{
        filter: brightness(0.6);
        pointer-events: none;
    }
    svg{
        height: 100%;
        margin-right: 8px;
        &:nth-child(2){
            margin-right: 0;
            margin-left: 8px;
        }
    }
`;
ButtonElement.defaultProps = {
    variant: 'primary'
}
const Button = ({leftIcon,rightIcon,text,type,name}) => {
    return(
        <ButtonElement type={type} name={name}>
            <Icon iconName={leftIcon} fill="#fff" />
            {text}
            <Icon iconName={rightIcon} />
        </ButtonElement>
    )
}
export default Button;
