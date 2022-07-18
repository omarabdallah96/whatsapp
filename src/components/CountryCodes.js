import React, { useEffect, useState } from "react";
import { getCountry } from "../json/countrycode";

function CountryCodes(props) {
  const [countryCodeList, setCountryCodeList] = useState([]);

  const fetchCountryCode = async () => {
    const data = getCountry;
    data.map((country) => {
      setCountryCodeList((prev) => [...prev, parseInt(country.calling_code)]);
    });
  };

  useEffect(() => {
    fetchCountryCode();
  }, []);
  return (
    <div>
      {/* if empty, show loading */}
      {countryCodeList.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <select
          onChange={(e) => {
            props.handleChange(e.target.value);
          }}
          defaultValue={props.value}
          className="form-control select-control"
        >
          {countryCodeList.map((countryCode, index) => (
            <option key={index} value={countryCode}>
              {countryCode}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default CountryCodes;
