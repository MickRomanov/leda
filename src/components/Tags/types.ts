import * as React from 'react';
import { CustomRender, CustomEventHandler } from '../../commonTypes';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';

export interface TagsProps extends React.HTMLAttributes<HTMLDivElement> {
  /* Тема для компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.tags],
  /** Кастомный wrapper */
  wrapperRender?: CustomRender<TagsProps, {}, WrapperProps>,
  ref?: React.Ref<TagsRefCurrent>,
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface IconProps {
  onClick?: CustomEventHandler<React.MouseEvent<HTMLSpanElement>>,
  className?: string,
}

export interface WrapperProps {
  className?: string,
  ref?: React.Ref<TagsRefCurrent>,
  children?: React.ReactNode,
}

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Иконка для тега */
  iconRender?: CustomRender<TagProps, {}, IconProps>,
  /** Обработчик клика по иконке */
  onIconClick?: CustomEventHandler<React.MouseEvent<HTMLSpanElement>>,
  /** Кастомный wrapper */
  wrapperRender?: CustomRender<TagProps, {}, WrapperProps>,
  /** Тема для компонента (передается через Tags) */
  theme?: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.tags],
  ref?: React.Ref<TagsRefCurrent>,
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface TagsRefCurrent {
  wrapper: HTMLElement | null,
}
