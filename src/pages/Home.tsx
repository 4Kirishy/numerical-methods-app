import { BasePageLayout as HomePageLayout } from "../components/UI/BasePageLayout";
import { Methods } from "../components/methods/Methods";

export const Home = () => {
  const methods = [
    {
      title: "gaussian elimination",
      path: "gaussian",
    },
  ];

  return (
    <HomePageLayout title="all available numerical methods">
      <Methods methods={methods} />
    </HomePageLayout>
  );
};
