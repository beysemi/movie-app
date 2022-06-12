import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MovieSlider from "../components/MovieSlider";
export default function Home() {
  const Meta = {
    title: "Home",
    description: "This is the description of the Home page",
    image: "https://www.example.com/image.jpg",
  }
  return (
    <>
      <Layout title={Meta.title} description={Meta.description} image={Meta.image}>
        <Header />
        <Hero />
        <MovieSlider sliderTitle="Slider" data={
          [
            {
              image: "https://themoviedb.org/t/p/w600_and_h900_bestv2/lkvhReTBZ2Ksl0Dl5Oplsf6UYkF.jpg",
              title: "The Irishman",
              rating: "8.5",
            },
            {
              image: "https://themoviedb.org/t/p/w600_and_h900_bestv2/lkvhReTBZ2Ksl0Dl5Oplsf6UYkF.jpg",
              title: "The Irishman",
              rating: "8.5",
            },
            {
              image: "https://themoviedb.org/t/p/w600_and_h900_bestv2/lkvhReTBZ2Ksl0Dl5Oplsf6UYkF.jpg",
              title: "The Irishman",
              rating: "8.5",
            },
            {
              image: "https://themoviedb.org/t/p/w600_and_h900_bestv2/lkvhReTBZ2Ksl0Dl5Oplsf6UYkF.jpg",
              title: "The Irishman",
              rating: "8.5",
            },
            {
              image: "https://themoviedb.org/t/p/w600_and_h900_bestv2/lkvhReTBZ2Ksl0Dl5Oplsf6UYkF.jpg",
              title: "The Irishman",
              rating: "8.5",
            },
            {
              image: "https://themoviedb.org/t/p/w600_and_h900_bestv2/lkvhReTBZ2Ksl0Dl5Oplsf6UYkF.jpg",
              title: "The Irishman",
              rating: "8.5",
            },
            {
              image: "https://themoviedb.org/t/p/w600_and_h900_bestv2/lkvhReTBZ2Ksl0Dl5Oplsf6UYkF.jpg",
              title: "The Irishman",
              rating: "8.5",
            },
            {
              image: "https://themoviedb.org/t/p/w600_and_h900_bestv2/lkvhReTBZ2Ksl0Dl5Oplsf6UYkF.jpg",
              title: "The Irishman",
              rating: "8.5",
            },
          ]
        } />
      </Layout>
    </>
  )
}
