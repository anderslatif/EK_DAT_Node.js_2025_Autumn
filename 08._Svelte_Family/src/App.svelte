<script>
  import Home from './components/Home/Home.svelte';
  import Parent from './components/Parent/Parent.svelte';

  const parents = ["Henning", "Dorthe"];

  const children = [
    {
      name: "Ib",
      familySheep: "black-sheep"
    },
    {
      name: "Kurt",
      familySheep: "grey-sheep"
    },
    {
      name: "Lone",
      isGirl: true
    }
  ];

</script>


<Home>
  <Parent parentName={parents[0]} children={children} />
  <Parent parentName={parents[1]} children={children} />
</Home>
