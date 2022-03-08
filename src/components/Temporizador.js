import React, { useEffect, useState } from "react";
import {
  StyledCont,
  StyledContainer,
  Styledcontainertempo,
  StyleFondo,
  StyleImgred,
  StyleP,
  StyleRedes,
} from "../styled/temporizador";
const Temporizador = () => {
  const [temporizador, setTemporizador] = useState({
    days: 14,
    hours: 24,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (temporizador.seconds > 0) {
        setTemporizador({
          ...temporizador,
          seconds: temporizador.seconds - 1,
        });
      } else if (temporizador.seconds === 0 && temporizador.minutes > 0) {
        setTemporizador({
          ...temporizador,
          minutes: temporizador.minutes - 1,
          seconds: (temporizador.seconds = 59),
        });
      } else if (temporizador.minutes === 0 && temporizador.hours > 0) {
        setTemporizador({
          ...temporizador,
          hours: temporizador.hours - 1,
          minutes: (temporizador.minutes = 59),
        });
      } else if (temporizador.hours === 0 && temporizador.days > 0) {
        setTemporizador({
          ...temporizador,
          days: temporizador.days - 1,
          hours: (temporizador.hours = 24),
        });
      }
    }, 1000);
    return () => {
      clearInterval(intervalo);
    };
  }, [temporizador]);

  return (
    <div>
      <StyledContainer>
        <StyledCont>
          <h2>WE'RE LAUNCHING SOON</h2>
          <Styledcontainertempo>
            <div className="tiempo">
              <StyleP>
                {temporizador.days <= 9
                  ? "0" + temporizador.days
                  : temporizador.days}
              </StyleP>
              <label>Days</label>
            </div>
            <div className="tiempo">
              <StyleP>
                {temporizador.hours <= 9
                  ? "0" + temporizador.hours
                  : temporizador.hours}
              </StyleP>
              <label>Hours</label>
            </div>
            <div className="tiempo">
              <StyleP>
                {temporizador.minutes <= 9
                  ? "0" + temporizador.minutes
                  : temporizador.minutes}
              </StyleP>
              <label>Minutes</label>
            </div>
            <div className="tiempo">
              <StyleP>
                {temporizador.seconds <= 9
                  ? "0" + temporizador.seconds
                  : temporizador.seconds}
              </StyleP>
              <label>Seconds</label>
            </div>
          </Styledcontainertempo>
        </StyledCont>
      </StyledContainer>

      <div>
        <StyleFondo
          src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644620807/temporizadorHooks/pattern-hills_ckrnox.svg"
          alt="img"
        />
        <StyleRedes>
          <StyleImgred
            src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644620807/temporizadorHooks/icon-facebook_r6aqnr.svg"
            alt="facebook"
          />
          <StyleImgred
            src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644620807/temporizadorHooks/icon-pinterest_jysgel.svg"
            alt="pinterest"
          />
          <StyleImgred
            src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644620807/temporizadorHooks/icon-instagram_dfscdt.svg"
            alt="instagram"
          />
        </StyleRedes>
      </div>
    </div>
  );
};

export default Temporizador;
