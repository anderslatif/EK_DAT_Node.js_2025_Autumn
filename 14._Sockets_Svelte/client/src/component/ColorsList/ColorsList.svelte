<script>
    import { colorsList } from "../../stores/colorsList.js";
</script>

{#each $colorsList as colorsListItem}
    <p style="background-color: {colorsListItem.color}">{colorsListItem.nickname}</p>
{/each}