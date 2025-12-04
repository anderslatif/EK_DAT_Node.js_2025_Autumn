<script>
    import io from 'socket.io-client';

    import { onMount } from 'svelte';

    let colorInputValue = "#0000ff";
    let socket;

    onMount(() => {
        socket = io("http://localhost:8080");

        socket.on("server-sends-color", (data) => {
            // don't actually do this, do it in the Svelte way instead
            document.body.style.backgroundColor = data.color;
        });
    });

    function submitColor() {
        socket.emit("client-sends-color", { color: colorInputValue });
    }
</script>

<h2>Colors</h2>

<input type="color" bind:value={colorInputValue}>
<button onclick={submitColor}>Submit Color</button>