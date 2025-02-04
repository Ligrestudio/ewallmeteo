export function parseWeatherData(rawData) {
    const pairs = rawData.split('|').filter(Boolean);
    return pairs.reduce((acc, pair) => {
      const [key, value] = pair.split('=');
      acc[key] = value;
      return acc;
    }, {});
  }