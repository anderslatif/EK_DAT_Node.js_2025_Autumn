<script>
    import { onMount } from 'svelte';
    import { fetchGet, fetchPost } from '../../util/fetchUtil.js';

    let housingMarket;

    onMount(async () => {
        const result = await fetchGet("/houses")
        housingMarket = result.data;
        // fetch("http://localhost:8080/houses", {
        //     credentials: "include"
        // })
        // .then((response) => response.json())
        // .then((result) => {
        //     housingMarket = result.data;
        // });
    });

    
    async function addHouse() {
        const newHouse = {
            street: "Ugandavej"
        };
        // fetch("http://localhost:8080/houses", {
        //     method: "POST",
        //     credentials: "include",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(newHouse)
        // })
        // .then((response) => response.json())
        // .then((result) => {
        //     housingMarket = result.data;
        // });
        const result = await fetchPost("/houses", newHouse);
        console.log("result", result);
        housingMarket = result.data;
    }
</script>

<h1>Housing Market</h1>
<h2>📈</h2>

<button onclick={addHouse}>Add a new house</button>

{#each housingMarket as house}
    <h4>{house.street}</h4>
{/each}