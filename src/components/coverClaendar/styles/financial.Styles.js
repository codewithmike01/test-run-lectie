import styled from 'styled-components';

export const FinancialCalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  .background-image {
    margin-bottom: 37px;
    position: relative;
    max-width: 1440px;
    height: 75vh;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    h5 {
      font-weight: bold;
      position: absolute;
      left: 0;
      right: 0;
      margin: 10rem 3rem;
      max-width: 780px;
      width: 90%;
      font-weight: 400;
    }
  }

  .contact {
    max-width: 420px;
    margin: 0 auto;
    margin-bottom: 40px;

    .contact-icon {
      align-self: flex-start;
      flex-direction: column;

      gap: 20px;
      li {
        gap: 20px;
        list-style-type: none;
      }
    }
    .social-contact {
      align-self: flex-start;
      margin-top: 20px;
      gap: 20px;
      li {
        list-style-type: none;
      }
    }
  }

  button {
    align-self: center;
    padding: 1rem 5.25rem;
    border: none;
    color: #fff;
    font-size: 1rem;
    width: 340px;

    background: #5f6901;
    border-radius: 20px;
  }

  @media screen and (max-width: 587px) {
    .background-image {
      height: 60vh;
      h5 {
        margin: 10rem 3rem;
        font-size: 2.7rem !important;
      }
    }
    .contact {
      max-width: 420px;

      .contact-icon {
        align-self: center;
      }
    }
    button {
      width: 70%;
      padding: 1rem 3.5rem;
    }
  }
`;
