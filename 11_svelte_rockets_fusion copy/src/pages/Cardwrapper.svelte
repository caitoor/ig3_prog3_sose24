<script>
    import rocketData from "../data/data.js";
    import Card from "../components/Card.svelte";
</script>

<div id="rocket-card-container">
    {#each rocketData as rocket}
        <Card {rocket} />
    {/each}
</div>

<style>
    #rocket-card-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1em;
        color: #222;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;
    }
    @media screen and (max-width: 768px) {
        #rocket-card-container {
            grid-template-columns: 1fr;
            place-items: center;
        }
    }
</style>
