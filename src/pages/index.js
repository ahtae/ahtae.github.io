import React from 'react';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import profilePicture from '../assets/images/profilepic.jpg';
import BootStrapIcon from '../assets/icons/Bootstrap.png';
import CSSIcon from '../assets/icons/CSS.png';
import ExpressIcon from '../assets/icons/Express.png';
import HTMLIcon from '../assets/icons/HTML.png';
import NodeIcon from '../assets/icons/Node.png';
import PostgresSQLIcon from '../assets/icons/PostgresSQL.png';
import ReactIcon from '../assets/icons/React.png';
import ReduxIcon from '../assets/icons/Redux.png';
import SequelizeIcon from '../assets/icons/Sequelize.png';
import BOSSProject from '../assets/images/B.O.S.S.jpeg';
import bluebirdProject from '../assets/images/bluebird.png';
import PoGoRaidProject from '../assets/images/PoGoRaid.png';
import pokepediaProject from '../assets/images/pokepedia.png';

import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="about">
              <a
                href="#about"
                className="button primary"
                style={{ backgroundColor: '#2e3842' }}
              >
                About
              </a>
            </Scroll>{' '}
            <Scroll type="id" element="skills">
              <a
                href="#skills"
                className="button primary"
                style={{ backgroundColor: '#2e3842' }}
              >
                Skills
              </a>
            </Scroll>{' '}
            <Scroll type="id" element="projects">
              <a
                href="#projects"
                className="button primary"
                style={{ backgroundColor: '#2e3842' }}
              >
                Projects
              </a>
            </Scroll>{' '}
          </li>
        </ul>
      </div>
      <Scroll type="id" element="about">
        <a href="#about" className="more"></a>
      </Scroll>
    </section>

    <section
      id="about"
      className="wrapper style1 special"
      style={{ backgroundColor: '#fdc6c9' }}
    >
      <div className="inner">
        <header className="major">
          <h2>
            About Me
            <br />
          </h2>
          <div>
            <img
              src={profilePicture}
              style={{ width: '280px', borderRadius: '50%' }}
              alt="profile picture"
            />
          </div>
          <br />
          <p style={{ color: 'white' }}>
            I am an ambitious software engineer that believes in continuous
            learning and loves problem solving, challenges, and thinking outside
            of the box. After graduating John Jay College with a Bachelor’s in
            Computer Science, I wanted to create a Taishanese web application
            and a mobile application. While learning the various technologies
            involved and enjoying the process, I realized my passion for web
            development. This made me want to apply to FullStack Academy, where
            I learned various technologies such as React, Redux, Thunk,
            PostGreSQL, and more. Now, I am ready to start the next chapter of
            my career as a software engineer. During my free time, though, I
            enjoy tinkering with projects, watching documentaries, playing
            Tetris, and tending my succulents.
            <br />
          </p>
          <div>
            <a
              href="https://drive.google.com/file/d/1LoICpyZHPFVFk-2AbSscEvmC0fbVyfOn/view?usp=sharing"
              style={{
                color: 'white',
                fontWeight: 'bold',
                textDecoration: 'underline',
              }}
            >
              Click here to view my resume
            </a>
          </div>
        </header>
      </div>
    </section>
    <section
      id="skills"
      className="wrapper style1 special"
      style={{ backgroundColor: '#6f83a4' }}
    >
      <div className="inner">
        <header className="major">
          <h2>
            Skills
            <br />
          </h2>

          <div
            style={{
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              paddingLeft: '100px',
            }}
          >
            <li>
              <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                Proficient
              </span>
              : JavaScript, Node.js, Express, Git, HTML, CSS, React, Redux,
              React-Redux, Sequelize
            </li>
            <li>
              <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                {' '}
                Knowledgeable
              </span>
              : PostgreSQL, Ruby, Python, Mocha, Chai, SQL, React Native,
              MongoDB, Mongoose, Heroku, jQuery
            </li>
            <li>
              <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                {' '}
                Some Familiarity
              </span>
              : C++, Java, Perl, Solidity
            </li>
          </div>
          <br />
          <br />
          <div id="technologies-container">
            <img
              className="technology-icon"
              src={BootStrapIcon}
              alt="Bootstrap"
            />
            <img className="technology-icon" src={CSSIcon} alt="CSS" />
            <img className="technology-icon" src={ExpressIcon} alt="Express" />
            <img className="technology-icon" src={HTMLIcon} alt="HTML" />
            <img className="technology-icon" src={NodeIcon} alt="Node" />
            <img
              className="technology-icon"
              src={PostgresSQLIcon}
              alt="PostgresSQL"
            />
            <img className="technology-icon" src={ReactIcon} alt="React" />
            <img className="technology-icon" src={ReduxIcon} alt="Redux" />
            <img
              className="technology-icon"
              src={SequelizeIcon}
              alt="Sequelize"
            />
          </div>
          <br />
        </header>
      </div>
    </section>
    <section
      id="projects"
      className="wrapper style3 special"
      style={{ backgroundColor: '#bf95b1' }}
    >
      <div className="inner">
        <header className="major">
          <h2>Projects</h2>
        </header>
        <ul className="features">
          <li className="icon fa-building" style={{ color: '#2e3842' }}>
            <div
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                overflow: 'hidden',
              }}
            >
              <h3>B.O.S.S.</h3>
              <p>
                A React Native application that allows users to browse and
                search for black-owned businesses they can support.
              </p>
              <img
                src={BOSSProject}
                width="200"
                height="300"
                style={{ border: '2px solid rgba(144,144,144,0.5)' }}
              />
              <br />
              <a
                href="https://github.com/ahtae/B.O.S.S"
                className="icon brands fa-github"
              >
                <span className="label">Github</span>
              </a>
            </div>
          </li>
          <li className="icon solid fa-list" style={{ color: '#2e3842' }}>
            <div
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                overflow: 'hidden',
              }}
            >
              <h3>PoGo Raid</h3>
              <p>
                Pogo Raid is a chat application that allows people in the
                Pokemon Go community to communicate conveniently. It was built
                using React, Sequelize, Apollo GraphQL, and PostGreSQL.
              </p>
              <img
                src={PoGoRaidProject}
                width="300"
                height="200"
                style={{ border: '2px solid rgba(144,144,144,0.5)' }}
              />
              <br />
              <a
                href="https://github.com/ahtae/PoGo-Raid"
                className="icon brands fa-github"
              >
                <span className="label">Github</span>
              </a>
            </div>
          </li>
          <li
            className="icon solid fa-calendar-week"
            style={{ color: '#2e3842' }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                overflow: 'hidden',
              }}
            >
              <h3>pokepedia</h3>
              <p>
                pokepedia is a single page application that provides information
                about various species of Pokémon by using GraphQL Pokémon. It
                was built using Apollo GraphQL, React, Material UI, and React
                Bootstrap.
              </p>
              <img
                src={pokepediaProject}
                width="350"
                height="200"
                style={{ border: '2px solid rgba(144,144,144,0.5)' }}
              />
              <br />
              <a
                href="https://github.com/ahtae/pokepedia"
                className="icon brands fa-github"
              >
                <span className="label">Github</span>
              </a>
              <a
                href="https://github.com/ahtae/pokepedia"
                className="icon brands fa-heroku"
              >
                <span className="label">Heroku</span>
              </a>
            </div>
          </li>

          <li
            className="icon solid fa-user-friends"
            style={{
              color: '#2e3842',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                overflow: 'hidden',
              }}
            >
              <h3>bluebird</h3>
              <p>
                bluebird is a social networking website that allows people to
                meet new people and form connections. It was built using the
                MERN stack.
              </p>
              <img
                src={bluebirdProject}
                width="350"
                height="200"
                style={{
                  display: 'inline-block',
                  border: '2px solid rgba(144,144,144,0.5)',
                }}
              />
              <br />
              <a
                href="https://github.com/ahtae/bluebird"
                className="icon brands fa-github"
              >
                <span className="label">Github</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Let's chat!</h2>
          <p>
            Thanks for visiting my website! Feel free to connect with me on
            LinkedIn or send me an e-mail.
          </p>
        </header>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
