import React from 'react'
import { Categories, Slider } from "../../components";
import { Feature } from '../../components';
import "./Home.scss";

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <Feature type="featured" />
      <Categories />
      <Feature type="trending" />
    </div>
  )
}

export default Home