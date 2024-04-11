import React, { useState, useCallback, useEffect } from 'react'
import Image from 'next/image';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'

import styles from '@/styles/components/EmblaCarousel.module.css';
import Link from 'next/link';

type DotButtonPropType = {
  selected: boolean
  onClick: () => void
}

export const DotButton: React.FC<DotButtonPropType> = (props) => {
  const { selected, onClick } = props

  return (
    <button
      className={ selected ? `${styles.embla__dot} ${styles['embla__dot--selected']}` : `${styles.embla__dot}` }
      type="button"
      onClick={onClick}
    />
  )
}

type PrevNextButtonPropType = {
  enabled: boolean
  onClick: () => void
}

export const PrevButton: React.FC<PrevNextButtonPropType> = (props) => {
  const { enabled, onClick } = props

  return (
    <button
      className={`${styles.embla__button} ${styles['embla__button--prev']}`}
      onClick={onClick}
      disabled={!enabled}
    >
      <svg className={styles.embla__button__svg} viewBox="137.718 -1.001 366.563 644">
        <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
      </svg>
    </button>
  )
}

export const NextButton: React.FC<PrevNextButtonPropType> = (props) => {
  const { enabled, onClick } = props

  return (
    <button
      className={`${styles.embla__button} ${styles['embla__button--next']}`}
      onClick={onClick}
      disabled={!enabled}
    >
      <svg className={styles.embla__button__svg} viewBox="0 0 238.003 238.003">
        <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
      </svg>
    </button>
  )
}

type Slide = {
    image: string,
    title: string,
    description: string,
    url: string,
}

type PropType = {
    slides: Slide[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  
    const scrollPrev = useCallback(
      () => emblaApi && emblaApi.scrollPrev(),
      [emblaApi],
    )
    const scrollNext = useCallback(
      () => emblaApi && emblaApi.scrollNext(),
      [emblaApi],
    )
    const scrollTo = useCallback(
      (index: number) => emblaApi && emblaApi.scrollTo(index),
      [emblaApi],
    )
  
    const onSelect = useCallback(() => {
      if (!emblaApi) return
      setSelectedIndex(emblaApi.selectedScrollSnap())
      setPrevBtnEnabled(emblaApi.canScrollPrev())
      setNextBtnEnabled(emblaApi.canScrollNext())
    }, [emblaApi, setSelectedIndex])
  
    useEffect(() => {
      if (!emblaApi) return
      onSelect()
      setScrollSnaps(emblaApi.scrollSnapList())
      emblaApi.on('select', onSelect)
      emblaApi.on('reInit', onSelect)
    }, [emblaApi, setScrollSnaps, onSelect])
  
    return (
      <>
        <div className={styles.embla}>
          <div className={styles.embla__viewport} ref={emblaRef}>
            <div className={styles.embla__container}>
              {slides.map((slide, index) => (
                <div className={styles.embla__slide} key={index}>
                    <Link href={slide.url}>
                    <div style={{ width: '30%', aspectRatio: '1/4', position: 'relative', margin: 'auto' }}>
                        <Image
                            className={styles.embla__slide__img}
                            src={slide.image}
                            alt="Your alt text"
                            fill
                        />
                    </div>
                    </Link>
                    <h5 style={{ fontSize: '18px', margin: '5px 0' }}>{slide.title}</h5>
                    <p style={{ wordWrap: 'break-word', margin: '5px 0' }}>{slide.description}</p>
                      {/*<button style={{ 
                          backgroundColor: 'transparent', 
                          border: '2px solid black', 
                          padding: '0.667em 1.333em',
                          fontWeight: '400',
                          lineHeight: '1.1',
                          fontSize: '16px',
                          cursor: 'pointer',
                      }}>View Wine</button>*/}
                </div>
              ))}
            </div>
          </div>
  
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
  
        <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </>
    )
  }

export default EmblaCarousel
