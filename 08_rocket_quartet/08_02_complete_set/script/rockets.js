$(document).ready(function () {
    const wrapper = $('#overview-wrapper');
    const table = $(`
    <table>
        <thead><tr>
            <th>#</th>
            <th class="text-left">Name</th>
            <th class="text-left">Group</th>
            <th><span class="material-symbols-outlined">precision_manufacturing</span></th>
            <th class="hide-mobile"><span class="material-symbols-outlined">timer</span></th>
            <th class="hide-mobile"><span class="material-symbols-outlined">speed</span></th>
            <th class="hide-mobile"><span class="material-symbols-outlined">public</span></th>
            <th class="hide-mobile"><span class="material-symbols-outlined">savings</span></th>
            <th class="hide-mobile"><span class="material-symbols-outlined">weight</span></th></tr>
        </thead>
        <tbody></tbody>
    </table>`);

    rocketData.forEach(rocket => {
        const card =
            $(`<tr>
                    <td class="text-left">${rocket.group_letter}${rocket.number}</td>
                    <td class="text-left">${rocket.name}</td>
                    <td class="text-left">${rocket.group}</td>
                    <td>${rocket.year_built}</td>
                    <td class="hide-mobile">${decimalSeparators(rocket.mission_duration)}</td>
                    <td class="hide-mobile">${decimalSeparators(rocket.max_speed)}</td>
                    <td class="hide-mobile">${decimalSeparators(shortenBigValue(rocket.max_earth_distance))}</td>
                    <td class="hide-mobile">${decimalSeparators(rocket.development_cost)}</td>
                    <td class="hide-mobile">${decimalSeparators(rocket.weight)}</td>
                </tr>`);
        table.find('tbody').append(card);
    });
    wrapper.append(table);
});
