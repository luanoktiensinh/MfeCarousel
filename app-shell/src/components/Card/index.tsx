import { ReactNode } from 'react';
import styles from './Card.module.scss';
interface ICard  {
    title: string,
    children: ReactNode,
    padding?: string
}
const Card = ({
    title, children, padding
}: ICard) => {
    return <div className={styles.root}>
            <div className={styles.header}>
                {title}
            </div>
            <div style={{padding}}>
                {children}
            </div>
        </div>
}
export default Card;