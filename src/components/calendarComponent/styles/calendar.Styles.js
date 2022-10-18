import styled from 'styled-components';
import {
  buttonBlueColor,
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

  @media screen and (max-width: 587px) {
    gap: 0;
    width: 99%;
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
    padding-bottom: 25px;
    margin: 0.57rem auto;
    justify-content: center;
    align-items: center;
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

  .down {
    width: 2.1875rem;
    height: 2.1875rem;
    border-radius: 50%;
    margin: 10px auto;
    padding: 9px;

    &:hover {
      background-color: #f1f3f4;
      cursor: pointer;
    }
  }

  .highlight {
    background-color: #1a73e8;
    color: #fff;
    width: 2.1875rem;
    height: 2.1875rem;
    border-radius: 50%;
    margin: 10px auto;
    padding: 9px;
    cursor: pointer;
  }
  .day-month {
    padding: 4px;
  }
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
    padding: 0.5rem;

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

    p {
      cursor: pointer;
    }
  }
  .hov {
    &:hover {
      border-radius: 50%;
      background-color: #f1f3f4;
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
`;

export const EventWrapper = styled.div`
  position: relative;
  width: 80%;
  max-width: 390px;
  background-color: #fff;
  padding-bottom: 20px;

  box-shadow: 2px 15px 46px 6px rgba(0, 0, 0, 0.29);
  -webkit-box-shadow: 2px 15px 46px 6px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: 2px 15px 46px 6px rgba(0, 0, 0, 0.29);
  header {
    padding: 8px 1.25rem;
    border-radius: 4px;
    justify-content: flex-end;
    background-color: ${buttonBlueColor};
    button {
      background-color: transparent;
      border: none;
      color: #fff;
      cursor: pointer;
    }
  }

  form {
    width: 100%;
    margin-top: 30px;
    gap: 2rem;
    padding-left: 20px;
    padding-right: 10px;

    input {
      border: none;
      border-bottom: 2px solid gray;
      margin: 0 auto;
      width: 80%;
      font-size: 0.89rem;

      &:focus {
        outline: none;
        border-bottom: 2px solid ${buttonBlueColor};
        transition: border-bottom 0.2s ease-in;
      }
    }

    .time-date {
      position: relative;
      width: 100%;
      gap: 1rem;
      .time-date-input {
        position: inherit;
        gap: 1rem;

        .event-date {
          margin: 0;
          max-width: 175px;
          width: 100%;
        }
        .time-container {
          position: inherit;
          gap: 1rem;
          .time-size {
            margin: 0;
            max-width: 130px;
          }
        }
      }
    }
  }

  .description {
    gap: 0.7rem;
    width: 100%;
    .hovDescription,
    p {
      cursor: pointer;
      padding: 5px;
      width: 100%;
    }
  }
  .hovDescription:hover {
    background-color: #f1f3f4;
  }

  .add-image {
    gap: 15px;

    p {
      cursor: pointer;
      text-align: center;
    }
  }

  .button-container {
    width: 73%;
    justify-content: flex-end;
  }
  .color-contain {
    text-align: center;
    justify-content: center;
    gap: 10px;
    .colors {
      width: 1.55rem;
      height: 1.55rem;
      border-radius: 50%;
      cursor: pointer;
    }
  }
`;

export const TimeModalContainer = styled.div`
  height: 200px;
  overflow-y: scroll;
  position: absolute;
  top: 21px;
  width: 50%;
  max-width: 150px;
  text-align: center;
  box-shadow: -1px 7px 15px 7px rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: -1px 7px 15px 7px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: -1px 7px 15px 7px rgba(0, 0, 0, 0.19);
  padding-top: 8px;
  gap: 10px;
  z-index: 4;
  background-color: #fff;
  right: ${({ pos }) => (pos === 'end-time' ? '0' : '')};
  &::-webkit-scrollbar {
    width: 0.6rem;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(189, 193, 198, 0.3);
    height: 40px;
    border-radius: 30%;
  }

  .time {
    padding: 10px 10px;
    font-size: 0.8rem;
    text-align: left;

    &:hover {
      background-color: #f1f3f4;
      cursor: pointer;
    }
  }
`;
