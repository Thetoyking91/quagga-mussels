import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../public/navbar'
import Template from '../public/Template'
export default function Home() {
  return (
    <div>
      <Template title="Home | Quagga Mussel Awareness" headText="Save the bay from the quagga mussel invasion today!" desc="Quagga Mussels" >
    <ul className="text-left">
    <li>
        Quagga mussels can produce 30,000-40,000 eggs in one breeding cycle, or 1 million per year!
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
