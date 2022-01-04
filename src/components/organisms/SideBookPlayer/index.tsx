import Accordion from "components/molecules/Accordion";
import { IGraphQLBookAudio } from "graphql/generated/graphql";
import { FC } from "react";
import { concatMediaServer } from "utils/strings";

interface ISideBookPlayer extends IClassName {
  bookAudios: IGraphQLBookAudio[];
}

const SideBookPlayer: FC<ISideBookPlayer> = ({ bookAudios, className }) => {
  return (
    <div className={className}>
      {bookAudios?.map((bookAudio) => {
        return (
          <Accordion
            title={bookAudio?.createdBy.displayName || ""}
            key={bookAudio.id}
          >
            <audio controls>
              <source src={concatMediaServer(bookAudio?.audio)} />
            </audio>
          </Accordion>
        );
      })}
    </div>
  );
};

export default SideBookPlayer;
