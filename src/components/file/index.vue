<template>
  <Card class="file">
    <template #content>
      <div class="p-d-flex">
        <i class="pi pi-file p-mr-3" />

        <span class="p-mr-auto">
          {{ name }}
        </span>

        <a
          :href="url"
          download
          class="file__link"
        >
          <i
            class="pi pi-download"
          />
        </a>
      </div>
    </template>
  </Card>
</template>

<script src="./index.js"></script>

<style
  src="./index.styl"
  lang="stylus"
></style>
