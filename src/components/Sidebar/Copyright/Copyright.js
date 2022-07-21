import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Copyright.module.scss';
const cx = classNames.bind(styles);

function Copyright({ data }) {
    return (
        <div className={cx('wrapper')}>
            {data.map((items, i) => {
                return (
                    <div className={cx('inner')} key={i}>
                        {items.map((item, i) => (
                            <Link to="/" className={cx('link')} key={i}>
                                {item.title}
                            </Link>
                        ))}
                    </div>
                );
            })}
            <span className={cx('last')}>@ 2022 TIKTOK</span>
        </div>
    );
}

export default Copyright;
