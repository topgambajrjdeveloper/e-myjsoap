
import { Container } from 'react-bootstrap';
import Navbar from './Navbar';
import Head from "next/head";
import { useRouter } from "next/router";
import { useTheme } from 'providers/ThemeProvider';
import SharedButtons from './SharedButtons';

export default function PageLayout({ title,children, className, ...customMeta }) {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const meta = {
    title: `M&JSoap´s`,
    description: `Blog de champús y jabones de elaboración artesanal, aceites, higiene personal, cuidado de la piel y el cabello.`,
    image: `https://avatars.githubusercontent.com/u/16295175?v=4`,
    type: "website",
    ...customMeta,
  };
  const currentYear = (new Date().getFullYear())
  const yearTxt = currentYear === 2022 ? "2022" : "2022 - " + currentYear
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://myjsoap.xyz${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://myjsoap.xyz${router.asPath}`}
        />
        <link rel='manifest' href='/static/manifest.json' />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="M&JSoap´s" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@myjsoap" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={yearTxt} />
        )}
      </Head>
      <div className={theme.type}>
        <Container>
          <Navbar
            theme={theme}
            toggleTheme={toggleTheme}
          />
          <div className={`page-wrapper ${className}`}>
            {children}
          </div>
          <footer className="page-footer">
            <div className="text-center">
              © {yearTxt} <a href="https://dev-cordenadas.xyz/" target="_blank">Developed by DevCordenadas</a>{' | '}
              <a href="https://twitter.com/myjsoap" target="_blank">Twitter</a>
              <br />
            </div>
          </footer>
        </Container>
        <style jsx global>{`
        html, body {
          background: ${theme.background};
          color: ${theme.fontColor};
          transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
        }
      `}
        </style>
      </div>
    </>
  )
}
