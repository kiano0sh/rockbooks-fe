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
    <div className={`w-full ${className}`}>
      <Button
        onClick={() => {
          setContentDisplay((prevState) =>
            prevState === "hidden" ? "block" : "hidden"
          );
        }}
        name={
          <p>
            صوت از <strong>{title}</strong>
          </p>
        }
        kind="positive"
        className="w-96 transition outline-none p-4 h-12 text-right mb-1"
      />
      <Card className={`px-4 w-96 overflow-hidden mb-1 ${contentDisplay}`}>
        {children}
      </Card>
    </div>
  );
};

export default Accordion;
