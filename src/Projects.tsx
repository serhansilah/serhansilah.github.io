import React from 'react';
import './Projects.scss';
import { ReactComponent as Github } from './resources/github.svg';
import { ReactComponent as Kaggle } from './resources/kaggle.svg';
import airbnb from './resources/airbnb.jpg';
import ice from './resources/kaggle.png';
import robot from './resources/robot.jpg';
import cycle from './resources/cycle.png';
import webapp from './resources/webapp.png';
import CSR from './resources/CSR-and-DCSR-formats.png';

const Projects = ({ switchMode }: any) => {
  const projects = [
    {
      title: 'Analysis and Prediction of Change in Airbnb Prices',
      description:
        'This project aims to find a correlation between burglary rates, income rates and Airbnb host prices in New York City.',
      icon: (
        <Kaggle
          className={`project-wrapper__icon project-wrapper__icon__${switchMode}`}
        />
      ),
      nav: 'https://www.kaggle.com/serhansilah/analysis-and-prediction-of-change-in-airbnb-prices',
      image: airbnb,
    },
    {
      title: 'News Application',
      description:
        'This application where we can categorize the news, learn the details of each news, read user comments, and comment on the news, takes the data from the news agency’s restful web service.',
      icon: (
        <Github
          className={`project-wrapper__icon project-wrapper__icon__${switchMode}`}
        />
      ),
      nav: 'https://github.com/serhansilah/NewsApplication',
      image: webapp,
    },
    {
      title: 'Prediction Job Satisfaction of Kaggle Members',
      description:
        'This project aims to predict job satisfaction of Kaggle Members.',
      icon: (
        <Kaggle
          className={`project-wrapper__icon project-wrapper__icon__${switchMode}`}
        />
      ),
      nav: 'https://www.kaggle.com/serhansilah/prediction-job-satisfaction-of-kaggle-members',
      image: ice,
    },
    {
      title: 'Robot Framework Test Cases For 3 Websites',
      description:
        'Robot Framework test cases are written for 3 websites: Amazon.com.tr, vk.com, sucourse.sabanciuniv.edu.',
      icon: (
        <Github
          className={`project-wrapper__icon project-wrapper__icon__${switchMode}`}
        />
      ),
      nav: 'https://github.com/serhansilah/robot_framework_test_cases',
      image: robot,
    },
    {
      title: 'Finding k-length Cycles with CUDA and OpenMP',
      description:
        'Implemented high-performance parallel code to find k-length cycles on a graph with CUDA and OpenMP.',
      icon: (
        <Github
          className={`project-wrapper__icon project-wrapper__icon__${switchMode}`}
        />
      ),
      nav: 'https://github.com/serhansilah/CS406-531-Project',
      image: cycle,
    },
    {
      title: 'Sinkhorn-Knopp Scaling',
      description:
        'Parallel code of Sinkhorn-Knopp Scaling by using OpenMP and CUDA.',
      icon: (
        <Github
          className={`project-wrapper__icon project-wrapper__icon__${switchMode}`}
        />
      ),
      nav: 'https://github.com/serhansilah/Sinkhorn_Knopp_Scaling',
      image: CSR,
    },
  ];
  return (
    <div className="project-wrapper">
      {projects.map((proj) => {
        return (
          <div
            style={
              switchMode === 'light'
                ? {
                    backgroundColor: '#424242',
                    borderRadius: '20px',
                    marginBottom: '40px',
                  }
                : {
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    marginBottom: '40px',
                  }
            }
          >
            <img
              className={`project-wrapper__img project-wrapper__img__${switchMode}`}
              src={proj.image}
              alt="project-img"
            />
            <div
              style={
                switchMode === 'light'
                  ? {
                      flexDirection: 'row',
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: '#424242',
                      borderRadius: '20px',
                    }
                  : {
                      flexDirection: 'row',
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: 'white',
                      borderRadius: '20px',
                    }
              }
            >
              <a
                href={proj.nav}
                target="_blank"
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  width: '70%',
                  fontSize: '25px',
                }}
                rel="noreferrer"
                className={`project-wrapper__text project-wrapper__text__${switchMode}`}
              >
                {proj.title}
              </a>
              <a
                style={
                  switchMode === 'light'
                    ? { backgroundColor: '#424242' }
                    : { backgroundColor: 'white' }
                }
                href={proj.nav}
                target="_blank"
                rel="noreferrer"
              >
                {proj.icon}
              </a>
            </div>
            <p
              className={`project-wrapper__text project-wrapper__text__${switchMode}`}
            >
              {proj.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
