<template>
  <div class="task p-grid p-mx-0">
    <div class="p-col-6 p-offset-2">
      <TaskMainCard
        :pending="pending"
        :task="task"
      />
    </div>

    <TaskSidebar
      :pending="pending"
      :task="task"
      class="p-col-2"
    />
  </div>
</template>

<script src="./index.js"></script>

<style
  src="./index.styl"
  lang="stylus"
  scoped
></style>
