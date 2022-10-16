import styled from 'styled-components';
import {
  lightGray,
  primaryColor,
} from '../../globalStyles/globalStyles.styles';

export const CalendarMainConatiner = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  padding-bottom: 3.5rem;
`;

export const CalendarWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 2.4rem;
  justify-content: space-between;
  width: 93%;
  max-width: 1424px;

  margin: 0 auto;
  .edit-background {
    gap: 0.5rem;
    margin-bottom: 1.375rem;

    .img-container {
      height: 7rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    p {
      align-self: flex-end;
      justify-content: flex-end;
      font-size: 1rem;
      color: #094b5f;
      gap: 0.3rem;
      max-width: 200px;
      cursor: pointer;
      svg {
        width: 16px;
        height: 16px;
        color: #8c8c8c;
      }
    }
  }
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
    max-width: 12rem;
    margin: 0 auto;
    margin-bottom: 2.25rem;
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
  max-width: 100vw;
  padding: 10px 2.5rem;
  margin-bottom: 1rem;
  background-color: ${primaryColor};

  color: #fff;

  .left-side-header {
    gap: 2rem;
  }

  .date-time {
    p {
      font-size: 1rem;
    }
  }

  .right-side-header {
    gap: 1.375rem;
    img {
      cursor: pointer;
    }

    .icon {
      width: 30px;
      height: 30px;

      img {
        width: 100%;
        height: 100%;
      }
    }

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

  @media screen and (max-width: 586px) {
    .right-side-header {
      .icon {
        width: 25px;
        height: 25px;
      }
      .profile-image {
        width: 45px;
        height: 45px;
      }
    }
  }

  @media screen and (max-width: 290px) {
    .right-side-header {
      .icon {
        width: 15px;
        height: 15px;
      }
      .profile-image {
        width: 35px;
        height: 35px;
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
    padding-bottom: 25px;
    text-align: right;
  }
`;

export const RightSideCalendarContainer = styled.div``;
export const MonthContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-auto-rows: minmax(100px, auto);
  flex: 1;
  width: 100%;
`;

export const SideBarConatainer = styled.aside`
  padding: 1rem;
  padding-top: 0px;

  max-width: 100%;
  position: relative;

  .month-move {
    padding-top: 10px;
    width: 100%;
    max-width: 12rem;
    margin-top: 1.5rem;
    margin-bottom: 2.25rem;
    justify-content: space-between;

    button {
      cursor: pointer;
      padding-top: 5px;
    }
  }

  .my-calendar {
    width: 100%;
    header {
      cursor: pointer;
      padding: 5px 15px;
      border-radius: 4px;
      background-color: transparent;
      transition: background-color 0.05s ease-in-out;

      .rotate {
        transform: rotate(180deg);
      }

      &:hover {
        background-color: #f1f3f4;
      }
    }
  }
`;

export const SmallCalendarConatiner = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-auto-columns: minmax(100px, auto);
  flex: 1;
  margin-bottom: 3rem;

  .day-init {
    padding: 4.5px 6.5px;
  }

  button {
    border: none;
    background-color: transparent;
    width: 40px;
    height: 40px;

    p {
      cursor: pointer;
    }
  }

  .highlight {
    background-color: #1a73e8;
    color: #fff;
    border-radius: 50%;
  }

  .selected {
    background-color: #d2e3fc;
    color: #185abc;
    border-radius: 50%;
  }

  @media screen and (max-width: 586px) {
    button {
      width: 20px;
      height: 20px;
    }

    p {
      cursor: pointer;
    }
  }
`;
