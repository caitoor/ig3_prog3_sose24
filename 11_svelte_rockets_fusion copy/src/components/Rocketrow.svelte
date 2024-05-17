<script>
    export let rocket;

    function shortenBigValue(input) {
        if (input > 1000000) {
            return `${Math.round(input / 1000000)}M`;
        } else if (input > 1000) {
            return `${Math.round(input / 1000)}K`;
        } else {
            return input;
        }
    }

    function decimalSeparators(input) {
        return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
    }
</script>

<tr>
    <td class="text-left">{rocket.group_letter}{rocket.number}</td>
    <td class="text-left">{rocket.name}</td>
    <td class="text-left">{rocket.group}</td>
    <td>
        {rocket.year_built}
    </td>
    <td class="hide-mobile">
        {decimalSeparators(rocket.mission_duration)}
    </td>
    <td class="hide-mobile">
        {decimalSeparators(rocket.max_speed)}
    </td>
    <td class="hide-mobile">
        {decimalSeparators(shortenBigValue(rocket.max_earth_distance))}
    </td>
    <td class="hide-mobile">
        {decimalSeparators(rocket.development_cost)}
    </td>
    <td class="hide-mobile">
        {decimalSeparators(rocket.weight)}
    </td>
</tr>

<style>
    td {
        padding: 0.5em;
        text-align: center;
    }
    .text-left {
        text-align: left;
    }
</style>
