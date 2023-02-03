import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './Image.module.scss';
const cx = classNames.bind(styles);

const Image = forwardRef(({ className, alt, fallback: customFallback = images.noImage, src, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            ref={ref}
            src={fallback || src}
            alt={alt}
            className={cx('wrapper', className)}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
