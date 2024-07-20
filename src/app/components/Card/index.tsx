'use client'
import Image from 'next/image';
import styles from './style.module.scss';

import { useTransform, useScroll, motion } from 'framer-motion';

import { useRef } from 'react';

const Card = ({title, description, src, url, color, i}: any) => {
    const container = useRef(null);

  const { scrollYProgress } = useScroll({

    target: container,

    offset: ['start end', 'start start']

  })

  const imageScale: any = useTransform(scrollYProgress, [0, 1], [2, 1])



  return (
    <div ref={container} className={styles.cardContainer}  style={{transform:`rotate(${-10 + (i * 5)}deg)`}}>
      <div 
        className={styles.card}
      >       
       <h2 className='absolute z-10'>{title}</h2>

        <div className={styles.body}>

          <div className={styles.imageContainer}>
            <div className={styles.inner}  style={{scale: imageScale}}
>
              <Image
                fill
                src={src}
                alt="image" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card