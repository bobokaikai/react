import { StyledLibraries } from "./StyledLibraries";
import { useState } from "react";
import Slider from "rc-slider";
//asset
import "rc-slider/assets/index.css";

function Libraries() {
  const [value, setValue] = useState(20000);
  const handleChange = (num) => setValue(num);
  return (
    <StyledLibraries>
      <div className="card">
        <header>
          <h2>Estimated Down Payment</h2>

          <h3>
            <abbr>$</abbr>
            {value.toLocaleString("en-US")}
          </h3>
        </header>
        <Slider step={25} max={10000} value={value} onChange={handleChange} />
      </div>
    </StyledLibraries>
  );
}

export default Libraries;
