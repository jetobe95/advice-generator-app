import "./App.css";
import useAdvice, { DataState } from "./useAdvise";

function App() {
  const { adviceData, fetchAdvise, fetchAdviseStatus } = useAdvice();

  if (fetchAdviseStatus === DataState.error) {
    return <p>Error fetching advice</p>;
  }
  return (
    <main className="advice">
      {fetchAdviseStatus === DataState.loading ? (
        <p>Loading advice...</p>
      ) : (
        <>
          <p className="advice__indicator">ADVISE # {adviceData?.id}</p>
          <h1 className="advice__text">“{adviceData?.advice}”</h1>
        </>
      )}

      <div className="advice__divider" />
      <button
        className="advice__button"
        aria-label="load new advice"
        onClick={fetchAdvise}
      />
    </main>
  );
}

export default App;
