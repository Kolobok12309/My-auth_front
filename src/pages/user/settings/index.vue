<template>
  <div>
    <SettingsForm
      :user="user"
      :isMe="isMe"
      :pending="settingsPending"
      @submit="onSettingsUpdate"
    />

    <PasswordBlock
      ref="password"
      :pending="passwordPending"
      :isMe="isMe"
      class="p-mt-3"
      @submit="onPasswordUpdate"
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
