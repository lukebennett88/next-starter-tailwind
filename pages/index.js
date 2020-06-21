import Link from 'next/link';

import { Layout, SEO } from '../components';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="text-2xl font-semibold text-gray-900">Home</h1>
      <h2 className="text-lg font-medium leading-6 text-gray-900">
        Contact us
      </h2>
      <Link href="/contact/">
        <a className="mt-1 text-sm font-medium leading-5 text-teal-600 transition duration-150 ease-in-out hover:text-teal-500 focus:outline-none focus:underline">
          Click here to go to our contact form.
        </a>
      </Link>
    </Layout>
  );
}
