import styled from 'styled-components';
import { lightGray } from '../globalStyles/globalStyles.styles';

export const CalendarMainConatiner = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const CalendarWrapper = styled.div`
  display: flex;
  flex: 1;

  .weeks {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }
`;

export const DayContainer = styled.div`
  border: 1px solid ${lightGray};
  display: flex;
  flex-direction: column;

  .day {
    padding: 1.8rem;
    margin: 0.25rem 0;
    text-align: center;
  }

  @media screen and (max-width: 586px) {
  }
`;

export const MonthContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-auto-rows: minmax(100px, auto);
  flex: 1;
`;
