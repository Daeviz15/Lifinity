import type { Metadata } from "next";
import {
  Poppins,
  Inter,
  Montserrat,
  Roboto,
  Open_Sans,
  Lato,
  Nunito,
  Work_Sans,
  DM_Sans,
  Space_Grotesk,
  Playfair_Display,
  Merriweather,
  Lora,
  Crimson_Text,
  Oswald,
  Raleway,
  Bebas_Neue,
  Archivo_Black,
} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

// Sans-Serif - Modern & Clean
export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700"],
});

export const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "600", "700"],
});

export const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

// Serif - Elegant & Classic
export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["300", "400", "700"],
});

export const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const crimson = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-crimson",
  weight: ["400", "600", "700"],
});

// Display/Heading - Bold & Impactful
export const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: ["400"],
});

export const archivo = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Metaverse Experience | Build Your Virtual World",
  description:
    "Create your stunning new metaverse world with immersive visuals and futuristic neon UI.",
  keywords: [
    "Metaverse",
    "Virtual Reality",
    "3D Experience",
    "Neon UI",
    "Next.js App",
  ],
  authors: [{ name: "Your Name" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${poppins.variable} 
        ${inter.variable} 
        ${montserrat.variable} 
        ${roboto.variable}
        ${openSans.variable}
        ${lato.variable}
        ${nunito.variable}
        ${workSans.variable}
        ${dmSans.variable}
        ${spaceGrotesk.variable}
        ${playfair.variable}
        ${merriweather.variable}
        ${lora.variable}
        ${crimson.variable}
        ${oswald.variable}
        ${raleway.variable}
        ${bebas.variable}
        ${archivo.variable}
      `}
    >
      <body className="antialiased mx-auto bg-[#000] m-0 p-0 ">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
