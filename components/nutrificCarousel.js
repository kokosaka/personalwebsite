import Link from 'next/link';
import Social from './social';
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import nutrificSignup from '../public/nutrific/nutrific-signup.png';
import nutrificSaveToJournal from '../public/nutrific/nutrific-savetojournal.png';
import nutrificProfile from '../public/nutrific/nutrific-profile.png';
import nutrificLookUp from '../public/nutrific/nutrific-lookup.png';
import nutrificJournal from '../public/nutrific/nutrific-journal.png';
import nutrificHome from '../public/nutrific/nutrific-home.png';
import nutrificDailyJournal from '../public/nutrific/nutrific-dailyjournal.png';
import nutrificAddOwn from '../public/nutrific/nutrific-addown.png';
// import nutrific from '';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item>
        <img
          className="d-block w-40 center"
          src={nutrificSignup}
          alt="Sign In"
        />
        <Carousel.Caption>
          <h3>Sign Up/In Screen</h3>
          <p>Sign up or Sign in using your email and password; stored in Firebase.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-40 center"
          src={nutrificProfile}
          alt="Profile"
        />
        <Carousel.Caption>
          <h3>Profile Screen</h3>
          <p>Set up your profile and enter your physical information. The application will calculate your BMI, BMR, calorie expenditure and your daily caloric need based on your goal weight.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-40 center"
          src={nutrificLookUp}
          alt="Sign In"
        />
        <Carousel.Caption>
          <h3>Quickly Look Up Foods</h3>
          <p>Using the search feature, quickly look up foods and their nutrition facts that you ate during the day.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-40 center"
          src={nutrificSaveToJournal}
          alt="Sign In"
        />
        <Carousel.Caption>
          <h3>Save Foods To Journal</h3>
          <p>Once you have found the food you ate, save it to your journal.</p>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item>
        <img
          className="d-block w-40 center"
          src={nutrificJournal}
          alt="Sign In"
        />
        <Carousel.Caption>
          <h3>Journal</h3>
          <p>The journal will list all the foods you have entered into a specific date; allowing you to see how many calories of what foods you ate.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* <Carousel.Item>
        <img
          className="d-block w-40 center"
          src={nutrificDailyJournal}
          alt="Sign In"
        />
        <Carousel.Caption>
          <h3>Sign Up/In BLEH</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      <Carousel.Item>
        <img
          className="d-block w-40 center"
          src={nutrificAddOwn}
          alt="Sign In"
        />
        <Carousel.Caption>
          <h3>Add Your Own Foods</h3>
          <p>Add your own foods and approximate calories if you could not find it in the search.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-40 center"
          src={nutrificHome}
          alt="Sign In"
        />
        <Carousel.Caption>
          <h3>Home</h3>
          <p>Track how many more calories you need to fulfill your daily goal.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default ControlledCarousel;