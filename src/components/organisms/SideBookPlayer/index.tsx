import Button from "components/atoms/Button";
import Form from "components/atoms/Form";
import Accordion from "components/molecules/Accordion";
import {
  IGraphQLBookAudio,
  useCreateBookAudioMutation,
} from "graphql/generated/graphql";
import { FC, FormEvent, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { concatMediaServer } from "utils/strings";

interface ISideBookPlayer extends IClassName {
  bookAudios: IGraphQLBookAudio[];
  bookPageID: number;
  fetchAudios: () => void;
}

const SideBookPlayer: FC<ISideBookPlayer> = ({
  bookAudios,
  className,
  bookPageID,
  fetchAudios,
}) => {
  const [audioBlob, setAudioBlob] = useState<File>();

  const onRecordStop = (blobUrl: string, blob: Blob): void => {
    const audioFile = new File([blob], "demo.wav", { type: "audio/wav" });
    setAudioBlob(audioFile);
  };

  const { status, startRecording, stopRecording } = useReactMediaRecorder({
    audio: true,
    onStop: onRecordStop,
  });
  const [createBookAudioMutation, result] = useCreateBookAudioMutation();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    createBookAudioMutation({
      variables: {
        input: {
          audio: audioBlob,
          bookPageID,
          cursorEnds: 100,
          cursorStarts: 1,
        },
      },
      onCompleted: () => {
        fetchAudios();
      },
    });
  };

  const recording = status === "recording";

  return (
    <div className={className}>
      <div className={className}>
        <Accordion title={"اضافه کردن صوت"} kind="primary">
          <Form
            onSubmit={onSubmit}
            className="flex flex-col"
            error={result.error?.message}
          >
            <div className="flex flex-row items-center mb-2">
              <span className="flex h-3 w-3 ml-2">
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500">
                  <span
                    className={`${
                      recording ? "animate-ping" : ""
                    } absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75`}
                  />
                </span>
              </span>
              <p>{recording ? "در حال ضبط" : "در انتظار ضبط"}</p>
            </div>
            <Button
              onClick={startRecording}
              type="button"
              name="شروع ضبط"
              kind="ghost"
              className="mb-2"
            />
            <Button
              onClick={stopRecording}
              type="button"
              name="پایان ضبط"
              kind="ghost"
              className="mb-2"
            />
            <Button
              type="submit"
              kind="positive"
              name="ثبت"
              disabled={!audioBlob}
            />
          </Form>
        </Accordion>
      </div>
      {bookAudios?.map((bookAudio) => {
        return (
          <Accordion
            title={
              <p>
                صوت از <strong>{bookAudio?.createdBy.displayName}</strong>
              </p>
            }
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
