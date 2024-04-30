import React, { Suspense } from 'react'
import { json, defer, useLoaderData, Await } from 'react-router-dom'
import Carousel from '../../components/Carousel/Carousel'
import styles from './HomePage.module.scss'
import PromoCategory from '../../components/PromoCategory/PromoCategory'
import InsightBoxCarousel from '../../components/InsightBoxCarousel/InsightBoxCarousel'
import BannerImageAndText from '../../components/BannerImageAndText/BannerImageAndText'
import AboutCompany from '../../components/AboutCompany/AboutCompany'
import Blog from '../../components/Blog/Blog'
import Newsletter from '../../components/Newsletter/Newsletter'
import livingRoomImage from '../../assets/living_room.jpeg'

const HomePage = () => {
  const { slides, products, articles } = useLoaderData()

  return (
    <div className={styles.wrapper}>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={slides.data}>
          {(loadedEvent) => (
            <Carousel
              options={{
                dots: true,
                arrows: true,
                autoplay: {
                  time: 5000, //move slide after x seconds
                },
              }}
              data={loadedEvent}
            />
          )}
        </Await>
      </Suspense>
      <div className={styles.info}>
        <h2>Simply Unique/ Simply Better.</h2>
        <p>
          <strong>3legant</strong> is a gift & decorations store based in HCMC, Vietnam. Est since 2019.{' '}
        </p>
      </div>
      <PromoCategory />
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={products.data}>
          {(loadedProduct) => <InsightBoxCarousel title="New Arrivals" products={loadedProduct} />}
        </Await>
      </Suspense>
      <AboutCompany />
      <BannerImageAndText
        tag="SALE UP TO 35% OFF"
        title="HUNDREDS of New lower prices!"
        description="It’s more affordable than ever to give every room in your home a stylish makeover"
        image={livingRoomImage}
      />
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={articles}>{(lodadedArticles) => <Blog title="Articles" data={lodadedArticles} />}</Await>
      </Suspense>

      <Newsletter />
    </div>
  )
}
const loadedSlider = async () => {
  const response = await fetch('http://localhost:1337/api/banner-home-pages?populate=*')
  if (!response.ok) {
    throw json({ message: 'Could not fetch slides' }, { status: 500 })
  } else {
    const resData = await response.json()
    return resData
  }
}

const loadedProducts = async () => {
  const response = await fetch('http://localhost:1337/api/products/?populate=*')
  if (!response.ok) {
    throw json({ message: 'Could not fetch products', status: 500 })
  } else {
    const resData = await response.json()
    return resData
  }
}

const lodadedArticles = async () => {
  const response = await fetch('http://localhost:1337/api/article?sort[0]=id:desc&pagination[limit]=3&populate=*')
  if (!response.ok) {
    throw json({ message: 'Could not fetch articles!' }, { status: 500 })
  }
  const resData = response.json()
  return resData
}

export const loader = async ({ request, params }) => {
  return defer({
    slides: await loadedSlider(),
    products: await loadedProducts(),
    articles: lodadedArticles(),
  })
}
export const action = async ({ request }) => {
  const formData = await request.formData()
  const email = formData.get('email')
  const errors = {}
  if (typeof email !== 'string' || !email.includes('@')) {
    errors.email = "That doesn't look like an email address"
  }

  if (Object.keys(errors).length) {
    return errors
  }

  const response = await fetch('http://localhost:1337/api/newsletters', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: { email } }),
  })
  if (!response.ok) {
    throw json({ message: 'Could not add newsletter. Try again' }, { status: 500 })
  }

  return { message: 'Thanks! You joined to newsletters successful!' }
}
export default HomePage
