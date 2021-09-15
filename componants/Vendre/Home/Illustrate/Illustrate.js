import style from './illustrate.module.scss'

 export default function Illustrate () {
     const illustration = [
         {
             styling : {
                top: "5%",
                right: "5%",
                width: "15vh",
                height: "15vh"
             },
             url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
         },
         {
             styling : {
                top: "-7%",
                right: "30%",
                width: "25vh",
                height: "25vh"
            },
            url: "https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=966&q=80",
            },
            {
                styling : {
                    top: "25%",
                    right: "5%",
                    width: "50vh",
                    height: "50vh"
                },
                url: "https://images.unsplash.com/photo-1616587896595-51352538155b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
         },
         {
             styling : {
                top: "5%",
                right: "65%",
                width: "30vh",
                height: "30vh"
             },
             url: "https://images.unsplash.com/photo-1628133287836-40bd5453bed1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
         },
         {
             styling : {
                top: "85%",
                right: "5%",
                width: "15vh",
                height: "15vh"
             },
             url: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
         },
     ]

    return (
        <div className={style.wrapper}>
            {illustration.map((el, i) => {
                console.log(el.styling);
                return (
                    <div style={el.styling} className={style.square}>
                        <img src={el.url}/>
                    </div>
                )
            } )}
        </div>
    )
 }