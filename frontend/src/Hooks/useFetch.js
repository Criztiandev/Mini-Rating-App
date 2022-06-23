import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = async (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async (_url) => {
      try {
        const response = await axios.get(_url);
        setData(response.data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(e);
      }
    };

    fetchData(url);
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
