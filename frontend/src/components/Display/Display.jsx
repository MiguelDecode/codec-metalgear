import Character from "../Character/Character";
import "./Display.css";
import Radio from "../Radio/Radio";

const Display = () => {
  return (
    <article className="display">
      <Character />

      <Radio />

      <Character />
    </article>
  );
};

export default Display;
