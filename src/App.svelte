<script lang="ts">
  import { onMount } from "svelte";
  const newTitle = "New Site Title";
  onMount(() => {
    document.title = "Notifications Page";
  });

  import HeaderArea from "./lib/HeaderArea.svelte";
  import Notifications from "./lib/notifications/Controller.svelte";
  import { notifications } from "./lib/notifications";
  let serveNotifications = notifications;
  $: watchedNotifications = serveNotifications;

  function clearAllNotifications() {
    serveNotifications.map((n) => (n.read = true));
    serveNotifications = serveNotifications;
  }

  function markAsRead(event: any) {
    const index = event.detail.id;
    const notification = serveNotifications.find((n) => n.id === index);
    if (notification) {
      notification.read = true;
    }
    serveNotifications = serveNotifications;
  }
</script>

<div class="main-container">
  <HeaderArea
    notifications={serveNotifications}
    on:clearAllNotifications={clearAllNotifications}
  />

  <main class="notifications">
    {#each watchedNotifications as notification}
      <div>
        <Notifications {notification} on:markAsRead={markAsRead} />
      </div>
    {/each}
  </main>
</div>

<style lang="scss">
  .main-container {
    @apply bg-np-white h-screen sm:h-auto md:min-h-[85vh] md:max-h-[85vh] sm:max-w-[60vw] lg:max-w-[42vw] w-screen overflow-y-auto md:rounded-lg px-4 sm:px-5;
  }
</style>
