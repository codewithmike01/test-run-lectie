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

  .add-event {
    margin-top: 2rem;
    gap: 1.5rem;

    .instruct {
      gap: 0.75rem;
      .check {
        width: 25px;
        height: 25px;
        border: 2px solid #2a2a2a;
        opacity: 0.32;
      }
      .model {
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 586px) {
    .instruct {
      .check {
        width: 20px;
        height: 20px;
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

    &:hover {
      border-radius: 50%;
      background-color: #f1f3f4;
    }

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

export const EventContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  form {
    background-color: #fff;
    border-radius: 4px;
    width: 100%;
    max-width: 480px;
    box-shadow: 1px 3px 2px rgba(190, 190, 190, 0.8);
    padding-bottom: 2rem;

    header {
      position: relative;
      background-color: #f1f3f4;
      padding: 0.4rem;
      justify-content: flex-end;

      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: gray;
      }
    }
  }

  .form-inputs {
    display: grid;
    grid-column: 1/5;
    align-items: flex-end;
    padding: 0.5rem;
    gap: 1rem;

    input:focus {
      outline: none;
      border-bottom: 2px solid blue;
    }

    input {
      border: none;
      border-bottom: 2px solid #f1f3f4;
      transition: border-bottom 0.75s ease-in-out;
    }

    .event-title {
      font-size: 0.9rem;
      margin-right: 1.5rem;
      width: 80%;
      margin: 0 auto;
      margin-bottom: 1rem;
    }

    .date-time {
      gap: 1rem;
      margin-left: 0.3rem;
      margin-bottom: 1rem;

      .set-date-time {
        gap: 1rem;

        .time-date {
          max-width: 165px;
          width: 100%;
          font-size: 0.8rem;
          transition: border-bottom 0.75s ease-in-out;
        }

        span {
          color: rgba(190, 190, 190, 1);
        }
        .date:hover {
          border-bottom: 1px solid black;
          cursor: pointer;
        }
        .time {
          width: 100%;
          max-width: 70px;
        }
      }
    }

    .descibe {
      margin-left: 0.3rem;
      gap: 1rem;

      input {
        font-size: 0.9rem;
      }

      .description {
        width: 100%;
      }

      .img-container {
        width: 24px;
        height: 24px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .add-image {
      gap: 1rem;

      p {
        cursor: pointer;
        font-size: 0.9rem;
      }
    }
    .button-contain {
      margin-top: 18px;
      justify-content: flex-end;
      .button-save {
        cursor: pointer;
        width: 100px;
        border: none;
        border-radius: 4px;
        padding: 7px 25px 7px 20px;
        background-color: ${({ color }) => (color ? color : '')};
      }
    }
  }

  @media screen and (max-width: 586px) {
    form {
      max-width: 320px;

      .form-inputs {
        .date-time {
          .set-date-time {
            .time {
              max-width: 55px;
            }
          }
        }
      }
    }
  }
`;
