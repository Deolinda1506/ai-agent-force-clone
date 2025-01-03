import Hero from '../components/Hero';
import BusinessBenefits from '../components/BusinessBenefits';
import ROICalculator from '../components/ROICalculator';
import FAQ from '../components/FAQ';

const HomePage = () => {
  return (
    <main className="pt-16">
      <Hero />
      <div id="business-benefits">
        <BusinessBenefits />
      </div>
      <div id="roi">
        <ROICalculator />
      </div>
      <div id="faq">
        <FAQ />
      </div>
    </main>
  );
};

export default HomePage;
