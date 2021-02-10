<template>
  <Card class="task-main">
    <template #title>
      <SkeletonHelper
        :pending="pending"
        style="height: 1.5rem"
      >
        <div class="p-d-flex p-ai-center">
          <span>
            {{ task.title }} #{{ task.id }}
          </span>

          <div class="p-ml-auto p-d-flex p-ai-center">
            <Inplace closable>
              <template #display>
                <StatusView
                  :value="task.status"
                />
              </template>

              <template #content>
                <StatusPicker
                  :modelValue="task.status"
                  @update:modelValue="updateStatus"
                />
              </template>
            </Inplace>

            <Button
              v-if="isDirector || isAdmin"
              icon="pi pi-cog"
              class="p-button-secondary p-button-sm p-button-text p-button-rounded p-ml-2"
            />
          </div>
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
              v-for="file in files"
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
