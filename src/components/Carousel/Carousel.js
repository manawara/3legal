import React, { useState, useRef, useEffect, useCallback } from 'react'
import styles from './Carousel.module.scss'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/living_room.jpeg'
import image3 from '../../assets/living_room_3.jpeg'
import image4 from '../../assets/bedroom.jpeg'
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg'
import Dots from './Dots'

const data = [
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image2,
  },
  {
    id: 13,
    image: image3,
  },
  {
    id: 1,
    image: image4,
  },
]

const Carousel = ({ options }) => {
  const [slide, setSlide] = useState({
    transform: 0,
    index: 0,
  })
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const carouselRef = useRef()
  const { dots, arrows, autoplay } = options

  const handleClickNext = useCallback(() => {
    slide.index < data.length - 1
      ? setSlide((prev) => {
          return {
            transform: prev.transform - carouselRef.current.offsetWidth,
            index: prev.index + 1,
          }
        })
      : setSlide({ transform: 0, index: 0 })
  }, [slide.index])
  const handleClickPrev = () => {
    slide.index > 0
      ? setSlide((prev) => {
          return {
            transform: prev.transform + carouselRef.current.offsetWidth,
            index: prev.index - 1,
          }
        })
      : setSlide({ transform: -(data.length - 1) * carouselRef.current.offsetWidth, index: data.length - 1 })
  }
  const handleMouseDown = (e) => {
    setIsDragging(true)
    const pageX = e.pageX ? e.pageX : e.touches[0].pageX
    setStartX(pageX)
  }
  const handleMouseUp = (e) => {
    setIsDragging(false)
    const pageX = e.pageX ? e.pageX : e.changedTouches[0].pageX

    if (startX > pageX && slide.index < data.length - 1) {
      setSlide((prev) => {
        return {
          transform: carouselRef.current.offsetWidth * (prev.index + 1) * -1,
          index: prev.index + 1,
        }
      })
    } else if (startX < pageX && slide.index > 0) {
      setSlide((prev) => {
        return {
          transform: carouselRef.current.offsetWidth * (prev.index - 1) * -1,
          index: prev.index - 1,
        }
      })
    }
  }

  const handleMouseMoving = (e) => {
    if (!isDragging) return
    const pageX = e.pageX ? e.pageX : e.touches[0].pageX

    let leftTransform
    if (startX > pageX && slide.index < data.length - 1) {
      leftTransform = -carouselRef.current.offsetWidth * slide.index - (carouselRef.current.offsetWidth - pageX)
    } else if (startX < pageX && slide.index > 0) {
      leftTransform = -carouselRef.current.offsetWidth * slide.index + pageX
    }
    setSlide((prev) => {
      return {
        ...prev,
        transform: leftTransform,
      }
    })
  }
  const handleClickDot = (id) => {
    setSlide({
      transform: -carouselRef.current.offsetWidth * id,
      index: id,
    })
  }
  const stylesCarousel = {
    transform: `translateX(${slide.transform}px)`,
    transition: `transform 0.4s ease-out`,
  }

  useEffect(() => {
    const handleResize = () => {
      setSlide((prev) => {
        return {
          ...prev,
          transform:
            slide.transform <= 0
              ? -(carouselRef.current.offsetWidth * slide.index)
              : carouselRef.current.offsetWidth * slide.index,
        }
      })
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [slide])

  useEffect(() => {
    if (!autoplay) return
    const interval = setInterval(() => {
      handleClickNext()
    }, autoplay.time)
    return () => {
      clearInterval(interval)
    }
  }, [handleClickNext, autoplay])

  return (
    <div className={styles.carousel}>
      <div
        tabIndex={0}
        className={styles['carousel-content']}
        style={stylesCarousel}
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMoving}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleMouseMoving}
        onTouchCancel={() => setIsDragging(false)}
      >
        {data.map((slide) => (
          <div
            key={slide.image}
            alt=""
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          ></div>
        ))}
      </div>
      {arrows && (
        <>
          <div className={styles['arrow-left']} onClick={handleClickPrev}>
            <ArrowLeft />
          </div>
          <div className={styles['arrow-right']} onClick={handleClickNext}>
            <ArrowRight />
          </div>
        </>
      )}
      {dots && <Dots data={data} active={slide.index} onDot={handleClickDot} />}
    </div>
  )
}

export default Carousel
