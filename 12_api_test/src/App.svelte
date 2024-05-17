<script>
  const api_url =
    "https://api.le-systeme-solaire.net/rest/bodies?filter[]=bodyType,eq,planet&data=englishName,semimajorAxis";
  let planets = [];

  fetchData();

  async function fetchData() {
    const response = await fetch(api_url);
    let bodyData = await response.json();
    planets = bodyData.bodies;

    console.log("planets:");
    console.log(planets);
  }

</script>

<main>
  <ul>
    {#each planets as planet}
      <li>{planet.englishName} - {planet.semimajorAxis}</li>
    {/each}
  </ul>
</main>

<style>
  ul li {
    list-style: none;
    padding: 0.5em;
    border-bottom: 1px solid #ccc;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
  }
</style>
