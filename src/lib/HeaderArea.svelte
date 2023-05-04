<script lang="ts">
  import type { NNotification } from "./types";
  export let notifications: NNotification[] = [];

  $: unreadNotificationsCount = notifications.filter((n) => !n.read).length;

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  function clearAllNotifications() {
    dispatch("clearAllNotifications");
  }
</script>

<header class="header">
  <span class="title"> Notifications </span>
  <span class="badge"> {unreadNotificationsCount} </span>

  <button class="clear" on:click={clearAllNotifications}
    >Mark all as read</button
  >
</header>

<style lang="scss">
  .header {
    @apply sticky top-0 flex items-center bg-np-white pt-6 pb-4 z-10;
    .title {
      @apply font-bold text-very-dark-blue;
    }

    .badge {
      @apply bg-np-blue text-np-white px-2 py-0.5 rounded text-xs font-extrabold ml-1;
    }

    .clear {
      @apply text-xs ml-auto;
    }
  }
</style>
