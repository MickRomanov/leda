import * as React from 'react';
import { merge } from 'lodash';
import { LedaContext, globalDefaultTheme } from '../components/Leda';
import { RecursivePartial, RecursiveRequired } from '../commonTypes';

export type GlobalDefaultTheme = typeof globalDefaultTheme;

export type PartialGlobalDefaultTheme = RecursivePartial<GlobalDefaultTheme>;

export const useTheme = <T extends PartialGlobalDefaultTheme[keyof PartialGlobalDefaultTheme]>(theme: T | undefined, fieldName: keyof GlobalDefaultTheme): RecursiveRequired<T> => {
  const { theme: globalTheme } = React.useContext(LedaContext);

  return React.useMemo(() => Object.assign({}, globalDefaultTheme[fieldName], globalTheme[fieldName], theme), [fieldName, globalTheme, theme]) as unknown as RecursiveRequired<T>;
};
