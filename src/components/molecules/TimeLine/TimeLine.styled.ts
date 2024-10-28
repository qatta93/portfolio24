import { VerticalTimeline } from "react-vertical-timeline-component";
import styled from "styled-components";

export const StyledVerticalTimeline = styled(VerticalTimeline)`
  .vertical-timeline-element-content {
    ul li {
      line-height: 20px;
    }

    h4 {
      font-size: 14px;
      font-weight: 400;
    }
  }

  .vertical-timeline-element-icon {
    width: 30px !important;
    height: 30px !important;
    margin-left: -15px !important;
  }
  @media only screen and (min-width: 1170px) {
    .vertical-timeline.vertical-timeline--two-columns {
      width: 70% !important;
    }
  }
`;
