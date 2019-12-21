import React from 'react';
import { isNil } from 'lodash';
import * as L from '../..';
import {
  DropDownSelect,
} from '../DropDownSelect';
import { PagesDropDownProps, PageSizeChangeEvent } from './types';

export const PagesDropDown = (props: PagesDropDownProps): React.ReactElement => {
  const {
    handlePageSizeChange,
    isPageSizeChangeable,
    pageSize,
    pageSizeOptions,
    theme,
  } = props;

  const handleChange = (ev: L.DropDownSelectTypes.ChangeEvent) => {
    handlePageSizeChange(ev as PageSizeChangeEvent);
  };

  return (
    <div className={theme.labelSizeOptions}>
      { isPageSizeChangeable && (
        <>
          <DropDownSelect
            data={pageSizeOptions && pageSizeOptions.map(item => item.toString())}
            value={isNil(pageSize) ? pageSize : pageSize.toString()}
            onChange={handleChange}
            placeholder="Все"
          />
          Показать на странице
        </>
      )}
    </div>
  );
};
