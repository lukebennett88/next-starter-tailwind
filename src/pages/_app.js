import PropTypes from 'prop-types';
import '../css/tailwind.css';

import { Nav } from '../components';

function App({ Component, pageProps }) {
  return (
    <div className="relative flex flex-col min-h-screen font-sans antialiased text-gray-700 bg-white border-t-4 border-teal-500 fill-available">
      <Nav />
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default App;
