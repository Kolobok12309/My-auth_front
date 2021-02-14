<template>
  <div class="group-page p-grid p-mx-0">
    <div class="p-col-12 p-md-4 p-xl-2 p-offset-0 p-xl-offset-2">
      <Card>
        <template #title>
          Информация
        </template>

        <template #content>
          <SkeletonHelper :pending="pending">
            Название: {{ group.name }}
          </SkeletonHelper>
        </template>
      </Card>
    </div>

    <div class="group-page__center p-col-12 p-md-8 p-xl-6">
      <Menubar
        :model="toolbarItems"
        class="p-mb-3"
      />

      <div class="group-page__center__content">
        <SpinnerHelper
          :pending="pending"
          class="p-mx-auto p-mt-6"
        >
          <router-view
            :group="group"
            @update="onUpdate"
            v-slot="{ Component }"
          >
            <keep-alive max="2">
              <component
                :is="Component"
                :key="$route.fullPath"
              />
            </keep-alive>
          </router-view>
        </SpinnerHelper>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style
  src="./index.styl"
  lang="stylus"
  scoped
></style>
