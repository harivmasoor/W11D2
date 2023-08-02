import './LightSwitch.css';

function LightSwitch({themeName, setThemeName}) {


  return (


    <div className={`light-switch ${themeName}`}>
      <div onClick={(e)=>setThemeName("day")} className="on">DAY</div>
      <div onClick={(e)=> setThemeName("night")} className="off">NIGHT</div>
    </div>
  );
}

export default LightSwitch;