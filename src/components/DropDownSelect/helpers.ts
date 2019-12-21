import { isNil } from 'lodash';
import { SomeObject } from '../../commonTypes';
import { getText } from '../../src/SuggestionList/helpers';
import { filterSuggestionByRule, getClassNames } from '../../utils';
import { DropDownSelectProps, FilterRules, GetComponentClassNames } from './types';
/** классы для элементов компонента */
export const getComponentClassNames: GetComponentClassNames = ({
  theme, className, isDisabled, isFocused, isOpen, isValid,
}) => {
  const wrapperClassNames = getClassNames(
    theme.wrapper,
    className,
  );

  const inputWrapperClassNames = getClassNames(
    theme.inputWrapper,
    {
      [theme.inputWrapperDisabled]: isDisabled,
      [theme.inputWrapperFocused]: isFocused,
      [theme.inputWrapperInvalid]: !isValid,
    },
  );

  const selectIconClassNames = getClassNames(
    theme.selectIcon,
    {
      [theme.selectIconOpened]: isDisabled ? false : isOpen,
      [theme.selectIconClosed]: isDisabled ? true : !isOpen,
    },
  );

  return {
    wrapperClassNames,
    inputWrapperClassNames,
    selectIconClassNames,
  };
};

export const getInputValue = (value: string | number | SomeObject | null, filterValue: string | null, shouldFilterValues?: boolean, textField?: string): string => {
  if (shouldFilterValues) {
    return isNil(filterValue) ? (getText(value || '', textField) || '').toString() : filterValue;
  }

  if (isNil(value)) {
    return '';
  }

  return (getText(value, textField) || '').toString();
};

export const filterData = (data: DropDownSelectProps['data'], filterValue: string | null, textField?: string, filterRule?: FilterRules): DropDownSelectProps['data'] => {
  if (!data) return undefined;

  const filteredData = data.filter(item => filterSuggestionByRule(getText(item, textField), filterValue || '', filterRule));

  if (filteredData.length === 0) return undefined;

  return filteredData;
};
