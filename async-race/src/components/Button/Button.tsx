import React from 'react';
import './ButtonStyles.css';

interface IButton {
  nameButton: string;
  onClickButton: (name: string) => void;
}
export const Button = ({ nameButton, onClickButton }: IButton) => {
  const onClick = () => onClickButton(nameButton);
  return (
    <button type="button" className="btn" onClick={onClick}>
      {nameButton}
    </button>
  );
};
