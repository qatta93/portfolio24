import Spline from "@splinetool/react-spline";
import { Suspense } from "react";
import { SplineWrapper } from "./SplineModel.styled";

export const SplineModel = () => {
  return (
    <SplineWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/Nv6EEDCvUaJOaptd/scene.splinecode" />
      </Suspense>
    </SplineWrapper>
  );
};
