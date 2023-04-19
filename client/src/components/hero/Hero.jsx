import React from 'react';
import './Hero.css';
import fssaiLogo from '../../assets/fssai logo.png';
import smallPdfLogo from '../../assets/small pdf.png';
import foscosLogo from '../../assets/foscos.png';
import LinkTo from './link/Link';

const links = [
  {
    image: fssaiLogo,
    text: 'FSSAI Website',
    link: 'https://www.fssai.gov.in/',
  },
  {
    image: foscosLogo,
    text: 'Foscos',
    link: 'https://foscos.fssai.gov.in/',
  },
  {
    image: smallPdfLogo,
    text: 'Small PDF',
    link: 'https://smallpdf.com/',
  },
];
const Hero = () => {
  return (
    <div className="hero">
      <div className="heading">
        <p className="title">Food Buissness Operator</p>
        <p className="quotes">
          In a world where foodborne illness is a major public health concern,
          food safety is not a luxury but a necessity.
        </p>
        <div className="links">
          {links.map((link, index) => (
            <LinkTo
              key={index}
              image={link.image}
              text={link.text}
              redirectTo={link.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
