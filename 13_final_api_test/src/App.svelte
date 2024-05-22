<script>
  import Router from "svelte-spa-router";
  import PlanetList from "./components/PlanetList.svelte";
  import PlanetDetail from "./components/PlanetDetail.svelte";

  const routes = {
    "/": PlanetList,
    "/planet/:planetId": PlanetDetail,
  };
</script>

<main>
  <Router {routes} />
</main>

<style>

</style>
