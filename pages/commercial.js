import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../public/navbar'
import Template from '../public/Template'
export default function Home() {
  return (
    <div>
      <Template title="Commercial | Quagga Mussel Awareness" headText="" desc="This is the commercial" >
        <iframe width="1120" height="630" src="https://www.youtube-nocookie.com/embed/qA_CQq80K_g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <a href="https://drive.google.com/file/d/17bTRj9X0sk_kDOCwz3xArLoj3UUSl1KQ/view"> Video </a>
      </Template>
    </div>
  )
}
