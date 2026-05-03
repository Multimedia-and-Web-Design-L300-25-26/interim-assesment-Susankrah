import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CoinbaseOne from './components/CoinbaseOne';
import BaseApp from './components/BaseApp';
import MarketData from './components/MarketData';
import CryptoBasics from './components/CryptoBasics';
import CTA from './components/CTA';
import LegalDisclosure from './components/LegalDisclosure';
import Footer from './components/Footer';
import Explore from './pages/Explore';
import AssetDetail from './pages/AssetDetail';
import Learn from './pages/Learn';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Signup2 from './pages/Signup2';

const HomePage = () => (
  <>
    <Hero />
    <MarketData />
    <Features />
    <CoinbaseOne />
    <BaseApp />
    <CryptoBasics />
    <CTA />
    <LegalDisclosure />
  </>
);


const AppContent = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/signup' || location.pathname === '/signin';

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {!isAuthPage && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup2" element={<Signup2 />} />
          <Route path="/explore"  element={<Explore />} />
        <Route path="/price/:asset" element={<AssetDetail />} />
        <Route path="/learn"        element={<Learn />} />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
