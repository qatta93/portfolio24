import Spline from "@splinetool/react-spline";
import { Suspense } from "react";
import { SplineModelWrapper } from "./SplineModel.styled";

export const SplineModel = () => {
  return (
    <SplineModelWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/Nv6EEDCvUaJOaptd/scene.splinecode" />
      </Suspense>
    </SplineModelWrapper>
  );
};
