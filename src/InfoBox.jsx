import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./InfoBox.css";

import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://media.istockphoto.com/id/2163514302/photo/boy-drinking-water-from-a-bottle-on-a-sunny-hot-day.jpg?s=612x612&w=0&k=20&c=_cNRWkWfxgOSNGmI6bcAIHZA_Oh6crlYEsO7sZuNcPk=";

  const COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60";

  const RAIN_URL =
    "https://media.istockphoto.com/id/1429701799/photo/raindrops-on-asphalt-rain-rainy-weather-downpour.webp?a=1&b=1&s=612x612&w=0&k=20&c=jc45vpqNDgrvRZAn2foO82IhW9rUeXbQfxvLZaDW8H8=";

  const imageUrl =
    info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL;

  const icon =
    info.humidity > 80 ? (
      <ThunderstormIcon />
    ) : info.temp > 15 ? (
      <WbSunnyIcon />
    ) : (
      <AcUnitIcon />
    );

  const speakWeatherReport = () => {
    const text = `Weather report for ${info.city}. 
    Currently, it's ${info.weather}. 
    The temperature is ${info.temp} degrees Celsius, feels like ${info.feelsLike}. 
    Minimum temperature is ${info.tempMin} and maximum is ${info.tempMax}. 
    Humidity is ${info.humidity} percent.`;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
  };

  return (
    <div
      className="infoBox"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "2rem",
        transition: "background-image 0.5s ease",
      }}
    >
      <div className="cardContainer">
        <Card sx={{ maxWidth: 350, backgroundColor: 'rgba(255,255,255,0.85)' }}>
          <CardMedia sx={{ height: 350 }} image={imageUrl} title="Weather Image" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {icon}
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}%</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels like{" "}
                {info.feelsLike}&deg;C
              </p>
              <Button variant="outlined" onClick={speakWeatherReport}>
                🔊 Speak Weather
              </Button>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
