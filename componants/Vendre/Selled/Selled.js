import style from './selled.module.scss'
import Cards from '../../Products/Cards/Cards'
import Link from 'next/link'

export default function Selled ({houses}) {
    const btnStyle = {
        position: "absolute",
        bottom: 0,
        left:" 50%",
        transform: "translate3d(-50%, 0, 0)",
    }
    return (
        <section className={style.wrapper}>
            <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
                <h1>Nos derniers biens vendus</h1>
                <Link href="/vendu">
                <button className={btnStyle}>consulter toutes nos ventes</button>
                </Link>

            </div>
            <div className={style.cards}>
                {houses.map((el,i) => {
                    if (i <= 2) {
                        return <Cards data={el}/>
                    }
                })}
            </div>
        </section>
    )
}