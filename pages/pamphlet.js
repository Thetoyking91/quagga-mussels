import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../public/navbar'
import Template from '../public/Template'
export default function Home() {
  return (
    <div>
      <Template title="Home" headText="This website will be discussing quagga mussels." desc="Quagga Mussels" >
        <p> This is a pamphlet about quagga mussels. </p>
    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQox_SrWeggIptencABeiHPwIjR3UYQmEo3m5EQ2qZR9Dw3kGnA0aiG_cwNJh8LthJwBDP7R_RavmeR/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      </Template>
    </div>
  )
}
