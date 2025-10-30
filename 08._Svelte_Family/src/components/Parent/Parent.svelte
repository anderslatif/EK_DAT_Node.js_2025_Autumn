<script>
    import Child from "../Child/Child.svelte";

    const { parentName, children } = $props();

    import { fridgeMessages } from "../../stores/fridgeStore.js";

    const loveHistory = $state([
        { 
            name: "self-love",
            love: "💞"
    }]);

    function handleShowLove(childsName) {
        loveHistory.push({
            name: childsName,
            love: "💞"
        });
    }

    let cookieJar = $state(["🍪", "🍪", "🍪", "🍪", "🍪"]);

    function handleEatCookie() {
        cookieJar.pop();

        if (cookieJar.length === 0) {
            cookieJar = ["🍪", "🍪", "🍪", "🍪", "🍪"]
        }
    }
</script>

<h2>{parentName}</h2>

{#each loveHistory as love}
    <span>{love.name}: {love.love}</span>   
{/each}

{#each cookieJar as cookie}
    <span>{cookie}</span>   
{/each}

<button onclick={fridgeMessages.wipe}>Wipe fridge</button>

{#each children as child (child.name)}
    <Child {...child} onShowLove={handleShowLove} onEatCookie={handleEatCookie} />
{/each}
