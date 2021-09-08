import Form from "../componants/Contact/Form/Form"
import Spacing from '../componants/Spacing/spacing'

export default function Contact () {

    const content = {
        width: "90%",
        margin: "0 auto",
        position: 'relative'

    }

    return (
        <div>
            <Spacing value="10vh"/>
            <section style={content}>
                <div style={{width: "50%"}}></div>
<Form/>
            </section>
        </div>
    )
}