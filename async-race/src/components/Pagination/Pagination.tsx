import React from 'react';
import { Button } from '../Button/Button';
import './PaginationStyles.css';

interface IPagination {
  onPaginationClick: (value: boolean) => void;
}

export const Pagination = ({ onPaginationClick }: IPagination) => {
  return (
    <div className="container">
      <Button nameButton="prev page" onClickButton={() => onPaginationClick(false)} />
      <Button nameButton="next page" onClickButton={() => onPaginationClick(true)} />
    </div>
  );
};
