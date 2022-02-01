import { IconRounded } from "@ui-kit/ComponentTags";
import userIcon from "@assets/img/userIcon.png";
import { P, P2 } from "@ui-kit/TextTags";

export type UserShortType = {
  userThumbnail?: string;
  otherInfo?: string;
  fullName?: string;
};

export default function UserShortDetails({
  userThumbnail,
  otherInfo,
  fullName,
}: UserShortType) {
  return (
    <div className="flex">
      <IconRounded className="mr-6">
        <img
          alt="user-icon"
          src={userThumbnail || userIcon}
          className="full"
        />
      </IconRounded>
      <div className="flex justify-center flex-col mr-6">
        <P2>{fullName || "Okey Bakasi"}</P2>
        {otherInfo ? (
          <P
            className="text-left tagger"
            style={{ color: "#4F4F4F" }}
          >
            {otherInfo}
          </P>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
