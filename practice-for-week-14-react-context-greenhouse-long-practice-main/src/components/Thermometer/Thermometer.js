import ReactSlider from "react-slider";
import './Thermometer.css';
import { useTemperature } from '../../context/ClimateContext';
import { useEffect, useState } from "react";


function Thermometer() {
  const { temperature, setTemperature } = useTemperature();
  const [target, setTarget] = useState(temperature);


  useEffect(() => {
    if(temperature !== target){
      setTimeout(() => {
        const delta = Math.sign(target - temperature);
        setTemperature(temperature + delta);
      },1000)
    }
  }, [temperature, target]);


  return (
    <section>
      <h2>ThermoStat</h2>
      <div className="actual-temp">Actual Temperature: {`${temperature}`}°F</div>
      <ReactSlider
        value={target}
        onAfterChange={(val) => {

          setTarget(val);

        }}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
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

export default Thermometer;