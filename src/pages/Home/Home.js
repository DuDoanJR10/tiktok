import Blog from '~/components/Blog';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);

const Blogs = [
    {
        nickname: 'mystory',
        avatar: '',
        strong: '#mylifeissadstory',
        music: 'I Need You - Du Doan',
        musicBackground: 'Do What You Like ♡',
    },
];

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Blog data={Blogs[0]} />
        </div>
    );
}

export default Home;
