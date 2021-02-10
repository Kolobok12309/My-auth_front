<template>
  <div class="task-sidebar">
    <SkeletonHelper
      :pending="pending"
      style="height: 6rem"
    >
      <Panel header="Исполнитель">
        <span v-if="!task.user">
          Не выбран
        </span>

        <UserView
          v-else
          :user="task.user"
        />
      </Panel>
    </SkeletonHelper>

    <SkeletonHelper
      :pending="pending"
      style="height: 6rem"
    >
      <Panel header="Отдел">
        <GroupView :group="task.group" />
      </Panel>
    </SkeletonHelper>

    <SkeletonHelper
      :pending="pending"
      style="height: 6rem"
    >
      <Panel header="Срок сдачи">
        {{ task.deadline }}
      </Panel>
    </SkeletonHelper>
  </div>
</template>

<script src="./index.js"></script>

<style
  src="./index.styl"
  lang="stylus"
  scoped
></style>
