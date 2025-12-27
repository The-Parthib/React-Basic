export async function searchCity(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
      import.meta.env.VITE_WEATER_API_KEY
    }`;

    const res = await fetch(url);
    console.log(res.ok);
    console.log("==============API called successfully==============");
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

// searchCity("Howrah");
