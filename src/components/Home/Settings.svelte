<script>
  import { quintInOut } from "svelte/easing";
  import Slider from "../../components/slider.svelte";
  import { EFFECT_PARAMS } from "../../constants";
  import settingsStore from "../../stores/settingsStore";
  import { fade } from "svelte/transition";
</script>

<div
  in:fade={{ delay: 200, duration: 200, easing: quintInOut }}
  out:fade={{ duration: 200, easing: quintInOut }}
  class="space-y-4"
>
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
