import React, { useState, useEffect } from 'react';
import './Tabs.scss';
import resumeLink from './resources/cv.pdf';
import { ReactComponent as Home } from './resources/home.svg';
import { ReactComponent as Project } from './resources/projects.svg';
import { ReactComponent as Resume } from './resources/resume.svg';
import { ReactComponent as Github } from './resources/github.svg';
import { ReactComponent as Linkedin } from './resources/linkedin.svg';
import { ReactComponent as Email } from './resources/email.svg';
import { ReactComponent as Switch } from './resources/switch.svg';
import Card from './Card';
import Projects from './Projects';
import profile from './resources/profile.jpg';

const Tabs = () => {
  const [switchMode, setSwitchMode] = useState('dark');
  const tabs = [
    {
      title: 'About',
      icon: (
        <Home
          className={`tabs-wrapper__icon tabs-wrapper__icon__${switchMode}`}
        />
      ),
      nav: '#about',
      body: 'Card',
      newpage: false,
    },
    {
      title: 'Projects',
      icon: (
        <Project
          className={`tabs-wrapper__icon tabs-wrapper__icon__${switchMode}`}
        />
      ),
      nav: '#projects',
      body: 'Projects',
      newpage: false,
    },
    {
      title: 'Resume',
      icon: (
        <Resume
          className={`tabs-wrapper__icon tabs-wrapper__icon__${switchMode}`}
        />
      ),
      nav: resumeLink,
      body: 'Card',
      newpage: true,
    },
  ];
  const contact = [
    {
      title: 'Github',
      icon: (
        <Github
          className={`tabs-wrapper__icon tabs-wrapper__icon__${switchMode}`}
        />
      ),
      nav: 'https://github.com/serhansilah',
    },
    {
      title: 'Linkedin',
      icon: (
        <Linkedin
          className={`tabs-wrapper__icon tabs-wrapper__icon__${switchMode}`}
        />
      ),
      nav: 'https://www.linkedin.com/in/serhansilahyurekli/',
    },
    {
      title: 'Email',
      icon: (
        <Email
          className={`tabs-wrapper__icon tabs-wrapper__icon__${switchMode}`}
        />
      ),
      nav: 'mailto:serhansilahyurekli@gmail.com',
    },
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[0].body);

  return (
    <body style={{ width: '100%', height: '%100' }}>
      <div className={'tabs-wrapper'}>
        <img
          alt="avatar"
          className={`tabs-wrapper__avatar tabs-wrapper__avatar__${switchMode}`}
          src={profile}
        />
        <p className={`tabs-wrapper__name tabs-wrapper__name__${switchMode}`}>
          Serhan Silahyürekli
        </p>
        <p className={`tabs-wrapper__job tabs-wrapper__job__${switchMode}`}>
          Software Engineer at Trendyol
        </p>
        <span>
          {contact.map((tab) => {
            return (
              <a href={tab.nav} target="_blank" rel="noreferrer">
                {tab.icon}
              </a>
            );
          })}
        </span>
        {tabs.map((tab) => {
          return (
            <span style={{ display: 'flex' }}>
              <a
                onClick={() => {
                  setSelectedTab(tab.body);
                }}
                href={tab.nav}
                target={tab.newpage ? '_blank' : '_self'}
                rel="noreferrer"
              >
                {tab.icon}
              </a>
              <a
                onClick={() => {
                  setSelectedTab(tab.body);
                }}
                href={tab.nav}
                target={tab.newpage ? '_blank' : '_self'}
                className={`tabs-wrapper__text tabs-wrapper__text__${switchMode}`}
                rel="noreferrer"
              >
                {tab.title}
              </a>
            </span>
          );
        })}
        {switchMode === 'dark' ? (
          <span
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <a
              onClick={() => {
                setSwitchMode('light');
                document.body.setAttribute('style', 'background: #303030;');
              }}
            >
              <Switch className="tabs-wrapper__icon tabs-wrapper__icon__dark" />
            </a>
            <a className="tabs-wrapper__text tabs-wrapper__text__dark">
              Light Mode
            </a>
          </span>
        ) : (
          <span
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <a
              onClick={() => {
                setSwitchMode('dark');
                document.body.setAttribute('style', 'background:#F5F5FA');
              }}
            >
              <Switch
                style={{
                  transform: 'rotateY(180deg)',
                }}
                className="tabs-wrapper__icon tabs-wrapper__icon__light"
              />
            </a>
            <a className="tabs-wrapper__text tabs-wrapper__text__light">
              Dark Mode
            </a>
          </span>
        )}
      </div>
      <div>
        {selectedTab === 'Card' ? (
          <Card switchMode={switchMode} />
        ) : (
          <Projects switchMode={switchMode} />
        )}
      </div>
    </body>
  );
};

export default Tabs;
