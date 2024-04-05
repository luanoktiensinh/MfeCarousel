import React, { Suspense } from 'react';
import styles from './Header.module.scss';
import { lazy } from 'react';
import Card from '../Card';
import ErrorBoundary from '@/utils/ErrorBoundary';
// import HeaderBanner from 'GLOBAL/HeaderBanner'"
// const HeaderBanner = dynamic(() => import('GLOBAL/HeaderBanner'), { ssr: true/false });
const HeaderBanner = lazy(() => import('GLOBAL/HeaderBanner'));
// const props = {
//     "name": "HeaderBreadcrumb",
//     "props": {
//         "showBreadCrumb": true,
//         "isProductPage": true,
//         "isSupportArticlePage": false,
//         "showBreadcrumbForAppliances": true,
//         "activateInvertedState": false,
//         "lastLinkIndex": 3
//     },
//     "components": [
//         {
//             "name": "HeaderBreadcrumbItem",
//             "props": {
//                 "index": 1,
//                 "text": "Diskmaskiner och tillbehör",
//                 "href": "https://t1-electrolux-qa-b.eluxmkt.com/sv-se/kitchen/dishwashing/",
//                 "openNewWindow": false,
//                 "isSet": true
//             }
//         },
//         {
//             "name": "HeaderBreadcrumbItem",
//             "props": {
//                 "index": 2,
//                 "text": "Diskmaskiner",
//                 "href": "https://t1-electrolux-qa-b.eluxmkt.com/sv-se/kitchen/dishwashing/dishwashers/",
//                 "openNewWindow": false,
//                 "isSet": true
//             }
//         },
//         {
//             "name": "HeaderBreadcrumbItem",
//             "props": {
//                 "index": 3,
//                 "text": "Integrerad diskmaskin 60cm",
//                 "href": "https://t1-electrolux-qa-b.eluxmkt.com/sv-se/kitchen/dishwashing/dishwashers/built-in-dishwasher/",
//                 "openNewWindow": false,
//                 "isSet": true
//             }
//         }
//     ]
// }
const Header = () => {
    return <header className={styles.root}>
        {/* <div>BREADCRUMB FROM T1</div>
        <Breadcrumb {...props} />
        <Minicart /> */}
        <Card
            title='GLOBAL MFE'
        >
            <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
                <HeaderBanner />
            </Suspense>
          </ErrorBoundary>
        </Card>
    </header>;
}
export default Header;