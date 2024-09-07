import { Img } from "./..";
import React from "react";

export default function UserProfileImage({ userImage = "images/img_image_56_96x96.png", ...props }) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center sm:w-full border-solid rounded-lg`}>
      <Img src={userImage} alt="Product Image" className="h-[96px] w-full rounded-lg object-cover" />
    </div>
  );
}
