import "./App.css";

async function App() {
  const res = await fetch("https://api.discogs.com/releases/249504");
  const data = await res.json();
  return (
    <>
      <h1>{data.artists_sort}</h1>
      <h2>{data.title}</h2>
      <a href={data.uri}>{data.uri}</a>
    </>
  );
}

export default App;
