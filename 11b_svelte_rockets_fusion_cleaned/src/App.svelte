<script>
  import Router from "svelte-spa-router";
  import Header from "./components/Header.svelte";
  import Tablewrapper from "./pages/Tablewrapper.svelte";
  import Cardwrapper from "./pages/Cardwrapper.svelte";

  const routes = {
    "/": Cardwrapper,
    "/table": Tablewrapper,
  };
</script>

<div id="wrapper">
  <Header />
  <nav>
    <ul>
      <li><a href="#/">Kartenübersicht</a></li>
      <li><a href="#/table">Raketentabelle</a></li>
    </ul>
  </nav>
  <main>
    <Router {routes} />
  </main>
</div>

<style>
  #wrapper {
    max-width: 1228px;
    margin: auto;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #222;
    padding: 1em;
  }

  nav {
    width: 100%;
  }

  nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  nav ul li {
    margin: 0 1em;
  }

  nav ul li a {
    color: white;
    text-decoration: none;
  }

</style>
