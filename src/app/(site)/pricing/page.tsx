import React from 'react';
import Pricing from '@/components/Pricing';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Pricing - ${process.env.SITE_NAME}`,
  description: `This is Pricing page for ${process.env.SITE_NAME}`,
  // other discriptions
};

const PricingPage = () => {
  return (
    <main>
      <Pricing />
    </main>
  );
};

export default PricingPage;
