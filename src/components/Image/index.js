import React, {forwardRef, useState} from 'react';
import images from "~/assets/images";
import classNames from "classnames";
import styles from './Image.module.scss'
import PropTypes from "prop-types";

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

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;