import React from 'react';
import About from '@/components/About';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `About - ${process.env.SITE_NAME}`,
  description: `This is About page for ${process.env.SITE_NAME}`,
  // other discriptions
};

const AboutPage = () => {
  return (
    <main>
      <About />
    </main>
  );
};

export default AboutPage;
