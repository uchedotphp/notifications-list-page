<script lang="ts">
  import ImageChess from '../../assets/images/image-chess.webp'
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
    <Avatar imgUrl={notification.imgUrl} id={notification.id} />
  </div>
  <div class="text-left w-full">
    <div class="flex justify-between w-full">
      <div>
        <span class="name">
          {notification.userFullName}
        </span>
        commented on your picture
        <div class="time">1m ago</div>
      </div>
      <img
        class="inline-block h-10 w-10 rounded-md ml-auto"
        src={ImageChess}
        alt="random chess person"
      />
    </div>
  </div>
</button>

<style lang="scss">
</style>
