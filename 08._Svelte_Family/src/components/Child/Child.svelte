<script>
    const { name, familySheep, isGirl, onShowLove } = $props();
</script>

<div
    class={familySheep || "not-a-sheep"}
    class:is-girl={isGirl}
    class:is-boy={!isGirl}
>
    <h3>{name}</h3>
</div>

<button onclick={() => onShowLove(name)}>Show your parent some love</button>


<style>
    .black-sheep {
        background-color: crimson;
    }

    .grey-sheep {
        background-color: navajowhite;
    }

    .not-a-sheep {
        background-color: yellowgreen;
    }

    .is-girl {
        border: 0.5em solid rebeccapurple;
    }

    .is-boy {
        border: 0.5em solid cadetblue;
    }
</style>