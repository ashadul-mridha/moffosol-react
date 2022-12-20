import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import OralHistory from '../components/oral-historical/OralHistory'
import Projects from '../components/project/Projects'

export default function Home() {
  return (
    <>
        <Header />
        <OralHistory />
        <Projects />
        <Footer />
    </>
  )
}
