import React, {forwardRef, useState} from 'react';
import images from "~/assets/images";
import classNames from "classnames";
import styles from './Image.module.scss'

const Image = forwardRef(({className, fallback: customFallback = images.noImage, src, alt, ...props}, ref) => {
    const [fallback, setFallback] = useState('')

    const handleError = () => {
        setFallback(customFallback)
    }

    return <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        src={fallback || src}
        {...props}
        alt={alt}
        onError={handleError}/>
})

export default Image;