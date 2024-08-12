import { Merriweather, Open_Sans } from "next/font/google";

export const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-text",
});
export const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-title",
});
