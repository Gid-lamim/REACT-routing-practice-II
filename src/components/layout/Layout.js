import { Fragment } from 'react';
import classes from './Layout.module.css';

import MainNavigation from './MainNavigation';

const Layout = () => {
    return <Fragment>
        <MainNavigation/>
        <main className={classes.main}></main>
    </Fragment>

}

export default Layout;