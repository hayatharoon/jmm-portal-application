import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from '../../../assets/utils/utils';
import './pagination.css';

const Pagination = ({ onPageChange, totalCount, siblingCount = 2, currentPage, pageSize, className }) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  console.log('ttt', totalCount);

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={classnames('pagination-container', { [className]: className })}>
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}>
        <div className='arrow left' />
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className='pagination-item dots'>&#8230;</li>;
        }

        return (
          <li
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}>
        <div className='arrow right' />
      </li>
    </ul>
  );
};

export default Pagination;
