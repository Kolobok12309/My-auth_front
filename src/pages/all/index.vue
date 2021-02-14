<template>
  <div class="all-page p-grid p-mx-0">
    <div class="p-col-12 p-xl-8 p-offset-0 p-xl-offset-2">
      <Menubar
        :model="toolbarItems"
        class="p-mb-3"
      />

      <router-view v-slot="{ Component }">
        <keep-alive max="3">
          <component
            :is="Component"
            :key="$route.fullPath"
          />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script src="./index.js"></script>
