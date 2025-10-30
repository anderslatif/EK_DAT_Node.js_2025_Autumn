<script>
    const { parentName, children } = $props();
</script>

<h2>{parentName}</h2>

{#each children as child (child.name)}
    <h3>{child.name}</h3>
{/each}