import { Layout } from '../components/Layout';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
      --font-plain: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
  --font-fancy: Georgia, serif;
  --font-mono: menlo, Monaco, monospace;
  --dark: #000;
  --darkish: #101216;
  --fg: #fff;
  --offWhite: #f4e5db;
  --green: #0e3528;
  --cream: #f4e5db;
  --cream-2: #f6d7c2;
  --accents-1: #111111;
  --accents-2: #333333;
  --accents-3: #444444;
  --accents-4: #666666;
  --accents-5: #888888;
  --accents-6: #999999;
  --accents-7: #eaeaea;
  --accents-8: #fafafa;
  --error: #ff0000;
  --error-light: #ff3333;
  --error-dark: #e60000;
  --alpha: #0070f3;
  --alpha-light: #3291ff;
  --alpha-dark: #0761d1;
  
  --rounded: 8px;
  --shadow-small: 0 5px 10px rgba(0, 0, 0, 0.12);
  --shadow-medium: 0 8px 30px rgba(0, 0, 0, 0.12);
  --shadow-large: 0 30px 60px rgba(0, 0, 0, 0.12);
  --shadow-hover: 0 30px 60px rgba(0, 0, 0, 0.12);
  --transition1s: all 100ms ease-in-out;
  --transition2s: all 200ms ease-in-out;
  --flow-space: 1.75rem;
  --flow-mid: 3.5rem;
  --flow-large: 5rem;
  --flow-massive: 10rem;
       --maxWidth: 1000px;
       --bs: 0 12px 24px 0 rgba(0,0,0,0.9);
       box-sizing: border-box;

    }
    *, *:::before, *:after {
      box-sizing: inherit;
    }

    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    color: var(--accents-1);
    }
h1,
h2,
h3,
h4,
h5,
h6 {
  letter-spacing: -0.5px;
}
    }
    a {
      text-decoration: none;
      color: var(----accents-1)
    }
    a:hover {
      text-decoration: underline;
    }
    button {
      font-family: var(--font-plain);
    }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
