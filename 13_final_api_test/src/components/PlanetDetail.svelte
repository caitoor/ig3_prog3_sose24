<script>
    import { push } from "svelte-spa-router";
    export let params;
    let planetName;
    let moons = [];

    async function fetchPlanetData() {
        const planetId = params.planetId;

        const response = await fetch(
            `https://api.le-systeme-solaire.net/rest/bodies/${planetId}`,
        );
        const data = await response.json();
        moons = data.moons;
        planetName = data.englishName;
    }

    fetchPlanetData();

    function goBack() {
        push("/");
    }
</script>

<h1>Moons of {planetName}</h1>
<button on:click={goBack}>Zurück</button>
<ul>
    {#each moons as moon}
        <li>{moon.moon}</li>
    {/each}
</ul>
