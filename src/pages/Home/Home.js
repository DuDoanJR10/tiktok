import Blog from '~/components/Blog';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);

const Blogs = [
    {
        nickname: 'dudoanjr',
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/29edd0a826772c6ef5a39ea5cb86134b.jpeg?x-expires=1658592000&x-signature=LeLOzNBzcwdwbAYFs1qpHkI8ZFk%3D',
        strong: '#myloveisngocthanhh',
        music: 'Send My love - Du Doan',
        musicBackground: 'Send My Love ♡',
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
