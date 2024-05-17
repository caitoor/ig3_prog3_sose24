<script>
    import rocketData from "../data/data";
    import Rocketrow from "../components/Rocketrow.svelte";
</script>

<div id="overview-wrapper">
    <table>
        <thead
            ><tr>
                <th>#</th>
                <th class="text-left">Name</th>
                <th class="text-left">Group</th>
                <th
                    ><span class="material-symbols-outlined"
                        >precision_manufacturing</span
                    ></th
                >
                <th class="hide-mobile"
                    ><span class="material-symbols-outlined">timer</span></th
                >
                <th class="hide-mobile"
                    ><span class="material-symbols-outlined">speed</span></th
                >
                <th class="hide-mobile"
                    ><span class="material-symbols-outlined">public</span></th
                >
                <th class="hide-mobile"
                    ><span class="material-symbols-outlined">savings</span></th
                >
                <th class="hide-mobile"
                    ><span class="material-symbols-outlined">weight</span></th
                ></tr
            >
        </thead>
        <tbody>
            {#each rocketData as currentRocketItem}
                <Rocketrow rocket={currentRocketItem} />
            {/each}
        </tbody>
    </table>
</div>

<style>
    #overview-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    table {
        border-collapse: collapse;
        width: 100%;
    }

    tr {
        transition: all 0.1s;
        cursor: pointer;
    }

    th {
        padding: 0.5em;
        text-align: center;
        background-color: rgb(65, 0, 112);
        color: white;
    }

    .text-left {
        text-align: left;
    }

    @media screen and (max-width: 768px) {
        #overview-wrapper {
            max-width: 100%;
        }
    }
</style>
