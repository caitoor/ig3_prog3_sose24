$(document).ready(function () {
    const wrapper = $('#cards-wrapper');
    rocketData.forEach(rocket => {
        const card =
            $(`<div class="card">
        <div class="card-content">
            <div class="card-number center-content border-right">${rocket.group_letter}${rocket.number}</div>
            <div class="card-title">
                <div class="card-name">${rocket.name}</div>
                <div class="card-group">${rocket.group}</div>
            </div>
    
            <div class="rocket-image">
                <img src="images/${rocket.group_letter.toLowerCase()}${rocket.number}.jpg" alt="Voyager 1">
            </div>
            <div class="goal-icon center-content border-right border-bottom">Goal</div>
            <div class="rocket-info border-bottom">${rocket.mission_goal}</div>
    
            <div class="stat-icon">
                <span class="material-symbols-outlined">precision_manufacturing</span>
            </div>
            <div class="stat-value">${rocket.year_built}</div>
    
            <div class="stat-icon">
                <span class="material-symbols-outlined">timer</span>
            </div>
            <div class="stat-value">${decimalSeparators(rocket.mission_duration)}</div>
    
            <div class="stat-icon">
                <span class="material-symbols-outlined">speed</span>
            </div>
            <div class="stat-value">${decimalSeparators(rocket.max_speed)}</div>
    
            <div class="stat-icon">
                <span class="material-symbols-outlined">public</span>
            </div>
            <div class="stat-value">${decimalSeparators(shortenBigValue(rocket.max_earth_distance))}</div>
    
            <div class="stat-icon bottom-left-radius">
                <span class="material-symbols-outlined">savings</span>
            </div>
            <div class="stat-value">${decimalSeparators(rocket.development_cost)}</div>
    
            <div class="stat-icon">
                <span class="material-symbols-outlined">weight</span>
            </div>
            <div class="stat-value">${decimalSeparators(rocket.weight)}</div>
    
        </div>
    </div>`);
        wrapper.append(card);
    });
});