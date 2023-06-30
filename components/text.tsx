import { Inter } from "next/font/google";
import localFont from "next/font/local";

interface Props {
  font?: "Video_Type" | "Inter";
  weight?: "400" | "500" | "600" | "700";
  size?: "sm" | "md" | "lg";
  align?: "left" | "center" | "right";
  children?: React.ReactNode;
}

const videoType = localFont({
  src: "../fonts/videotype.ttf",
  weight: "300",
  style: "normal",
});
const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});
const Text = (props: Props) => {
  return (
    <p
      className={
        props.font == "Video_Type" ? videoType.className : inter.className
      }
      style={{
        fontSize:
          props.size == "sm" ? "12px" : props.size == "md" ? "16px" : "34px",
        fontWeight: props.weight,
        textAlign: props.align,
      }}
    >
      {props.children}
    </p>
  );
};

export default Text;
