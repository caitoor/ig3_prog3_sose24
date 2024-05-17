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
    width: 1200px;
    margin: auto;
  }

  nav ul {
    display: flex;
    list-style: none;
  }

  nav ul li {
    margin-right: 20px;
  }

  nav ul li a {
    color: #fff;
    text-decoration: none;
  }
</style>
