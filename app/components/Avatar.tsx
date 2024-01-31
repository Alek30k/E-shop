import Image from "next/image";

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar = ({ src }: AvatarProps) => {
  if (src) {
    <Image
      src={src}
      alt="Avatar"
      className="rounded-full"
      width="30"
      height="30"
    />;
  }

  return <div></div>;
};

export default Avatar;
