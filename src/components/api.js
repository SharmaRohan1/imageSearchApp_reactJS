import axios from "axios";

const imageSearch = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID _wzO5kEb5qWGZioSRPyNwxsxGkbn0GUt6qcRbRjmXak"
    },
    params: {
      query: term
    }
  });

  return response.data.results;
};

export default imageSearch;
