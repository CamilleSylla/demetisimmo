import style from "./members.module.scss";

export default function Members({ team, agent, setAgent }) {
  return (
    <div className={style.wrapper}>
      {team.map((el, i) => {
        const member = el.acf;
        if (agent) {
          return (
            <div
              onClick={() => {
                setAgent(el);
                window.scrollTo(0, 200);
              }}
              className={style.card}
            >
              <img
                style={{
                  filter: `${
                    agent.id == el.id ? "grayscale(0%)" : "grayscale(100%)"
                  }`,
                }}
                src={member.vignette}
              />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
