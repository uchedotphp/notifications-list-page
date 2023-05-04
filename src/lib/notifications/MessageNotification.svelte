<script lang="ts">
  import Avatar from "../Avatar.svelte";
  import type { NNotification } from "../types";
  export let notification = {} as NNotification;
  let showMessage = false;

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  function markAsRead() {
    dispatch("markAsRead", {
      id: notification.id,
    });
    showMessage = true;
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
  <div>
    <div class="text-left">
      <div>
        <span class="name">
          {notification.userFullName}
        </span>
        sent you a private message.
      </div>
      <div class="time">1m ago</div>
    </div>

    {#if showMessage || notification.read}
      <div
        class="mt-3 text-left text-sm rounded-md bg-light-grayish-blue-1 p-3.5"
      >
        Hello, thanks for setting up the Chess Club. I've been a member for a
        few weeks now and i'm already having lots of fun and improving my game.
      </div>
    {/if}
  </div>
</button>

<style lang="scss">
</style>
