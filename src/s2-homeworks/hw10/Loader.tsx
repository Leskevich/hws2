import s from './Loader.module.css'
import spinner from './Ellipse 4.png'
export const Loader = () => <div className={s.loader}>
    <img src={spinner} className={s.logo} alt='spinner'/>
</div>
