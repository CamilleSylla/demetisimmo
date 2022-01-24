import Form from "../componants/Contact/Form/Form";
import Illustration from "../componants/Contact/Illustration/Illustration";
import Spacing from "../componants/Spacing/spacing";

export default function Contact() {
  const content = {
    width: "100%",
    margin: "0 auto",
    position: "relative",
  };

  return (
    <div>
      <Spacing value="10vh" />
      <section style={content}>
        <Illustration/>
        <Form />
      </section>
    </div>
  );
}
