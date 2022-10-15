import styled from 'styled-components';
import { lightGray } from '../globalStyles/globalStyles.styles';

export const CalendarMainConatiner = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 93%;
  margin: 0 auto;
`;

export const CalendarWrapper = styled.div`
  display: flex;
  flex: 1;

  .weeks {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-bottom: 0.90625rem;

    div:nth-child(1) {
      color: #fb7878;
    }
  }
`;

export const CalendarHeaderContainer = styled.header`
  max-width: 100%;
  padding-top: 0.3rem;
  margin-bottom: 1rem;
  .left-side-header {
    gap: 2rem;
    .month-inc-dec {
      padding-top: 10px;
      gap: 0.9rem;
      button {
        cursor: pointer;
      }
    }
  }
  .right-side-header {
    gap: 1.375rem;

    .profile-image {
      width: 72px;
      height: 72px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        image-rendering: pixelated;
      }
    }
  }
`;

export const DayContainer = styled.div`
  border: 1px solid ${lightGray};
  display: flex;
  flex-direction: column;

  .day {
    margin: 0.5625rem 0.5rem;
    text-align: right;
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
