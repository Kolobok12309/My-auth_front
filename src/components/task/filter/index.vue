<template>
  <Card>
    <template #title>
      Фильтр задач
    </template>

    <template #content>
      <form
        class="task-filter"
        @submit.prevent="onSubmit"
      >
        <div class="p-grid">
          <div class="p-col-fixed">
            <span class="p-input-icon-left">
              <i class="pi pi-search" />

              <InputText
                v-model="compText"
                :disabled="pending"
                type="text"
                placeholder="Заголовок"
              />
            </span>
          </div>

          <div
            v-if="!hideGroup"
            class="p-col-fixed"
          >
            <GroupPicker
              v-model="compGroupId"
              :disabled="pending"
            />
          </div>

          <div
            v-if="!hideUser"
            class="p-col-fixed"
          >
            <UserPicker
              v-model="compUserId"
              :disabled="pending"
            />
          </div>

          <div class="p-col-fixed">
            <Button
              type="submit"
              label="Поиск"
              icon="pi pi-search"
            />
          </div>
        </div>
      </form>
    </template>
  </Card>
</template>

<script src="./index.js"></script>
