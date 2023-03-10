import Head from 'next/head'
import Navbar from './components/navbar'
import Body from './components/body'
import Services from './components/services'
import Portfolio from './components/portfolio'
import {useState} from 'react'


export default function Home() {
  const [darkMode,setDarkMode]=useState(false);
  return (
    <div className={darkMode?"dark":""}>
      <Head>
        <title>Shashank Portfolio </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/avatar.png" />
      </Head>
      <main className='bg-white text-black px-10 pb-10 dark:bg-gray-800 md:px-20 lg:px-40'>
        <section className=' min-h-screen'>
       <Navbar dark={darkMode} handleCLick={setDarkMode}/>
       <Body />
       <Services />
       <Portfolio />
        </section>
      </main>
    </div>
  )
}
