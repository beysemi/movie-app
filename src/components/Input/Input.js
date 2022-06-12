import React from "react";
import styled from "styled-components";
import * as Icons from "../Icons";
const InputContainer = styled.div`
  position: relative;
  border-radius: 12px;
  margin: 24px 0;
  svg {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
const InputLabel = styled.label`
  position: absolute;
  left: 56px;
  top: 50%;
  transform: translateY(-50%);
  user-select: none;
  pointer-events: none;
  color: ${({ theme }) => theme.input.labelColor};
`;
const InputElement = styled.input`
  background-color: ${({ theme }) => theme.input.backgroundColor};
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.input.borderColor};
  border-radius: 12px;
  max-height: 64px;
  width: 100%;
  height: 64px;
  color: ${({ theme }) => theme.input.color};
  font-size: 16px;
  line-height: 24px;
  text-indent: 40px;
  transition: opacity 0.4s ease-in-out;
  &:focus {
    outline: none;
    & + label {
      top: 12px;
      font-size: 14px;
      line-height: 16px;
    }
    &::placeholder {
      opacity: 1;
    }
  }
  &::placeholder {
    opacity: 0;
  }
`;

const Input = ({
  leftIcon,
  rightIcon,
  labelText,
  type,
  name,
  placeholder = "Label",
}) => {
  return (
    <>
      <InputContainer>
        {leftIcon}
        <InputElement type={type} name={name} placeholder={placeholder} />
        <InputLabel>{labelText}</InputLabel>
        {rightIcon}
      </InputContainer>
    </>
  );
};

export default Input;
