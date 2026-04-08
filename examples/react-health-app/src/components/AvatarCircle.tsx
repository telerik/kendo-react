import { memo } from "react";
import { Avatar } from "@progress/kendo-react-layout";

interface AvatarCircleProps {
  name: string;
  image?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default memo(function AvatarCircle({
  name,
  image,
  size = "md",
  className,
}: Readonly<AvatarCircleProps>) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const avatarClassName = ["avatar-circle", "avatar-circle-" + size, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Avatar
      type={image ? "image" : "text"}
      rounded="full"
      className={avatarClassName}
    >
      {image ? <img src={image} alt={name} loading="lazy" /> : initials}
    </Avatar>
  );
});
