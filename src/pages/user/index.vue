<template>
  <div class="user-page p-grid p-mx-0">
    <div class="p-col-12 p-md-4 p-xl-2 p-offset-0 p-xl-offset-2">
      <Card>
        <template #title>
          Информация
        </template>

        <template #content>
          <SkeletonHelper :pending="pending">
            Логин: {{ user.username }}
          </SkeletonHelper>

          <Divider />

          <SkeletonHelper :pending="pending">
            E-mail:

            <a :href="'mailto:' + user.email">
              {{ user.email }}
            </a>
          </SkeletonHelper>

          <Divider />

          <SkeletonHelper :pending="pending">
            <template v-if="user.group">
              Отдел:

              <Group :group="user.group" />
            </template>
          </SkeletonHelper>

          <Divider v-if="pending || user.group" />

          <SkeletonHelper :pending="pending">
            <Role :value="user.role" />
          </SkeletonHelper>
        </template>
      </Card>
    </div>

    <div class="user-page__center p-col-12 p-md-8 p-xl-6">
      <Menubar
        :model="toolbarItems"
        class="p-mb-3"
      />

      <div class="user-page__center__content">
        <SpinnerHelper
          :pending="pending"
          class="p-mx-auto p-mt-6"
        >
          <router-view
            :user="user"
            :isMe="isMe"
            :pending="pending"
          />
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
