

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../public/navbar'
import Template from '../public/Template'
import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <Template title="Credits | Quagga Mussel Awareness" headText="Sources:" desc="Quagga Mussels" >
    <ul className="text-left">
    <li>
        <Link href="https://extension.arizona.edu/sites/extension.arizona.edu/files/pubs/az1481e.pdf" passHref={true}> <p> U of A </p> </Link>
    </li>
    <li>
      Quagga mussels can attach to soft things, while zebra mussels can only attach to hard surfaces.
    </li>
    <li>
      Quagga mussels are freshwater mussels, so they can only survive in freshwater and not the ocean.
    </li>
    </ul>
      </Template>
    </div>
  )
}
