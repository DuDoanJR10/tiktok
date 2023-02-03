import Image from '~/components/Image';
import Button from '~/components/Button';
import { MusicIcon } from '~/components/Icons';

import classNames from 'classnames/bind';
import styles from './Blog.module.scss';
const cx = classNames.bind(styles);

function Blog({ data }) {
    return (
        <div className={cx('wrapper')}>
            <a className={cx('tag-a')} href="/">
                <Image className={cx('avatar')} alt={data.nickname} src={data.avatar} />
            </a>
            <div className={cx('container')}>
                <div className={cx('info')}>
                    <div className={cx('info-desc')}>
                        <div className={cx('author')}>
                            <h3 className={cx('nickname')}>{data.nickname}</h3>
                        </div>
                        <div className={cx('video-desc')}>
                            <span className={cx('music')}>{data.music}</span>
                            <a href="/" className={cx('desc-same')}>
                                {data.strong}
                            </a>
                            <h4>
                                <a href="/">
                                    <MusicIcon />
                                    nhạc nền - {data.musicBackground}
                                </a>
                            </h4>
                        </div>
                    </div>
                    <Button small outline>
                        Follow
                    </Button>
                </div>
                <div className={cx('video')}></div>
            </div>
        </div>
    );
}

export default Blog;
