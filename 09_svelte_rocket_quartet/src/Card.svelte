<script>
    export let rocket;
</script>

<div class="card">
    <div class="card-content">
        <div class="card-number">{rocket.group_letter}{rocket.number}</div>
        <div class="card-title">
            <div class="card-name">{rocket.name}</div>
            <div class="card-group">{rocket.group}</div>
        </div>

        <div class="rocket-image">
            <img src="voyager.webp" alt="{rocket.name}" />
        </div>
        <div class="goal-icon">Goal</div>
        <div class="rocket-info">Solar system exploration</div>

        <div class="stat-icon">year built</div>
        <div class="stat-value">1977</div>

        <div class="stat-icon">mission duration</div>
        <div class="stat-value">19000</div>

        <div class="stat-icon">max speed</div>
        <div class="stat-value">62000</div>

        <div class="stat-icon">max earth distance</div>
        <div class="stat-value">22286000</div>

        <div class="stat-icon">development cost</div>
        <div class="stat-value">250</div>

        <div class="stat-icon">weight</div>
        <div class="stat-value">773</div>
    </div>
</div>

<style>
    .card {
        height: 400px;
        width: 285px;
        background-color: rgb(255, 255, 240);
        border-radius: 15px;
        padding: 12px;
        color: #222;
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
    }

    .rocket-image {
        grid-column: span 4;
        max-width: 100%;
        max-height: 170px;
    }

    .rocket-image img {
        object-fit: cover;
        height: 100%;
        width: 100%;
    }

    .rocket-info {
        grid-column: span 3;
    }
</style>
