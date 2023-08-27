import React, { useEffect } from "react";

import "./Home.css";

import { Layout } from "../../component/Layout";
import { Card } from "../../component/card/Card";
import { Card2 } from "../../component/card/Card2";
import { mentor_data, college_data } from "../../component/menu-list";

export const Home = () => {
  return (
    <Layout>
      <div className="home-container">
        <h1>
          Learn from Scientist,reasearch scholar from top institute of the world
        </h1>
        <div className="sub-home-container">
          {college_data.map((data, index) => {
            return (
              <Card
                image={data.img}
                title={data.title}
                subtitle={data.subtitle}
                info={data.info}
                dimension="380px"
                key={index}
              />
            );
          })}
        </div>
        <div className="mentors">
          <h1>Meet your Mentors</h1>
          <div className="mentors-detail">
            {mentor_data.map((data, index) => {
              return (
                <Card2
                  image={data.img}
                  title={data.title}
                  subtitle={data.subtitle}
                  info={data.info}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <div className="mentors">
          <h1>Mentors and Advisors</h1>
          <div className="mentors-detail">
            {mentor_data.map((data, index) => {
              return (
                <Card2
                  image={data.img}
                  title={data.title}
                  subtitle={data.subtitle}
                  info={data.info}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};
