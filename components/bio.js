const Bio = (props) => (
  <div className="bio">
    <div className="bio-desc">
      <p>
        Hello, my name is <br></br>
        <b className="bio-name">Koboh Kosaka</b><br></br>
        and I am a software engineer<br></br>
        located in Los Angeles, California.</p>
      <p>
        Working on several applications in an agile team environment, I have acquired solid web development, critical thinking, and effective communication experience. While keeping "learn new technologies" high on my priorities, I love to dig deep into what I can do with well established stacks, inching closer to mastery. I strive to code with efficiency, keeping in mind reusability and scalability.
      </p>
      <p>
        Working with other engineers, I have implemented several features for modular and scalable applications. I have a strong experience with the MERN stack, building several Restful APIs with the backend built in MongoDB, Express and Node.js and the frontend built in JavaScript and React. However, depending on the application and it's use case, I have implemented other tech stacks such as PostgreSQL, MySQL, supplemented React with Redux, applying cloud-based storage with AWS EC2, even implementing serverless architecture with Google Firebase.
      </p>
      <p>
        ‣ August, 2020 - Graduated from SEI bootcamp and now looking for a position to contribute to an organization and create new software.
      </p>
      <p>
        ‣ May, 2020 - Started software engineering bootcamp.
      </p>
      <p>
        ‣ February, 2020 - Departed my position as a Food Safety Manager and began devoting all of my time learning computer science fundamentals through online resources.
      </p>
      <p>
        ‣ June, 2018 - Graduated from University of California, Irvine with a BA in Economics.
      </p>
    </div>
    <button className='scroll-button' id="secondRef" onClick={props.scrollToRef}>cd</button>
  </div>
);

export default Bio;