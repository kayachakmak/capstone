import Image from "next/image";

export default function Banner() {
  return (
    <div className="bg-banner flex justify-center items-center  lg:max-2xl:h-26">
      <Image
        className="w-full lg:max-2xl:h-26 "
        src="https://i.ibb.co/YBpQRrj/Capture.png"
        alt="Gourmet Berlin Banner"
        width={1090}
        height={100}
      />
    </div>
  );
}
