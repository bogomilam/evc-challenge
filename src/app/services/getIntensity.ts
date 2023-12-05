import axios from 'axios';

// Make a request
export const getC02Intensity: () => Promise<void> = async () =>
  await axios
    .get('https://api.carbonintensity.org.uk/intensity')
    .then(({ data: { data } }) => {
      return data[0];
    })
    .catch((error) => {
      console.error(error);
    });
