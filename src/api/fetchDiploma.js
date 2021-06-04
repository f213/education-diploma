import axios from "axios";

export default async ({ slug }) => {
  const result = await axios.get(`/api/v2/diplomas/${slug}/`);
  return result.data;
};
