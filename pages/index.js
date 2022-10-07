import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../public/navbar'
import Template from '../public/Template'
export default function Home() {
  return (
    <div>
      <Template title="Home" headText="This website will be discussing quagga mussels." desc="Quagga Mussels" >
        <p> Quagga mussels are a very dangerous invasive species for the following reasons: </p>
    <ul>
    <li>
        Quagga mussels can produce 30,000-40,000 eggs in one breeding cycle, or 1 million per year!
    </li>
    </ul>
      </Template>
    </div>
  )
}
