import styled from 'styled-components';
import { lightGray, primaryColor } from '../globalStyles/globalStyles.styles';

export const CalendarMainConatiner = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  padding-bottom: 3.5rem;
`;

export const CalendarWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 11.5rem;
  width: 93%;
  margin: 0 auto;

  .weeks {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-bottom: 0.90625rem;

    div:nth-child(1) {
      color: #fb7878;
    }
  }

  .month-inc-dec {
    padding-top: 10px;
    width: 100%;
    max-width: 15rem;
    margin: 0 auto;
    margin-bottom: 2.25rem;
    gap: 0.9rem;
    justify-content: space-around;

    button {
      cursor: pointer;
      padding-top: 5px;
    }
    p {
      font-size: 1.25rem;
    }
  }
`;

export const CalendarHeaderContainer = styled.header`
  max-width: 100%;
  padding: 10px 2.5rem;
  margin-bottom: 1rem;
  background-color: ${primaryColor};
  color: #fff;
  .left-side-header {
    gap: 2rem;

    p {
      width: 10rem;
    }
  }
  .right-side-header {
    gap: 1.375rem;

    .profile-image {
      width: 62px;
      height: 62px;

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

export const SideBarConatainer = styled.aside`
  border: 2px solid ${lightGray};
  padding: 1rem;
  width: 100%;
  max-width: 400px;
`;
