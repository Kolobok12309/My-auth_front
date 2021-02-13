<template>
  <Card class="task-main">
    <template #title>
      <SkeletonHelper
        :pending="pending"
        style="height: 1.5rem"
      >
        <div class="p-d-flex p-flex-wrap p-ai-start p-ai-sm-center p-flex-column p-flex-sm-row">
          <span>
            {{ task.title }} #{{ task.id }}
          </span>

          <div class="p-ml-sm-auto p-mt-2 p-mt-sm-0 p-d-flex p-ai-center">
            <Inplace closable>
              <template #display>
                <StatusView :value="task.status" />
              </template>

              <template #content>
                <StatusPicker
                  :modelValue="task.status"
                  @update:modelValue="updateStatus"
                />
              </template>
            </Inplace>

            <RouterLink
              v-if="isDirector || isAdmin"
              :to="`/task/${task.id}/edit`"
              class="p-reset"
            >
              <Button
                icon="pi pi-cog"
                class="p-button-secondary p-button-sm p-button-text p-button-rounded p-ml-2"
              />
            </RouterLink>
          </div>
        </div>
      </SkeletonHelper>
    </template>

    <template #subtitle>
      <SkeletonHelper :pending="pending">
        Создана

        <UserView :user="task.createdBy" />

        в

        <DateView :value="task.createdAt" />
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
        <div class="task-main__text">
          {{ task.description }}
        </div>

        <template v-if="task.files.length">
          <Divider />

          <div class="task-main__files">
            <FileView
              v-for="file in task.files"
              :key="file.id"
              :file="file"
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
