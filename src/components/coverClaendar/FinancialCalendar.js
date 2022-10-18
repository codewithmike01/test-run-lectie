import React from 'react';
import { FinancialCalendarContainer } from './styles/financial.Styles';
import testImg from '../../Assets/Images/testImg.jpg';
import Location from '../../Assets/Images/location.png';
import Email from '../../Assets/Images/mail.png';
import Number from '../../Assets/Images/phone.png';
import facebook from '../../Assets/Images/facebook.png';
import linkedin from '../../Assets/Images/linkedin.png';
import instagram from '../../Assets/Images/instagram.png';
import youtube from '../../Assets/Images/youtube.png';
import twitter from '../../Assets/Images/twitter.png';

const FinancialCalendar = () => {
  const arr = {
    theme1: {
      headerColor: '#5F6901',
      headerPadding: '1.3125rem 5rem',
      headerLogo: '1.75rem',
      logoColor: '#fff',
      headerMb: '8px',
      headingText: 'Financial Calendar',
      headingFS: '5rem',
      headingSubFS: '1.25rem',
      headingSubText: 'Stay connected all year long',
      headingFF: 'Bahuraksa',
      headingSubFF: 'Nunito',
      headingSubMb: '8px',
      bannerText:
        'Beaware of little expenses a small leak will sink a great ship ',
      bannerTextFS: '2.7rem',
      bannerImg: `${testImg}`,
      bannerTextColor: '#fff',
      bannerMb: '38px',
      contactAddr: 'No 23 NTA rd, chuba road, Port harcourt',
      contactEmail: 'bespoke.gmail.com',
      contactNum: '09109876543',
      contactFS: '1.1rem',
      contactSocial: [
        {
          linkedIn: 'https://faceme',
          twitter: 'https://twitter',
          youtube: 'https://twitter',
          instagram: 'https://twitter',
          facebook: 'https://facebookme',
        },
      ],
    },
  };

  return (
    <FinancialCalendarContainer>
      <header
        style={{
          backgroundColor: arr['theme1']['headerColor'],
          padding: arr['theme1']['headerPadding'],
          marginBottom: arr['theme1']['headerMb'],
        }}
      >
        <h4
          style={{
            fontSize: arr['theme1']['headerLogo'],
            color: arr['theme1']['logoColor'],
          }}
        >
          Bespoke.io
        </h4>
      </header>

      <h5
        className="t-center"
        style={{
          fontFamily: arr['theme1']['headingFF'],
          fontSize: arr['theme1']['headingFS'],
        }}
      >
        {arr['theme1']['headingText']}
      </h5>
      <p
        className="t-center "
        style={{
          fontSize: arr['theme1']['headingSubFS'],
          fontFamily: arr['theme1']['headingSubFF'],
          marginBottom: arr['theme1']['headingSubMb'],
        }}
      >
        {arr['theme1']['headingSubText']}
      </p>

      <div className="background-image">
        <h5
          style={{
            fontSize: arr['theme1']['bannerTextFS'],
            color: arr['theme1']['bannerTextColor'],
          }}
        >
          &apos;&apos;{arr['theme1']['bannerText']}&apos;&apos;
        </h5>
        <img src={arr['theme1']['bannerImg']} alt="banner backimg" />
      </div>

      <div className="contact flex flex-col">
        <ul className="contact-icon flex">
          <li className="flex a-center">
            <img src={Location} alt="Navigation" />
            <p style={{ fontSize: arr['theme1']['contactFS'] }}>
              {arr['theme1']['contactAddr']}
            </p>
          </li>
          <li className="flex a-center">
            <img src={Email} alt="Navigation" />
            <p style={{ fontSize: arr['theme1']['contactFS'] }}>
              {arr['theme1']['contactEmail']}
            </p>
          </li>
          <li className="flex a-center">
            <img src={Number} alt="Navigation" />
            <p style={{ fontSize: arr['theme1']['contactFS'] }}>
              {arr['theme1']['contactNum']}
            </p>
          </li>
        </ul>
        <ul className="social-contact flex">
          <li className="flex a-center">
            <a
              href={arr['theme1']['contactSocial'][0].linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="Navigation" />
            </a>
          </li>
          <li>
            <a
              href={arr['theme1']['contactSocial'][0].twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Navigation" />
            </a>
          </li>
          <li className="flex a-center">
            <a
              href={arr['theme1']['contactSocial'][0].youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} alt="Navigation" />
            </a>
          </li>
          <li className="flex a-center">
            <a
              href={arr['theme1']['contactSocial'][0].instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Navigation" />
            </a>
          </li>
          <li className="flex a-center">
            <a
              href={arr['theme1']['contactSocial'][0].facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Navigation" />
            </a>
          </li>
        </ul>
      </div>

      <button type="button">Get Started</button>
    </FinancialCalendarContainer>
  );
};

export default FinancialCalendar;
