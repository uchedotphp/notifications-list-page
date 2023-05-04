<script lang="ts">
  import buffer from "../assets/images/buffer.svg";
  export let id = 1;
  export let imgUrl = "";

  // import picture from "../assets/images/"+ imgUrl
  let isImgLoaded = false;

  function onImgLoad() {
    isImgLoaded = true;
  }
</script>

<div class="group block flex-shrink-0">
  <div class="flex items-center">
    <div
      class="aspect-w-1 aspect-h-1 overflow-hidden rounded-full bg-gray-100 h-9 relative"
    >
      {#if imgUrl.length}
        <img
          on:load={onImgLoad}
          class="img"
          src="{imgUrl}"
          alt="random unsplash"
          class:blur={!isImgLoaded}
        />
      {:else}
        <img
          on:load={onImgLoad}
          class="img"
          src="https://source.unsplash.com/random/{id ? Number(id) : ''}"
          alt="random unsplash"
          class:blur={!isImgLoaded}
        />
        {#if !isImgLoaded}
          <div class="absolute">
            <div class="imageLoader">
              <img src={buffer} alt="buffer" class="svg" />
            </div>
          </div>
        {/if}
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  .imageLoader {
    @apply inset-0 grid place-content-center;
    .svg {
      @apply w-9 h-9 animate-spin fill-dark-grayish-blue text-np-white;
    }
  }
  .img {
    @apply object-cover object-center w-9 h-9;
  }
</style>
