import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../public/navbar'
import Template from '../public/Template'
import image1 from '../public/image1.jpg'
import image2 from '../public/image2.jpg'
import image3 from '../public/image3.jpg'
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
          <li>
            Quagga mussels consume a lot of phytoplankton, causing a lot of competition for food.
          </li>
          <li>
            Quagga mussels are transported via boats from the Dneiper river.
          </li>
          <li>
            Check your boat for quagga mussels to prevent them from spreading.
          </li>
        </ul>
        <div className="gallerydiv">
          <Image src={image1} className="gallery" />
          <Image src={image2} className="gallery" />
          <Image src={image3} className="gallery" />
        </div>
      </Template>
    </div>
  )
}
