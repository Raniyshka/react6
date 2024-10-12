import { Card } from '../../components/Card/Card'
import s from './Catalog.module.css'
import { products } from '../../data/data'
import { NavLink } from 'react-router-dom'
export function Catalog(){
    return(
        <section>
            <div className={s.catalog}>
                <h1>Каталог товаров</h1>
                <div className={s.categories}>
                    <h3>Категории:</h3>
                    <nav>
                        <NavLink className={s.active} to="#">Все товары</NavLink>
                        <NavLink to="#">Шины/колеса</NavLink>
                        <NavLink to="#">Масла</NavLink>
                       <NavLink to="#">Ароматизаторы</NavLink>
                     </nav>
                </div>
                <div className={s.cards}>
                    {
                        products.map((product)=>{
                        return(
                            <Card id={product.id} image={product.image} name={product.name} desc={product.desc} price={product.price}/>
                        )
                    })
                    }
                    
                </div>
                <div className={s.more}>
                  <a href="#">Загрузить еще товары</a>
                </div>
            </div>
        </section>
    )
}