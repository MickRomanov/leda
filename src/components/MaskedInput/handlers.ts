import * as React from 'react';
import { isFunction } from 'lodash';
import {
  BlurData, ChangeData, FocusData, MaskedInputProps, MaskedInputState,
} from './types';
import { BlurEvent, FocusEvent, ChangeEvent } from '../../src/MaskedInputBase/types';
import { CustomEventHandler } from '../../commonTypes';
import { getValueToValidate } from './helpers';

export const createChangeHandler = (
  props: MaskedInputProps,
  state: MaskedInputState,
  extraData: ChangeData,
): CustomEventHandler<ChangeEvent> => ev => {
  const { onChange, name, value: valueProp } = props;

  const { setValue } = extraData;

  if (isFunction(onChange)) {
    const customEvent = {
      ...ev,
      component: {
        name,
        value: ev.target.value,
      },
    };

    onChange(customEvent as ChangeEvent);
  }

  if (valueProp === undefined) setValue(ev.target.value);
};

export const createBlurHandler = (
  props: MaskedInputProps,
  state: MaskedInputState,
  extraData: BlurData,
): CustomEventHandler<BlurEvent> => ev => {
  const { onBlur, name } = props;

  const {
    validateCurrent,
    setFocused,
    value,
    maskedInputRef,
    placeholderChar,
  } = extraData;

  const valueToValidate = getValueToValidate({
    value, maskedInputRef, placeholderChar,
  });

  const isValid = validateCurrent(valueToValidate);

  if (isFunction(onBlur)) {
    const customEvent = {
      ...ev,
      component: {
        name,
        value,
        isValid,
      },
    };

    onBlur(customEvent as BlurEvent);
  }

  setFocused(false);
};

export const createFocusHandler = (
  props: MaskedInputProps,
  state: MaskedInputState,
  extraData: FocusData,
): CustomEventHandler<FocusEvent> => ev => {
  const { onFocus, name } = props;

  const { setFocused, value } = extraData;

  if (isFunction(onFocus)) {
    const customEvent = {
      ...ev,
      component: {
        name,
        value,
      },
    };

    onFocus(customEvent as FocusEvent);
  }

  setFocused(true);
};

export const createKeyDownHandler = (
  props: MaskedInputProps,
): React.KeyboardEventHandler<HTMLInputElement> => ev => {
  const { name, onEnterPress } = props;

  if (ev.key === 'Enter' && isFunction(onEnterPress)) {
    const event = {
      ...ev,
      component: {
        name,
        value: ev.currentTarget.value,
        inputValue: ev.currentTarget.value,
      },
    };
    onEnterPress(event);
  }
};
