

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
      <a href="https://www.seagrant.wisc.edu/our-work/focus-areas/ais/invasive-species/invasive-species-fact-sheets/mollusks/quagga-mussel/" passHref={true}> <p> Wisconsin Sea Grant </p> </a>
    </li>
    <li>
      <a href="https://www.invasivespeciesinfo.gov/aquatic/invertebrates/quagga-mussel" passHref={true}> <p> National Invasive Species Information Center </p> </a>
    </li>
    <li>
      <a href="https://www.azgfd.com/fishing/invasivespecies/quaggamussels/" passHref={true}> <p> Aquatic Invasive Species </p> </a>
    </li>
    <li>
      <a href="https://flbs.umt.edu/newflbs/media/1837/ais-lesson_4_invasive-mussel-life-cycle-poster.pdf" passHref={true}> <p> University of Montana </p> </a>
    </li>
    <li>
      <a href="https://en.wikipedia.org/wiki/Quagga_mussel" passHref={true}> <p> Wikipedia </p> </a>
    </li>
    <a href="https://www.biologyonline.com/dictionary/exotic-species" passHref={true}> <p> Biology online dictionary </p> </a>
    </ul>
      </Template>
    </div>
  )
}
