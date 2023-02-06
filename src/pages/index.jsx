import * as React from 'react';
import '../styles/index.css';
import Home from './Home';

export const Head = () => (
  <>
    <html lang="en" />
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link id="icon" rel="icon" type="image/png" sizes="32x32" href="../images/favicon.png" />
    <title>Darwin Castro</title>
  </>
);

export default function IndexPage() {
  return (
    <>
      <Home />
    </>
  );
}
