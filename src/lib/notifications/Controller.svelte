<script lang="ts">
  import PostNotification from "./PostNotification.svelte";
  import PictureNotification from "./PictureNotification.svelte";
  import FollowNotification from "./FollowNotification.svelte";
  import GroupNotification from "./GroupNotification.svelte";
  import MessageNotification from "./MessageNotification.svelte";

  import type { NNotification } from "../types";
  export let notification = {} as NNotification;
</script>

{#if notification.category === "post"}
  <PostNotification {notification} on:markAsRead />
{:else if notification.category === "picture"}
  <PictureNotification {notification} on:markAsRead />
{:else if notification.category === "follow"}
  <FollowNotification {notification} on:markAsRead />
{:else if notification.category === "group"}
  <GroupNotification {notification} on:markAsRead />
{:else if notification.category === "message"}
  <MessageNotification {notification} on:markAsRead />
{:else}
  <p class="text-center">Something went wrong</p>
{/if}

<style lang="scss">
</style>
