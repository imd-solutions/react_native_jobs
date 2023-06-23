import { useState, useEffect } from "react";
import API from "./../utils/api";

const useFetch = (url: string, query: any | null) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any | null>(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await API.get(url);
      setData(response.data);
      setIsLoading(false);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
