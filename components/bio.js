const Bio = (props) => (
  <div className="bio">
    <h1>
    a little about me
    </h1>
    <div className="bio-desc">
      <p>
        Hello, my name is <br></br>
        <b className="bio-name">Koboh Kosaka</b><br></br>
        and I am a software engineer<br></br>
        located in Los Angeles, California.</p>
      <p>
        Whether it's building websites, phone applications, or intricate algorithms, I enjoy collaborating with other engineers and solving difficult problems. Considering the resources I have at hand, I enjoy taking on challenges from different angles to improve on efficiency. I am intrigued by new technologies and wonder about the next steps I can take in building a better self and a better future.
      </p>
      <p>
        As of August 2020, I am currently looking for a position to contribute to an organization and create new software.
      </p>
    </div>
    <button className='scroll-button' id="secondRef" onClick={props.scrollToRef}>cd</button>
  </div>
);

export default Bio;