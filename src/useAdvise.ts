import { useEffect, useState } from "react";
import Advice from "./advice";

export enum DataState {
  empty,
  loading,
  error,
  data,
}

export default function useAdvice() {
  const [fetchAdviseStatus, setFetchAdviseStatus] = useState<DataState>(
    DataState.empty
  );
  const [adviceData, setAdviceData] = useState<Advice>();
  const fetchAdvise = async () => {
    try {
      setFetchAdviseStatus(DataState.loading);
      const response = await globalThis.fetch(
        "https://api.adviceslip.com/advice"
      );
      setFetchAdviseStatus(DataState.data);
      const jsonResponse = await response.json();
      setAdviceData(Advice.fromJson(jsonResponse.slip));
    } catch (error) {
      setFetchAdviseStatus(DataState.error);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAdvise();
  }, []);
  return {
    fetchAdviseStatus,
    adviceData,
    fetchAdvise,
  };
}
