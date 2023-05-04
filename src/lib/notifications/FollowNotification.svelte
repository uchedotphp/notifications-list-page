<script lang="ts">
  import Avatar from "../Avatar.svelte";
  import type { NNotification } from "../types";
  export let notification = {} as NNotification;

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  function markAsRead() {
    dispatch("markAsRead", {
      id: notification.id,
    });
  }
</script>

<button
  class="notification"
  class:unread={!notification.read}
  on:click|once={markAsRead}
>
  <div class="mr-4">
    <Avatar imgUrl={notification.imgUrl} />
  </div>
  <div class="text-left">
    <div>
      <span class="name">
        {notification.userFullName}
      </span>
      followed you.
    </div>
    <div class="time">1m ago</div>
  </div>
</button>

<style lang="scss">
</style>
