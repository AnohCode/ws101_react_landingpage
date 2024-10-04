function About(){
    return(
        <section className="about" id="about">
      <div className="about-content">
        <h1>The Importance of Web Development</h1>
        <p>
          Web development is the process of creating websites that allow users
          to view and interact with content over the Internet.
        </p>
        <ul>
          <li>
            <strong> Economic Impact:</strong> Web development drives economic
            growth by creating jobs, supporting e-commerce, and enabling digital
            innovation.
          </li>
          <li>
            <strong>Innovation and Creativity:</strong> Web developers
            constantly push the boundaries of technology, creating new ways for
            users to interact with content, whether through innovative designs,
            applications, or interactive features.
          </li>
          <li>
            <strong>Accessibility and Reach:</strong>
            Websites allow people to access information, products, and services
            24/7, breaking down geographical barriers and enabling global reach.
          </li>
          <li>
            <strong>Education and Information Sharing:</strong>
            The web is a vast resource for learning, sharing knowledge, and
            fostering collaboration across various fields and industries.
          </li>
          <li>
            <strong>Data Collection and Analysis:</strong>
            Websites are key platforms for collecting user data, which can be
            analyzed to improve services, target marketing efforts, and make
            informed business decisions.
          </li>
        </ul>
      </div>
      <video controls loop autoPlay={true} muted>
        <source src="./ws101_react_landingpage/aboutvideo.mp4" type="video/mp4" />
      </video>
    </section>
    )
}

export default About;