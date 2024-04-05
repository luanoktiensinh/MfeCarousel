import _ from 'lodash'
import styles from './HeaderBanner.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
const HeaderBanner = () => {
    const background = useSelector((state: RootState) => state.global.background);
    return <div
        className={styles.root}
        style={{background}}
    >
        <div className={styles.container}>
            BANNER FROM GLOBAL MFE 
        </div>
    </div>
}
export default HeaderBanner;