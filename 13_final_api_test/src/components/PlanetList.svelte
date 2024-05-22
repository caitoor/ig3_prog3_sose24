<script>
    import { sortPlanets } from "../utils";
    import { sortKey, sortDirection } from "../store";
    let planets = [];
    console.log($sortKey);
    async function fetchPlanetData() {
        try {
            const response = await fetch(
                "https://api.le-systeme-solaire.net/rest/bodies?filter[]=bodyType,eq,planet&data=id,englishName,semimajorAxis,meanRadius,gravity,sideralOrbit",
            );
            const data = await response.json();
            planets = data.bodies;
            planets = [...sortPlanets(planets, $sortKey, $sortDirection)];
        } catch (error) {
            console.error("Error fetching planet data:", error);
        }
    }
    fetchPlanetData();

    function handleSort(key) {
        if (key === $sortKey) {
            if ($sortDirection === "asc") $sortDirection = "desc";
            else {
                $sortDirection === "asc";
            }
        } else {
            $sortKey = key;
            $sortDirection = "asc";
        }
        planets = [...sortPlanets(planets, $sortKey, $sortDirection)];
    }
</script>

<table>
    <thead>
        <tr>
            <th>Planet</th>
            <th>Semimajor Axis</th>
            <th>Mean Radius</th>
            <th on:click={() => handleSort("gravity")}>Gravity</th>
            <th>Sideral Orbit</th>
        </tr>
    </thead>
    <tbody>
        {#each planets as planet}
            <tr>
                <td>
                    <a href="#/planet/{planet.id}">
                        {planet.englishName}
                    </a>
                </td>
                <td>{planet.semimajorAxis}</td>
                <td>{planet.meanRadius}</td>
                <td>{planet.gravity}</td>
                <td>{planet.sideralOrbit}</td>
            </tr>
        {/each}
    </tbody>
</table>
