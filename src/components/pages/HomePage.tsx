import MetaTags from "components/atoms/MetaTags";
import Home from "components/templates/Home";
import { FC } from "react";

const HomePage: FC = () => {
  return (
    <>
      <MetaTags title={"خانه"} />
      <Home />
    </>
  );
};

export default HomePage;
