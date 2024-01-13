import React from 'react'
import { Link } from 'react-router-dom';
import Layout from './Layout';

function Footer() {
  return (
    <div>
        <Layout>
            <Link to="/about">About</Link>
            <p>Test</p>
        </Layout>
        
    </div>
  )
}

export default Footer