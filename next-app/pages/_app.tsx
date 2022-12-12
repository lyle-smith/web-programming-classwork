import 'bulma';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavVue from '../components/NavBar'

// const NavVue = () => <nav className="navbar is-primary"></nav>


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="root">
      <header>
        <NavVue />
      </header>

      <div className="container">
        <Component {...pageProps} />
      </div>
    </div>
  )
}
