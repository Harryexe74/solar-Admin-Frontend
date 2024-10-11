// const ApiUrl = 'https://solarbackendupdated2.vercel.app';
// const ApiUrl = 'https://solarbackend-final.vercel.app';
// const ApiUrl = 'http://localhost:3000';
const ApiUrl = process.env.NODE_ENV === "production"
  ? "https://solarbackend-final.vercel.app"
  : "http://localhost:3000";


export default ApiUrl;
