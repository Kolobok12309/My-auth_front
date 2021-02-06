<template>
  <div>
    <SettingsForm
      :user="user"
      :isMe="isMe"
      :pending="settingsPending"
      @submit="onSettingsUpdate"
    />

    <TokensTable
      :tokens="tokens"
      :pending="tokensPending"
      class="p-mt-3"
      @delete="onTokenDelete"
    />
  </div>
</template>

<script src="./index.js"></script>
