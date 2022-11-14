import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../public/navbar'
import Template from '../public/Template'
export default function Home() {
  return (
    <div>
      <Template title="Authors | Quagga Mussel Awareness" headText="These are the people who made this:" desc="Quagga Mussels" >
    <ul className="text-left">
    <li>
        Website: Ryan McCoy
    </li>
    <li>
      Commercial: Aiden Galliart, Spencer Johnson and Caleb Hohle
    </li>
    <li>
      Pamphlet: Aiden Galliart, Spencer Johnson, Caleb Hohle and Ryan McCoy
    </li>
    </ul>
      </Template>
    </div>
  )
}
