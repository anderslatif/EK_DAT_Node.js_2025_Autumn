<script>
    import { fridgeMessages } from "../../stores/fridgeStore.js";

</script>


<slot></slot>

{#each $fridgeMessages as fridgeMessage}
    <p>{fridgeMessage}</p>
{/each}

<h2 id="welcome-mat">Velkommen til måtten</h2>


<style>
    #welcome-mat {
        color: black;
        background-color: azure;
        border-radius: 0 0 2em 2em;
        padding: 2em;
    }
</style>