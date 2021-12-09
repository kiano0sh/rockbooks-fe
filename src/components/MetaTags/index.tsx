import { FC } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface IProps {
  title?: string;
}

const MetaTags: FC<IProps> = ({ title }): JSX.Element => (
  <HelmetProvider>
    <Helmet>
      <title>{(title && title + " | RockBooks") || "RockBooks"}</title>
    </Helmet>
  </HelmetProvider>
);

export default MetaTags;
