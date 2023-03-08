import { BasePageLayout as GaussianPageLayout } from "../components/UI/BasePageLayout";
import { Matrix } from "../components/gaussian/Matrix";

export const Gaussian = () => {
  return (
    <GaussianPageLayout title="gaussian elemination">
      <Matrix rows={3} cols={4} />
    </GaussianPageLayout>
  );
};
