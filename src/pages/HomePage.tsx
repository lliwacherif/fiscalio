import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col">
            <Hero />
            <HowItWorks />
            <Pricing />
        </div>
    );
};

export default HomePage;
