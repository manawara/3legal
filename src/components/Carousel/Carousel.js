import React, { useState, useRef, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Carousel.module.scss'
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg'
import Dots from './Dots'

const Carousel = ({ options, data }) => {
  const [slide, setSlide] = useState({
    transform: 0,
    index: 0,
  })
  const url = 'http://localhost:1337'

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
  }, [slide.index, data.length])
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
        {data.map((item) => {
          const slide = item.attributes.image.data
          return (
            <div
              key={slide.id}
              alt=""
              style={{
                backgroundImage: `url(${url}${slide.attributes.url})`,
              }}
            ></div>
          )
        })}
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
