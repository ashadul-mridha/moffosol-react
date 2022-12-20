import React from 'react'
import OralHistory from '../components/oral-historical/OralHistory'
import Projects from '../components/project/Projects'
import Slider from '../components/slider/Slider'

export default function Home() {
  return (
    <>
        <Slider />
        <OralHistory />
        <Projects />
    </>
  )
}
