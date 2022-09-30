import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../public/navbar'
import Template from '../public/Template'
export default function Home() {
  return (
    <div>
      <Template title="Home" headText="This website will be discussing quagga mussels." desc="Quagga Mussels" >
      </Template>
    </div>
  )
}
