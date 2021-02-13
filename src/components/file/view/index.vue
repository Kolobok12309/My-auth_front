<template>
  <Card class="file">
    <template #content>
      <div class="p-d-flex">
        <i class="pi pi-file p-mr-3" />

        <span class="p-mr-auto">
          {{ file.name }}
        </span>

        <div class="file__actions">
          <a
            :href="url"
            download
            class="file__actions__link"
          >
            <i class="pi pi-download" />
          </a>

          <a
            v-if="canRemove"
            href="#"
            class="file__actions__remove"
            @click="onRemove"
          >
            <i class="pi pi-trash" />
          </a>
        </div>
      </div>
    </template>
  </Card>
</template>

<script src="./index.js"></script>

<style
  src="./index.styl"
  lang="stylus"
></style>
