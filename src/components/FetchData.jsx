const FetchData = async function (query) {
  try {
    const res = await fetch(
      `https://pixabay.com/api/?key=39580293-dd0e228176b2a417700cf62ea&q=${query}&image_type=photo`,
      {
        method: "GET",
      }
    );
    const data = await res.json();

    const imgs = await data.hits;

    return imgs;
  } catch (error) {
    throw err;
  }
};

export default FetchData;
