import React from 'react';
import './ButtonStyles.css';

interface IButton {
  nameButton: string;
  onClickButton: () => void;
  // eslint-disable-next-line react/require-default-props
  disabled?: boolean;
}
export const Button = ({ nameButton, onClickButton, disabled = false }: IButton) => {
  const onClick = () => onClickButton();
  return (
    <button
      type="button"
      className={`btn ${disabled && 'disabled'}`}
      onClick={onClick}
      disabled={disabled}
    >
      {nameButton}
    </button>
  );
};
