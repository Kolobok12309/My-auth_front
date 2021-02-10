<template>
  <Card class="task-main">
    <template #title>
      <SkeletonHelper
        :pending="pending"
        style="height: 1.5rem"
      >
        <div class="p-d-flex">
          <span>
            {{ task.title }} #{{ task.id }}
          </span>

          <StatusView
            :value="task.status"
            class="p-ml-auto"
          />
        </div>
      </SkeletonHelper>
    </template>

    <template #subtitle>
      <SkeletonHelper :pending="pending">
        Создана

        <UserView :user="task.createdBy" />

        в

        {{ task.createdAt }}
      </SkeletonHelper>

      <Divider />
    </template>

    <template #content>
      <template v-if="pending">
        <Skeleton />

        <Skeleton class="p-mt-2" />

        <Skeleton class="p-mt-2" />
      </template>

      <template v-else>
        <span>
          {{ task.description }}
        </span>

        <template v-if="task.files.length">
          <Divider />

          <div class="task-main__files">
            <File
              v-for="file in task.files"
              :key="file.id"
              :name="file.name"
            />
          </div>
        </template>
      </template>
    </template>
  </Card>
</template>

<script src="./index.js"></script>

<style
  src="./index.styl"
  lang="stylus"
  scoped
></style>
