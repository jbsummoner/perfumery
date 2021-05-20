import React from 'react'
import styles from '../styles/scss/home.scss'
import { Link } from 'react-router-dom';
import Layout from "../components/Layout";


const Home = () => {
  return (
    <Layout>
    <div className="home-main">
      <Link to="/oils">
        <button class="home-button">See all fragrances</button>
        </Link>
      </div>
      </Layout>
  )
}

export default Home
