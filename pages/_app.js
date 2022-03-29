import '../styles/globals.css'
import Layout from '../components/layout/layout';
import { DriverProvider } from '../store/driver';

function MyApp({ Component, pageProps }) {
  return (
    <DriverProvider drivers={pageProps.drivers}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DriverProvider>
  )
}

export default MyApp
