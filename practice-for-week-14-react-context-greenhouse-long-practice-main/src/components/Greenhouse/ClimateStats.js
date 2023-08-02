import './ClimateStats.css';
import { useTemperature } from '../../context/ClimateContext';
import { useHumidity } from '../../context/ClimateContext';

function ClimateStats() {
  const { temperature } = useTemperature();
  const { humidity } = useHumidity();
  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {`${temperature}`}°F
      </div>
      <div className="humidity">
        Humidity {`${humidity}`}%
      </div>
    </div>
  )
}

export default ClimateStats;