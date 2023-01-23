import React from 'react';
import { Button } from '../Button/Button';
import './BtnSelectRemoveStyles.css';

export const BtnSelectRemove = () => {
  const onSelectClick = () => console.log(`Click to`);
  const onRemoveClick = () => console.log(`Click to`);
  return (
    <div className="btn-select-remove">
      <Button nameButton="Select" onClickButton={onSelectClick} />
      <Button nameButton="Remove" onClickButton={onRemoveClick} />
    </div>
  );
};
