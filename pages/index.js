import Head from 'next/head';
import Link from 'next/link';
import Logo from "../components/logo";
import MenuIcon from "../components/menu-icon";

import Header from "../components/header";
import Navbar from "../components/navbar";


export default function Home() {
  const tacoIcon = {
    imgSrc: "/images/taco-menu-icon.png",
    imgHeight: 60,
    imgWidth: 60,
    imgAltText: "taco menu icon"
  }

  const burritoIcon = {
    imgSrc: "/images/burrito-menu-icon.png",
    imgHeight: 60,
    imgWidth: 60,
    imgAltText: "burrito menu icon"
  }

  const quesadillaIcon = {
    imgSrc: "/images/quesadilla-menu-icon.png",
    imgHeight: 60,
    imgWidth: 60,
    imgAltText: "quesadilla menu icon"
  }

  const sodaIcon = {
    imgSrc: "/images/soda-menu-icon.png",
    imgHeight: 60,
    imgWidth: 60,
    imgAltText: "soda menu icon"
  }

  

  return (
    <div className="container">
      <Header />
      <main>
        <h1 className="title">
          Taqueria
        </h1>

        <p className="description">
          Los mejores tacos mexicanos
        </p>

        <div className="grid">
          
          <a href="https://nextjs.org/docs" className="card">
            <MenuIcon props={tacoIcon} />
            <p>Tacos</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <MenuIcon props={burritoIcon} />
            <p>Burritos</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <MenuIcon props={quesadillaIcon} />
            <p>Quesadillas</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <MenuIcon props={sodaIcon} />
            <p>Sodas</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/micochango-logo.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          
          
          
          margin-top: 3rem;
        }
        
        .card {
          flex-basis: 25%;
          margin: 0.25em;
          padding: 0.25em;
          text-align: center;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover {
          translate: 5px 5px;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card p {
          margin: 0 auto;
          font-size: 1rem;
          text-align: center;
          font-weight: bold;
        }


        .logo {
          height: 4em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
