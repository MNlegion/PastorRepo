import React from 'react'
import CategoryList from '../components/CategoryList'

function Home() {
  return (
    <>
        <section className="heading">
            <h1>Welcome to MERN Blog</h1>
            <p>Register or Login to continue</p>
        </section>

        <section className="content">
            <p>
                This is a MERN stack application. It has been developed using MongoDB, Express, React and Node.js. It is a simple blog application where users can register, login and create posts.
            </p>
        </section>

        <CategoryList />
    </>
  )
}

export default Home