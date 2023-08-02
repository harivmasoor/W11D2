// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { useContext, useState } from "react";

import { createContext } from "react";

export const TemperatureContext = createContext();
export const HumidityContext = createContext();

export const useTemperature = () => useContext(TemperatureContext);

export const useHumidity = () => useContext(HumidityContext);


export default function ClimateProvider( props ){

    const [temperature, setTemperature] = useState(50);
    const [humidity, setHumidity] = useState(40);
    
    return (
        <TemperatureContext.Provider value={{temperature, setTemperature}}>
            <HumidityContext.Provider value={{ humidity, setHumidity }}>
                {props.children}
            </HumidityContext.Provider>
        </TemperatureContext.Provider>
      );
    }



