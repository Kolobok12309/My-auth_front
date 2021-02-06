<template>
  <div>
    <TokensTable
      :tokens="tokens"
      :pending="tokensPending"
      @delete="onTokenDelete"
    />
  </div>
</template>

<script src="./index.js"></script>
