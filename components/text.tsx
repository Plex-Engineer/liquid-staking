import { Space_Grotesk, Inter } from "next/font/google";

interface Props {
  font?: "Space_Grotesk" | "Inter";
  weight?: "400" | "500" | "600" | "700";
  size?: "sm" | "md" | "lg";
  align?: "left" | "center" | "right";
  children?: React.ReactNode;
}
const spaceGrotesk = Space_Grotesk({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});
const Text = (props: Props) => {
  return (
    <p
      className={
        props.font == "Inter" ? inter.className : spaceGrotesk.className
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
