import PropTypes from 'prop-types';
import 'typeface-inter';

import '../css/index.css';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
