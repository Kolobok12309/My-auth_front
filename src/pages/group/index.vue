<template>
  <div class="group-page p-grid p-mx-0">
    <div class="p-col-12 p-md-4 p-xl-2 p-offset-0 p-xl-offset-2">
      <Card>
        <template #title>
          <div class="p-d-flex p-ai-center">
            <span class="p-mr-2">
              Информация
            </span>

            <Button
              v-if="isDirector || isAdmin"
              icon="pi pi-cog"
              class="p-button-secondary p-button-sm p-button-text p-button-rounded p-ml-auto"
              @click="toggleEdit"
            />
          </div>
        </template>

        <template #content>
          <SkeletonHelper :pending="pending">
            <form
              v-show="isEdit"
              @submit.prevent="onSubmit"
            >
              <div class="p-inputgroup">
                <InputText
                  v-model="form.name"
                  placeholder="Название"
                />

                <Button
                  icon="pi pi-search"
                  type="submit"
                />
              </div>
            </form>

            <span v-show="!isEdit">
              Название: {{ group.name }}
            </span>
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
            :pending="pending"
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
