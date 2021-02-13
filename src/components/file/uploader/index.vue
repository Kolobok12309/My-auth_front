<template>
  <FileUpload
    ref="uploader"
    customUpload
    multiple
    @uploader="uploader"
  >
    <template #empty>
      Перетащите файлы сюда
    </template>
  </FileUpload>
</template>

<script src="./index.js"></script>
