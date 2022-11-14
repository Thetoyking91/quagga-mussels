

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
       <a href="https://extension.arizona.edu/sites/extension.arizona.edu/files/pubs/az1481e.pdf" passHref={true}> <p> U of A </p> </a>
    </li>
    <li>
      <a href="https://extension.arizona.edu/sites/extension.arizona.edu/files/pubs/az1481e.pdf" passHref={true}> <p> U of A </p> </a>
    </li>
    <li>
      <a href="https://extension.arizona.edu/sites/extension.arizona.edu/files/pubs/az1481e.pdf" passHref={true}> <p> U of A </p> </a>
    </li>
    <li>
      <a href="https://extension.arizona.edu/sites/extension.arizona.edu/files/pubs/az1481e.pdf" passHref={true}> <p> U of A </p> </a>
    </li>
    <li>
      <a href="https://extension.arizona.edu/sites/extension.arizona.edu/files/pubs/az1481e.pdf" passHref={true}> <p> U of A </p> </a>
    </li>
    <li>
      <a href="https://extension.arizona.edu/sites/extension.arizona.edu/files/pubs/az1481e.pdf" passHref={true}> <p> U of A </p> </a>
    </li>
    </ul>
      </Template>
    </div>
  )
}
