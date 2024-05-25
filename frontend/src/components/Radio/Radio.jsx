import "./Radio.css";
import { useState } from "react";

const Radio = () => {
  const [frequency, setFrequency] = useState(140.96);

  const CHARACTERSFREQUENCY = {
    140.15: "Meryl Silverburgh",
    140.48: "Gray Fox",
    140.96: "Mei Ling",
    140.85: "Roy Campbell",
    141.52: "Nastasha Romanenko",
    141.12: "Otacon",
    141.8: "Master Miller",
  };

  const MINFREQUENCY = 140.15;
  const MAXFREQUENCY = 141.8;

  const upFrequency = () => {
    frequency > MAXFREQUENCY
      ? setFrequency(MINFREQUENCY)
      : setFrequency(frequency + 0.01);
  };

  const downFrequency = () => {
    frequency < MINFREQUENCY
      ? setFrequency(MAXFREQUENCY)
      : setFrequency(frequency - 0.01);
  };

  return (
    <div className="radio">
      <div className="radio__title">PTT</div>
      <button
        className="radio__btn radio__btn--prev"
        onClick={downFrequency}
      ></button>
      <div className="radio__display">
        <div className="radio__dot radio__dot--top-left"></div>
        <div className="radio__dot radio__dot--top-right"></div>
        <div className="radio__dot radio__dot--bottom-left"></div>
        <div className="radio__dot radio__dot--bottom-right"></div>
        <div className="radio__bars">
          <div className="bars bars__one">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="bars bars__two">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="bars bars__three">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="bars bars__four">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="bars bars__five">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="bars bars__six">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="bars bars__seven">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="bars bars__eight">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="bars bars__nine">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="frequency">
            <span className="frequency--small">
              {frequency.toString().slice(0, 2)}
            </span>
            {Number(frequency.toString().slice(2)).toFixed(2)}
          </div>
        </div>
      </div>
      <button
        className="radio__btn radio__btn--next"
        onClick={upFrequency}
      ></button>
      <div className="radio__memory">MEMORY</div>
    </div>
  );
};

export default Radio;
