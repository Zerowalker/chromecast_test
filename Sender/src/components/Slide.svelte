<script>
  let scheme = [];

  scheme.push({ name: "Måndag", description: "gnu" });
  scheme.push({ name: "Tisdag", description: "gnu" });
  scheme.push({ name: "Onsdag", description: "gnu" });
  scheme.push({ name: "Torsdag", description: "gnu" });
  scheme.push({ name: "Fredag", description: "gnu" });
</script>

<style>
  table,td {
    border-collapse: collapse;
    border-style: solid;
    border-width: thin;
  }
  #main{
      align-content: center;
      display:flex;
      justify-content: center;
  }
  #scheme{
      margin:2vw;
      width:100%;
      height:100%;
      font-size: 4vh;
  }
 tr{
    height:6vh;
  }
  #day{
width:5em;
  }
</style>
<div id="main">
<table id="scheme">
  {#each scheme as item}
    <tr class="row">
      <td id="day">{item.name}</td>
      <td>{item.description}</td>
    </tr>
  {/each}
</table>
</div>