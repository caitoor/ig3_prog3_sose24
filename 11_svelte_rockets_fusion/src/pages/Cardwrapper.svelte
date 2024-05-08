<script>
    import rocketData from "../data/data.js";
    import Card from "../components/Card.svelte.js";
</script>

<div id="rocket-card-container">
    {#each rocketData as rocket}
        <Card {rocket} />
    {/each}
</div>

<style>
    #rocket-card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    }
</style>
