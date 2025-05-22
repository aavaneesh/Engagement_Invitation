import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const EngagementDate = new Date('2025-08-13T17:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = EngagementDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>

      <section id="hero" className="hero">
        <nav className="navbar">
        <ul>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="photos" smooth={true} duration={500}>Photos</Link></li>
          <li><Link to="rsvp" smooth={true} duration={500}>RSVP</Link></li>
        </ul>
      </nav>
        <h1>You're Invited to</h1>
        <h2>Our Engagement!</h2>
        <div>
          <ul className="countdown-timer">
            <li>
              <span className="days">{timeLeft.days}</span>
              <p className="days_text">Days</p>
            </li>
            <li className="separator">:</li>
            <li>
              <span className="hours">{timeLeft.hours}</span>
              <p className="hours_text">Hours</p>
            </li>
            <li className="separator">:</li>
            <li>
              <span className="minutes">{timeLeft.minutes}</span>
              <p className="minutes_text">Minutes</p>
            </li>
            <li className="separator">:</li>
            <li>
              <span className="seconds">{timeLeft.seconds}</span>
              <p className="seconds_text">Seconds</p>
            </li>
          </ul>
          <div className="spasi"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
