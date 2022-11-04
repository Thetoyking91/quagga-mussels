import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../public/navbar'
import Template from '../public/Template'
export default function Home() {
  return (
    <div>
      <Template title="Pamphlet | Quagga Mussel Awareness" headText=" " desc="Quagga Mussels" >
    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQox_SrWeggIptencABeiHPwIjR3UYQmEo3m5EQ2qZR9Dw3kGnA0aiG_cwNJh8LthJwBDP7R_RavmeR/embed?start=false&loop=false&delayms=3000" frameBorder="0" width="960" height="569" allowFullScreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      </Template>
    </div>
  )
}
