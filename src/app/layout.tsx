import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abees Construction - Calgary\'s Premier Renovation Experts',
  description: 'Calgary\'s trusted experts in home renovation, basement development, and custom carpentry. Professional construction services with 20+ years of experience. Free estimates for kitchen remodeling, bathroom renovation, and basement development.',
  keywords: 'construction Calgary, renovation Calgary, basement development Calgary, kitchen renovation Calgary, bathroom remodel Calgary, custom carpentry Calgary, home renovation contractor Calgary, home improvement Calgary, construction company Calgary, renovation services Calgary',
  metadataBase: new URL('https://abeesconstruction.com'),
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'Abees Construction' }],
  creator: 'Abees Construction',
  publisher: 'Abees Construction',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/icon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon/favicon.ico'],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon/safari-pinned-tab.svg',
        color: '#1e40af'
      }
    ],
  },
  openGraph: {
    title: 'Abees Construction - Calgary\'s Premier Renovation Experts',
    description: 'Expert home renovation and construction services in Calgary. Specializing in basement development, kitchen renovations, and custom carpentry. Get your free estimate today!',
    images: [
      {
        url: '/hero/renovation1.jpg',
        width: 1200,
        height: 630,
        alt: 'Abees Construction - Professional Home Renovation Services in Calgary',
      }
    ],
    type: 'website',
    locale: 'en_CA',
    siteName: 'Abees Construction',
    url: 'https://abeesconstruction.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abees Construction - Calgary\'s Premier Renovation Experts',
    description: 'Expert home renovation and construction services in Calgary. Transform your space with our professional team. Free estimates available!',
    images: ['/hero/renovation1.jpg'],
    site: '@abeesconstruction',
    creator: '@abeesconstruction',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'Construction',
  other: {
    'format-detection': 'telephone=yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'white',
    'apple-mobile-web-app-title': 'Abees Construction',
    'mobile-web-app-capable': 'yes',
    'application-name': 'Abees Construction',
    'msapplication-TileColor': '#ffffff',
    'msapplication-config': '/browserconfig.xml',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="robots" content="index, follow, max-image-preview:large"/>
        <meta name="format-detection" content="telephone=yes"/>
        <meta name="geo.region" content="CA-AB" />
        <meta name="geo.placename" content="Calgary" />
        <meta name="geo.position" content="51.167409;-114.157253" />
        <meta name="ICBM" content="51.167409, -114.157253" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Favicon configuration */}
        <link rel="icon" type="image/x-icon" href="/bee_logo_56x56.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/bee_logo_56x56.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/bee_logo_56x56.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/bee_logo_56x56.png" />
        <link rel="apple-touch-icon" href="/bee_logo_56x56.png" />
        <meta name="msapplication-TileImage" content="/bee_logo_56x56.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-5LMGHS4B8W"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-5LMGHS4B8W');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Script
          id="business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Abees Construction",
              "image": "https://abeesconstruction.com/bee_logo_56x56.png",
              "description": "Expert home renovation and construction services in Calgary. Specializing in basement development, kitchen renovations, and custom carpentry.",
              "@id": "https://abeesconstruction.com",
              "url": "https://abeesconstruction.com",
              "telephone": "+14039216590",
              "email": "saidabdulla@hotmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "24 Scandia Rise NW",
                "addressLocality": "Calgary",
                "addressRegion": "AB",
                "postalCode": "T3L 1T7",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 51.167409,
                "longitude": -114.157253
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "08:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "15:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/people/Abees-Construction-Services/100062113279446/",
                "https://www.instagram.com/abeesconstruction"
              ],
              "priceRange": "$$",
              "paymentAccepted": "Cash, Credit Card, Debit Card, Bank Transfer",
              "currenciesAccepted": "CAD",
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 51.167409,
                  "longitude": -114.157253
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Construction Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Basement Development",
                      "description": "Complete basement finishing and development services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Kitchen Renovation",
                      "description": "Full kitchen remodeling and renovation services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Bathroom Remodeling",
                      "description": "Complete bathroom renovation and upgrades"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Carpentry",
                      "description": "Custom woodwork and built-in solutions"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "89"
              },
              "keywords": "basement development, kitchen renovation, bathroom remodel, custom carpentry, home renovation Calgary, construction services Calgary",
              "slogan": "Transform Your Home With Expert Craftsmanship",
              "foundingDate": "2003",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "minValue": "5",
                "maxValue": "15"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 51.167409,
                  "longitude": -114.157253
                },
                "geoRadius": "50000"
              }
            })
          }}
        />
        {children}
        <Footer />
      </body>
    </html>
  )
}