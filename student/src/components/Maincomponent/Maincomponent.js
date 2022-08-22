import classes from './Maincomponent.module.css';
import {Link} from 'react-router-dom';

function Maincomponent()
{
    return (
    <header className={classes.header}>
        <div className={classes.title}>Students Bio data</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Profile Information</Link>
                </li>
                <li>
                    <Link to='/add_new'>New student</Link>
                </li>
                <li>
                    <Link to='/shortlist'>Shorlisted</Link>
                </li>
                <li>
                    <Link to='/faq'>FAQ</Link>
                </li>
            </ul>
        </nav>
    </header>
    )
};
export default Maincomponent;