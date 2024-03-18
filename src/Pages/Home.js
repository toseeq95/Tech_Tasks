import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Papa from "papaparse";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
ChartJs.register(Tooltip, Title, ArcElement, Legend);

function Home() {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [countryData, setCountryData] = useState(null);

  // useEffect(() => {
  //   Papa.parse(process.env.PUBLIC_URL + "/assets/owid-covid-data.csv", {
  //     download: true,
  //     header: true,
  //     complete: function (results) {
  //       console.log(results.data);
  //       setData(results.data);
  //     },
  //   });
  // }, []);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://disease.sh/v3/covid-19/countries"
        );
        const data = await response.json();
        setCountries(data.map((country) => country.country));
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (country) {
        try {
          const response = await fetch(
            `https://disease.sh/v3/covid-19/countries/${country}`
          );
          const data = await response.json();
          setCountryData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [country]);

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className=" h-screen bg-slate-100">
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="bg-gray-100 p-4 shadow-xl rounded-md">
          <div className="flex justify-center py-4">
            <h2 className="text-gray-600 font-bold">
              {country} COVID-19 Statistics
            </h2>
          </div>

          <select
            value={country}
            onChange={handleCountryChange}
            className="w-full px-4 py-2 mb-4 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gradient-to-r from-green-400 to-blue-500 focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
          >
            <option value="">Select a country</option>
            {countries.map((countryName) => (
              <option key={countryName} value={countryName}>
                {countryName}
              </option>
            ))}
          </select>

          {countryData && (
            <div>
              <Doughnut
                data={{
                  datasets: [
                    {
                      data: [
                        countryData.cases,
                        countryData.deaths,
                        countryData.recovered,
                        countryData.population,
                      ],
                      backgroundColor: [
                        "rgba(255, 99, 132, 0.6)", // Cases
                        "rgba(54, 162, 235, 0.6)", // Deaths
                        "rgba(75, 192, 192, 0.6)", // Recovered
                        "rgba(255, 206, 86, 0.6)", // Population
                      ],
                    },
                  ],
                  labels: ["Cases", "Deaths", "Recovered", "Population"],
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
