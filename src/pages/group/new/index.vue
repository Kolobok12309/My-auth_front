<template>
  <div class="group-new p-grid p-mx-0">
    <div class="p-col-12 p-xl-8 p-mx-auto">
      <Card>
        <template #title>
          Создание нового отдела
        </template>

        <template #content>
          <GroupForm @submit="onSubmit" />
        </template>
      </Card>
    </div>
  </div>
</template>

<script src="./index.js"></script>
