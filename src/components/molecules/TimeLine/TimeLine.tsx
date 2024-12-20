import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { StyledVerticalTimeline } from "./TimeLine.styled";
import { TimeLineType } from "./TimeLine.type";

export const TimeLine: TimeLineType = () => {
  return (
    <StyledVerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2023 - present"
        iconStyle={{ background: "rgba(179, 255, 182, 1)" }}>
        <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">{`Self Employed`}</h4>
        <p className="vertical-timeline-element-subtitle">Warsaw, Poland</p>
        <ul>
          <li>
            create web applications from scratch and enhance existing ones using
            React, Next.js, and Redux
          </li>
          <li>
            collaborate with PM, BE, QA and UX/UI teams to deliver
            user-centered, high-performance apps
          </li>
          <li>
            integrate B2C websites with headless CMS for easy content management
          </li>
          <li>
            actively participate in scrum meetings, including backlog refinement
            and sprint planning
          </li>
          <li>consider SEO practices to improve search engine visibility</li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2021 - 2023"
        iconStyle={{ background: "rgba(179, 255, 182, 1)" }}>
        <h3 className="vertical-timeline-element-title">
          Software Developer Consultant
        </h3>
        <h4 className="vertical-timeline-element-subtitle">{`SALT`}</h4>
        <p className="vertical-timeline-element-subtitle">
          Oslo, Norway (remote)
        </p>
        <ul>
          <li>identify and prioritize key frontend features for the MVP</li>
          <li>implement design mockups with Storybook</li>
          <li>
            use browser developer tools to diagnose frontend issues and optimize
            performance
          </li>
          <li>
            develop interactive elements with JavaScript and React to enhance
            user engagement through animations
          </li>
          <li>consume RESTful APIs to fetch dynamic content</li>
          <li>
            participate in UI design and prototyping to visualize and iterate on
            user interfaces for usability
          </li>
          <li>prioritize responsive design for a range of devices</li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2021-2022"
        iconStyle={{ background: "rgba(179, 255, 182, 1)" }}>
        <h3 className="vertical-timeline-element-title">
          Leadership training workshop
        </h3>
        <h4 className="vertical-timeline-element-subtitle">online</h4>
        <p>
          The entire program took 100 hours. It was divided into 5 practical
          modules: leader person, leadership communication, team leader,
          leadership tools and design tools. The course was designed to increase
          soft skills and working in a team.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2015 - 2021"
        iconStyle={{ background: "rgba(179, 255, 182, 1)" }}>
        <h3 className="vertical-timeline-element-title">
          Architect, Product Owner, Civil Engineer
        </h3>
        <p className="vertical-timeline-element-subtitle">
          Poland, Germany, New Zealand
        </p>
        <ul>
          <li>creating a brand of a company that sells prefabricated houses</li>
          <li>
            constantly devising automation solutions (for instance - an online
            configurator in order to help clients with cost estimation)
          </li>
          <li>
            creating a website from scratch - from logo, graphic design to
            programming (Adobe XD, HTML, CSS, JavaScript, React)
          </li>
          <li>collaborating with clients and multidisciplinary teams </li>
          <li>creating mockups and 3D models with an aesthetic sense</li>
          <li>thinking analytically and solving engineering problems</li>
          <li>working with multicultural and multidisciplinary teams</li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2013-2019"
        iconStyle={{ background: "rgba(179, 255, 182, 1)" }}>
        <h3 className="vertical-timeline-element-title">
          Bachelor of Civil Engineering
        </h3>
        <h3 className="vertical-timeline-element-title">
          Lublin University of Technology
        </h3>
        <p className="vertical-timeline-element-subtitle">Lublin, Poland</p>
        <p>
          During my studies I was a year-representative and I got a scholarship.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2012-2016"
        iconStyle={{ background: "rgba(179, 255, 182, 1)" }}>
        <h3 className="vertical-timeline-element-title">
          Bachelor of Landscape Architecture
        </h3>
        <h3 className="vertical-timeline-element-title">
          University of Life Sciences
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Lublin, Poland</h4>
      </VerticalTimelineElement>
    </StyledVerticalTimeline>
  );
};
