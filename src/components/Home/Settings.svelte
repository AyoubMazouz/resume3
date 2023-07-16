<script>
  import Slider from "../../components/slider.svelte";
  import { EFFECT_PARAMS } from "../../constants";
  import settingsStore from "../../stores/settingsStore";
</script>

<div class="space-y-4">
  <div class="space-y-4">
    {#each EFFECT_PARAMS as param}
      <div class="space-y-1">
        <label for={param.id}>{param.name}:</label>
        <Slider
          id={param.id}
          min={param.min}
          max={param.max}
          step={param.step}
          bind:value={$settingsStore[param.id]}
        />
      </div>
    {/each}
  </div>
</div>
