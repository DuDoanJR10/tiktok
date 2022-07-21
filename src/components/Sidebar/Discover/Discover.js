import { Link } from 'react-router-dom';
import { MusicIcon } from '~/components/Icons';

import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
const cx = classNames.bind(styles);

function Discover({ data }) {
    let musicIcon = true;
    if (data.music === false) {
        musicIcon = false;
    }
    return (
        <Link to="/" className={cx('wrapper')}>
            <div className={cx('inner')}>
                {musicIcon && <MusicIcon className={cx('icon')} />}
                {musicIcon || <div className={cx('icon')}>#</div>}
                <p className={cx('title')}>{data.title}</p>
            </div>
        </Link>
    );
}

export default Discover;
