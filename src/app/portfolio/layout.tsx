import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Portfolio - Abees Construction Calgary',
  description: 'Browse our extensive portfolio of home renovations in Calgary. View our kitchen remodels, bathroom renovations, basement developments, and custom carpentry projects.',
  openGraph: {
    title: 'Project Portfolio - Abees Construction Calgary',
    description: 'Explore our showcase of successful home renovation projects in Calgary. From kitchen transformations to complete basement developments.',
    images: ['/images/hero/gallery-img-9486.jpg'],
  },
  alternates: {
    canonical: '/portfolio',
  },
  keywords: 'renovation portfolio Calgary, kitchen remodel gallery, bathroom renovation photos, basement development projects, home renovation examples Calgary',
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
} 