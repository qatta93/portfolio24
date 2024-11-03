import { VerticalTimeline } from "react-vertical-timeline-component";
import styled from "styled-components";

export const StyledVerticalTimeline = styled(VerticalTimeline)`
  .vertical-timeline-element {
    margin: 1em 0 !important;
  }

  .vertical-timeline-element-content {
    padding: 13px !important;
    margin-bottom: 0 !important;

    &::before {
      top: 15px !important;
    }

    p,
    li {
      line-height: 20px;
      font-size: 14px;
      margin: 5px 0 !important;
    }

    p.vertical-timeline-element-subtitle {
      line-height: 15px !important;
      font-size: 13px !important;
    }

    ul {
      padding-left: 20px;
      margin-top: 8px !important;
      margin-bottom: 5px !important;
    }

    h4 {
      line-height: 15px !important;
      font-size: 14px !important;
      font-weight: 500;
      margin: 0 !important;
    }
  }

  .vertical-timeline-element-icon {
    width: 30px !important;
    height: 30px !important;
    margin-left: -15px !important;
    top: 15px !important;
  }

  @media only screen and (max-width: 1170px) {
    .vertical-timeline.vertical-timeline--two-columns {
      width: 70% !important;
    }

    .vertical-timeline-element-icon {
      margin-left: 5px !important;
    }

    .vertical-timeline-element-date {
      display: block !important;
      position: relative !important;
      top: auto !important;
      left: auto !important;
      right: auto !important;
      margin: 10px 0 0 0 !important;
      padding: 0 !important;
      text-align: left !important;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    p,
    li {
      line-height: 16px;
      font-size: 12px;
      margin: 5px 0 !important;
    }
  }
`;
