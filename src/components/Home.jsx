function Home(){
    return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Experience the Future of Web Development</h1>
        <p>
          Discover a new era of web development that combines cutting-edge
          technology with intuitive design. Whether you're a seasoned developer
          or just starting out, our platform offers the tools and resources you
          need to build fast, responsive, and future-ready websites.
        </p>
        <a href="#about"><button>DIVE INTO IT</button></a>
      </div>
      <video loop autoPlay={true} muted>
        <source src="./ws101_react_landingpage/3141210-uhd_3840_2160_25fps.mp4" type="video/mp4" />
      </video>
    </section>)
}

export default Home;
