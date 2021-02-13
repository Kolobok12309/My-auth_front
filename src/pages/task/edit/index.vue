<template>
  <div class="task-edit p-grid p-mx-0">
    <div class="p-col-12 p-xl-8 p-mx-auto">
      <Card>
        <template #title>
          <SkeletonHelper
            :pending="pending"
            style="height: 1.75rem"
          >
            Изменение задачи {{ task.title }} #{{ task.id }}
          </SkeletonHelper>
        </template>

        <template #subtitle>
          <SkeletonHelper
            :pending="pending"
            style="height: 2.25rem"
          >
            <router-link
              :to="`/task/${task.id}`"
              class="p-reset"
            >
              <Button
                label="Назад"
                icon="pi pi-angle-left"
                class="p-button-secondary p-button-outlined p-button-text"
              />
            </router-link>
          </SkeletonHelper>
        </template>

        <template #content>
          <TaskForm
            :pending="pending"
            :task="task"
            @submit="onSubmit"
            @remove="onRemove"
          />
        </template>
      </Card>
    </div>
  </div>
</template>

<script src="./index.js"></script>
