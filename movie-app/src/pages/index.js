import React from "react";
import Layout from "../components/Layout";

export default function Home() {
  const Meta = {
    title: "Home",
    description: "This is the description of the Home page",
    image: "https://www.example.com/image.jpg",
  }
  return (
    <>
      <Layout title={Meta.title} description={Meta.description} image={Meta.image}>
        <p>deneme</p>
      </Layout>
    </>
  )
}
