import ReactSlider from "react-slider";
import { useHumidity } from "../../context/ClimateContext";
import "./Hygrometer.css";
import { useEffect, useState } from "react";

function Hygrometer() {
  const { humidity, setHumidity } = useHumidity();
  const [target, setTarget] = useState(humidity);

  useEffect(() => {
    if(humidity !== target){
      setTimeout(() => {
        const delta = Math.sign(target - humidity);
        setHumidity(humidity + delta);
      },1000)
    }
  }, [humidity, target]);

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {`${humidity}`}%</div>
      <ReactSlider
        value={target}
        onAfterChange={(val) => {
          setTarget(val);
        }}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;