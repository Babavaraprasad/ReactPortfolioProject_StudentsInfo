import clasess from './Layout.module.css';
import Maincomponent from './Maincomponent';

function Layout (props)
{
return (
    <div>
<Maincomponent/>
<main className={clasess.main}>
{props.children}
</main>
  </div>
);

}
export default Layout;
