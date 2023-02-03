import AccountSidebar from '../AccountSidebar';

import classNames from 'classnames/bind';
import styles from './MenuUserSidebar.module.scss';
import Discover from '../Discover';
const cx = classNames.bind(styles);

function UserSidebar({
    firstTitle,
    lastTitle,
    SugAccounts,
    trueSug = false,
    FollowAccounts,
    trueFolow = false,
    DiscoverList,
}) {
    let list = SugAccounts;
    if (trueSug) {
        list = FollowAccounts;
    }
    let cover = false;
    if (trueSug === false && trueFolow === false) {
        cover = true;
        list = DiscoverList;
    }

    return (
        <div className={cx('parent')}>
            <div className={cx('firstTitle')}>{firstTitle}</div>
            <div className={cx('wrapper')}>
                {cover || list.map((user) => <AccountSidebar key={user.id} data={user} />)}
                {cover && (
                    <div className={cx('wrapDiscover')}>
                        {list.map((data, i) => (
                            <Discover key={i} data={data} />
                        ))}
                    </div>
                )}
            </div>
            <div className={cx('lastTitle')}>{lastTitle}</div>
        </div>
    );
}

export default UserSidebar;
