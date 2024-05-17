<script>
    export let rocket;
    import { decimalSeparators, shortenBigValue } from '../utils';
</script>

<div class="card">
    <div class="card-content">
        <div class="card-number center-content border-right">
            {rocket.group_letter}{rocket.number}
        </div>
        <div class="card-title">
            <div class="card-name">{rocket.name}</div>
            <div class="card-group">{rocket.group}</div>
        </div>

        <div class="rocket-image">
            <img
                src="{rocket.group_letter.toLowerCase()}{rocket.number}.jpg"
                alt="Voyager 1"
            />
        </div>
        <div class="goal-icon center-content border-right border-bottom">
            Goal
        </div>
        <div class="rocket-info border-bottom">{rocket.mission_goal}</div>

        <div class="stat-icon">
            <span class="material-symbols-outlined"
                >precision_manufacturing</span
            >
        </div>
        <div class="stat-value">{rocket.year_built}</div>

        <div class="stat-icon">
            <span class="material-symbols-outlined">timer</span>
        </div>
        <div class="stat-value">
            {decimalSeparators(rocket.mission_duration)}
        </div>

        <div class="stat-icon">
            <span class="material-symbols-outlined">speed</span>
        </div>
        <div class="stat-value">{decimalSeparators(rocket.max_speed)}</div>

        <div class="stat-icon">
            <span class="material-symbols-outlined">public</span>
        </div>
        <div class="stat-value">
            {decimalSeparators(shortenBigValue(rocket.max_earth_distance))}
        </div>

        <div class="stat-icon bottom-left-radius">
            <span class="material-symbols-outlined">savings</span>
        </div>
        <div class="stat-value">
            {decimalSeparators(rocket.development_cost)}
        </div>

        <div class="stat-icon">
            <span class="material-symbols-outlined">weight</span>
        </div>
        <div class="stat-value">{decimalSeparators(rocket.weight)}</div>
    </div>
</div>

<style>
    .center-content,
    .stat-value,
    .stat-icon {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .border-right {
        border-right: 2px solid #222;
    }

    .border-bottom {
        border-bottom: 2px solid #222;
    }

    .card {
        height: 400px;
        width: 285px;
        background-color: rgb(255, 255, 240);
        border-radius: 15px;
        padding: 12px;
        transition: transform 0.15s;
    }

    .card:hover {
        transform: scale(1.01);
    }

    .card-content {
        border: 3px solid #222;
        height: 100%;
        border-radius: 10px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr 4fr 1fr 1fr 1fr 1fr;
    }

    .card-title {
        grid-column: span 3;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding: 0.25em 0.5em;
        background-color: rgb(227, 188, 255);
        border-top-right-radius: 6px;
    }

    .card-number {
        font-weight: bold;
        font-size: 1.25em;
        background-color: rgb(65, 0, 112);
        border-top-left-radius: 6px;
        color: white;
    }

    .card-name {
        font-weight: bold;
        text-wrap: nowrap;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .card-group {
        font-size: 0.75em;
    }

    .rocket-image {
        grid-column: span 4;
        max-width: 100%;
        max-height: 170px;
        border-top: 2px solid #222;
        border-bottom: 2px solid #222;
    }

    .rocket-image img {
        object-fit: cover;
        height: 100%;
        width: 100%;
    }

    .goal-icon {
        text-transform: uppercase;
        font-weight: bold;
        background-color: rgb(65, 0, 112);
        color: white;
        font-size: 0.85em;
        border-right: 2px solid #222;
    }

    .rocket-info {
        grid-column: span 3;
        display: flex;
        align-items: center;
        font-size: 0.75em;
        padding-left: 0.5em;
        font-style: italic;
    }

    .stat-icon {
        background-color: rgb(220, 216, 227);
    }

    .bottom-left-radius {
        border-bottom-left-radius: 6px;
    }
</style>
