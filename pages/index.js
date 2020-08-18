import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1 className="title">
          Welcome to <a href="https://openweathermap.org/">Open Weather App!!</a>
        </h1>

        <p className="description">
          The application is used for displaying the weather of different cities around the world
        </p>

        <div className="grid">
          <a href="https://openweathermap.org/api" className="card">
            <h3>API &rarr;</h3>
            <p>Find in-depth information about Open Weather API features.</p>
          </a>

          <a href="https://openweathermap.org/guide" className="card">
            <h3>Getting Started &rarr;</h3>
            <p>Learn about Open Weather API Getting Started Guide.</p>
          </a>

          <a
            href="https://openweathermap.org/current"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover how to display weather of any geolocation by passing suitable parameter.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
     <Footer/>
    </div>
  )
}
