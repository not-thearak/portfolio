import React from 'react';
import './Hero.css';
import heroImage from '../assets/profile-hero.jpg';

const Hero = () => {
  return (
    <section className="hero-section ">
      <div
        className="hero-bg-text"
        data-animate="fade-up"
        style={{ '--animate-delay': '0.05s' }}
      >
        PORTFOLIO
      </div>

      <div className="hero-content">
        <div
          className="hero-left container"
          data-animate="fade-right"
          style={{ '--animate-delay': '0.1s' }}
        >
          <p className="cursive-text">Hello, I'm</p>
          <h1 className="hero-name">
            SOTHEARAK
            <br />
            BUN
          </h1>
          <h3 className="hero-role">
            Software &<br />
            <span className="accent-text">Developer</span>
          </h3>
          <p className="hero-desc">
            I am a passionate software developer with a strong foundation in
            computer science. I specialize in creating innovative and efficient
            solutions that drive results. My goal is to turn ideas into powerful
            digital experiences.
          </p>
          <div className="availability">
            <span className="dot"></span> Available for Internship
          </div>
        </div>

        <div
          className="hero-center"
          data-animate="zoom-in"
          style={{ '--animate-delay': '0.15s' }}
        >
          {/* Note: In a real project, this would be a transparent PNG of the person */}
          <img
          // src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop'
            // src="https://scontent.fpnh10-1.fna.fbcdn.net/v/t39.30808-6/627465091_2099235664184643_948556413980685940_n.jpg?stp=dst-jpg_tt6&cstp=mx960x958&ctp=s960x958&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=h1nmBdrVMGkQ7kNvwH-38aa&_nc_oc=AdpHuJNaIM_UdljbQDW2mCWEPnSQX4P4SncUrah4NlDj-caQzGETFFAew6f8MvL5wZ8&_nc_zt=23&_nc_ht=scontent.fpnh10-1.fna&_nc_gid=SsFL0G7T0nntPRi-egNr_A&_nc_ss=7b2a8&oh=00_AQNqq9ZGhvHYzYP8jzFgwKihAKXYvL_-itEAaXoGocQGuQ&oe=6AC52248"
            src={heroImage}
            alt="Sotherak Bun"
            className="hero-image"
          />
        </div>

        <div
          className="hero-right container"
          data-animate="fade-left"
          style={{ '--animate-delay': '0.2s' }}
        >
          <div className="hero-quote">
            <span className="star">✦</span>
            <p>Turning ideas into powerful digital experiences.</p>
          </div>

          <div className="stats-container stagger">
            <div className="stat-item stagger-item">
              <h2>
                4<span className="accent-text"></span>
              </h2>
              <p>
                Years
                <br />
                Software Development Student at
                <br />
                <span className="accent-text ">NORTON University</span>
              </p>
            </div>
            <div className="stat-item stagger-item">
              <h2>
                4<span className="accent-text">+</span>
              </h2>
              <p>
                Projects
                <br />
                Completed
              </p>
            </div>
            {/* <div className="stat-item stagger-item">
              <h2>
                20<span className="accent-text">+</span>
              </h2>
              <p>
                Happy
                <br />
                Clients
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
