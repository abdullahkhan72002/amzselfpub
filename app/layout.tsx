import type { Metadata } from "next";
import { Arima, Inter, Plus_Jakarta_Sans, Poppins, Tinos } from "next/font/google";
import { ConsultationProvider } from "@/components/consultation";
import { PpcCapture } from "@/components/ppc-capture";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const arima = Arima({
  subsets: ["latin"],
  variable: "--font-arima",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const tinos = Tinos({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--ff-tinos",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "600"],
  variable: "--ff-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--ff-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Best Book Publishers for Self-Publishing Success",
  description:
    "AMZSelfPub helps authors write, publish, and promote their books with expert guidance from manuscript to marketing.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${arima.variable} ${poppins.variable} ${tinos.variable} ${jakarta.variable} ${inter.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NQKMQLW9');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Start of brandwebsite-f Zendesk Widget script */}
        <script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=0b5af1dd-8595-46bb-99da-eb913ca386ce"
        />
        {/* End of brandwebsite-f Zendesk Widget script */}
      </head>
      <body className="min-h-full max-w-full overflow-x-clip bg-white antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NQKMQLW9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ConsultationProvider>
          <PpcCapture />
          <SiteHeader />
          <div className="max-w-full overflow-x-clip">{children}</div>
          <SiteFooter />
        </ConsultationProvider>
      </body>
    </html>
  );
}
