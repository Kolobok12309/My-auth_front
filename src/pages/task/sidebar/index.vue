<template>
  <Sidebar
    position="right"
    class="p-sidebar-md"
  >
    <ScrollPanel class="tasks-sidebar__scroll">
      <Fieldset>
        <template #legend>
          <span>
            {{ selected.title }}
            -
            <TaskStatus
              :value="selected.status"
              class="p-ml-2"
            />
          </span>
        </template>

        <div>
          {{ selected.description }}
        </div>

        <div v-if="selected.files.length">
          <File
            v-for="file in selected.files"
            :key="file.id"
            :name="file.name"
            class="tasks-sidebar__file"
          />
        </div>
      </Fieldset>

      <Fieldset
        legend="Информация"
        toggleable
        class="p-mt-3"
      >
        <div
          v-if="selected.deadline"
          class="tasks-sidebar__info"
        >
          Срок сдачи: {{ selected.deadline }}
        </div>

        <div
          v-if="selected.user"
          class="tasks-sidebar__info"
        >
          Назначен: {{ selected.user.username }}#{{ selected.user.id }}
        </div>

        <div  class="tasks-sidebar__info">
          Отдел: {{ selected.group.name }}#{{ selected.group.id }}
        </div>

        <div class="tasks-sidebar__info">
          Дата создания: {{ selected.createdAt }}
        </div>

        <div
          v-if="selected.createdBy"
          class="tasks-sidebar__info"
        >
          Автор: {{ selected.createdBy.username + `#${selected.createdBy.id}` }}
        </div>
      </Fieldset>
    </ScrollPanel>
  </Sidebar>
</template>

<script src="./index.js"></script>

<style
  src="./index.styl"
  lang="stylus"
  scoped
></style>
