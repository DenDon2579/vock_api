import axios from 'axios';

export default async (accessToken: any) => {
  const responce = await axios.get(
    'https://www.googleapis.com/oauth2/v3/userinfo',
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );
  const userData = await responce.data;
  return userData;
};
