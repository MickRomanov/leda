import * as React from 'react';
import { Div } from '../../components/Div';
import { LedaContext } from '../../components/Leda';
import { useElement } from '../../utils';
import { VIEW_TYPES } from './constants';
import { DateCell } from './DateCell';
import {
  getMonthDays, getShortWeekDayName, getWeekDayName,
} from './helpers';
import { DateViewProps } from './types';

export const DateView = (props: DateViewProps): React.ReactElement | null => {
  const {
    viewDate, theme, viewType, onClick, min, max, value, dateCellRender, weeksRowRender, ...restProps
  } = props;

  const { renders: { dateTimeInput: dateTimeInputRenders } } = React.useContext(LedaContext);

  const WeekRow = useElement(
    'WeekRow',
    Div,
    weeksRowRender || dateTimeInputRenders.weekRowRender,
    props,
  );

  if (viewType !== VIEW_TYPES.DATES) return null;

  return (
    <>
      <WeekRow className={theme.weekDaysRow}>
        {Array.from(new Array(7)).map((item, index) => {
          const weekDay = getShortWeekDayName(index);
          return (
            <Div
              key={weekDay}
              title={getWeekDayName(index)}
              className={theme.dateCell}
            >
              {weekDay}
            </Div>
          );
        })}
      </WeekRow>
      <Div className={theme.dateView} {...restProps}>
        {
          getMonthDays(viewDate.getMonth(), viewDate.getFullYear()).map((week, index, dates) => (
            <Div key={`week-${index.toString()}`} className={theme.dateRow}>
              {week.map((date, weekIndex) => (
                <DateCell
                  key={`date-${index.toString()}-${date}`}
                  min={min}
                  max={max}
                  date={date}
                  dateCellRender={dateCellRender}
                  index={index}
                  weekIndex={weekIndex}
                  dates={dates}
                  onClick={onClick}
                  theme={theme}
                  value={value}
                  viewType={viewType}
                  viewDate={viewDate}
                />
              ))}
            </Div>
          ))
        }
      </Div>
    </>
  );
};
