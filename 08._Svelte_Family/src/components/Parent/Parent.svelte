<script>
    import Child from "../Child/Child.svelte";

    const { parentName, children } = $props();

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

    const cookieJar = $state(["🍪", "🍪", "🍪", "🍪", "🍪"]);

    /* 
    assignment: allow children to eat a cookie from the jar
    bonus: if the jar is empty, let the parent fill it
 */
</script>

<h2>{parentName}</h2>

{#each loveHistory as love}
    <span>{love.name}: {love.love}</span>   
{/each}


{#each children as child (child.name)}
    <Child {...child} onShowLove={handleShowLove} />
{/each}
