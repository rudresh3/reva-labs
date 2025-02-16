import "./globals.css";
import Providers from "./providers";
import ThemeSwitcher from "./ThemeSwitcher";
import { Space_Grotesk, Space_Mono } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'auto',
  weight: ['300', '400', '500','600', '700'],
  style: ['normal'],
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

export const metadata = {
  metadataBase: new URL('https://revalabs.in'),
  title: "Reva Labs | Web Development, UI/UX Design, App Development & Branding",
  description: "Reva Labs - A creative digital agency specializing in web development, UI/UX design, mobile app development, and branding solutions. Transform your digital presence with our innovative designs and cutting-edge development services.",
  keywords: "Reva Labs , web development, UI/UX design, app development, branding, digital agency, website design, mobile apps, brand identity, user experience, user interface design, digital marketing, responsive design, custom web development, mobile-first design",
  authors: [{ name: 'Reva Labs Team' }],
  generator: 'Next.js',
  applicationName: 'Reva Labs',
  referrer: 'origin-when-cross-origin',
  creator: 'Reva Labs',
  publisher: 'Reva Labs',
  formatDetection: {
    email: 'hello@revalabs.in',
    address: '#2 53/1 50 Feet Road Chowdeshwari Nagar Laggere Bengaluru 560058',
    telephone: +918553393366,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Reva Labs | Digital Design & Development Agency",
    description: "Transform your digital presence with Reva Labs. Expert web development, UI/UX design, app development, and branding solutions.",
    url: 'https://studionexa.in',
    siteName: 'Reva Labs',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Reva Labs - Digital Agency',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Reva Labs | Digital Design & Development Agency',
    description: 'Transform your digital presence with Reva Labs. Expert web development, UI/UX design, app development, and branding solutions.',
    creator: '@revalabs.in',
    images: ['https://www.revalabs.in/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
    ],
    other: [
      { rel: 'apple-touch-icon-precomposed', url: '/apple-touch-icon-precomposed.png' },
    ],
  },
  manifest: '/manifest.json',
  verification: {
    google: 'verification_token',
    yandex: 'yandex_verification_token',
    bing: 'bing_verification_token',
    yahoo: 'yahoo_verification_token',
  },
  category: 'technology',
  other: {
    'facebook-domain-verification': 'facebook_domain_verification_token',
    'theme-color': '#ffffff',
    'msapplication-TileColor': '#fff',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.className} ${spaceMono.variable}`}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
