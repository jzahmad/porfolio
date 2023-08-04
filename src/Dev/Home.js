import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import myImage from './Picture.jpg';
import './Home.css';

const name = 'Jazib Ahmad';

function Home() {
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  const phoneNumber = "7824143561";
  const email = "jazibahmad1010@gmail.com";
  const linkedInId = "jazib-ahmad-19457a230";

  // Delay time in milliseconds (adjust as needed)
  const delayTime1 = 2000; // Set the desired delay for content 1
  const delayTime2 = 3000; // Set the desired delay for content 2
  const delayTime3 = 4000; // Set the desired delay for content 3

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowContent1(true);
    }, delayTime1);

    const timer2 = setTimeout(() => {
      setShowContent2(true);
    }, delayTime2);

    const timer3 = setTimeout(() => {
      setShowContent3(true);
    }, delayTime3);

    // Cleanup the timers when the component unmounts
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleEmailClick = (a) => {
    window.location.href = `mailto:${a}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleLinkedInClick = (event) => {
    event.preventDefault();
    window.open(`https://www.linkedin.com/in/${linkedInId}`, '_blank');
  };

  return (
    <div className="screen">
      <Card className='showCard'>
        {showContent1 && (
          <CardContent>
            <Typography variant="h4">
              {name}
            </Typography>
          </CardContent>
        )}
        {showContent3 && (
          <CardContent >
            <Typography variant="h5" gutterBottom>
              Welcome to my portfolio
            </Typography>
            <Typography variant="body1" style={{ lineHeight: '1.6' }}>
              I am a 2nd-year Computer Science student. My passion lies in AI, Web Applications, and Game Development. I am proficient in a variety of technologies, including Java, JavaScript, React, and I am constantly expanding my skillset. Feel free to reach out for collaboration or any queries.
            </Typography>
          </CardContent>
        )}
        {showContent3 && (
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body1" style={{ lineHeight: '1.0' }}>
              <p>
                Phone: <a href={`tel:${phoneNumber}`} onClick={handlePhoneClick}>{phoneNumber}</a>
              </p>
              <p>
                Email: <a href={`mailto:${email}`} onClick={handleEmailClick(email)}>{email}</a>
              </p>
              <p>
              School mail: <a href={`mailto:${"jz346475@dal.ca"}`} onClick={handleEmailClick("jz346475@dal.ca")}>{"jz346475@dal.ca"}</a>
              </p>
              <p>
                LinkedIn: <a href={`https://www.linkedin.com/in/${linkedInId}`} onClick={handleLinkedInClick}>
                  {linkedInId}
                </a>
              </p>
            </Typography>
          </CardContent>
        )}
      </Card>
      <Card className='showImage'>
        {showContent2 && (
          <div>
            <img src={myImage} alt="Jazib Ahmad" />
          </div>

        )}
      </Card>
    </div >
  );
}

export default Home;
