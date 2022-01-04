import Button from "components/atoms/Button";
import Card from "components/atoms/Card";
import { FC, useState } from "react";

interface IAccordion extends IClassName {
  title: string;
}

const Accordion: FC<IAccordion> = ({ title, className = "", children }) => {
  const [contentDisplay, setContentDisplay] = useState<"hidden" | "block">(
    "hidden"
  );
  return (
    <>
      <Button
        onClick={() => {
          setContentDisplay((prevState) =>
            prevState === "hidden" ? "block" : "hidden"
          );
        }}
        name={title}
        kind="positive"
        className="w-full transition outline-none p-4"
      />
      <Card className={`px-4 hidden overflow-hidden ${contentDisplay}`}>
        {children}
      </Card>
    </>
  );
};

export default Accordion;
