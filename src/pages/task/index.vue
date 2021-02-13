<template>
  <div class="task p-grid p-mx-0">
    <div class="p-col-12 p-md-8 p-xl-6 p-offset-0 p-xl-offset-2">
      <TaskMainCard
        :pending="pending"
        :task="task"
        @updateStatus="onUpdateStatus"
      />
    </div>

    <TaskSidebar
      :pending="pending"
      :task="task"
      class="p-col-12 p-md-4 p-xl-2"
    />
  </div>
</template>

<script src="./index.js"></script>

<style
  src="./index.styl"
  lang="stylus"
  scoped
></style>
