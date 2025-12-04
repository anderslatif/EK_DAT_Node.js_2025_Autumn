<script>
  import Colors from "./pages/Colors/Colors.svelte";
  import Registration from "./pages/Registration/Registration.svelte";

  import { onMount } from "svelte";

  import { nickname } from "./stores/nicknameStore.js";

  onMount(() => {
    const nicknameLocalStorage = localStorage.getItem("nickname");
    if (nicknameLocalStorage) {
      // nickname.set(nicknameLocalStorage);
    }
  });

</script>

{#if !$nickname}
  <Registration />
{:else}
  <Colors />
{/if}