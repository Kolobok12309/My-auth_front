<template>
  <Card>
    <template #title>
      Настройки
    </template>

    <template #content>
      <form
        class="settings-form"
        @submit.prevent="onSubmit"
      >
        <div class="settings-form__grid">
          <label for="email">
            Email:
          </label>

          <div>
            <InputText
              v-model="userData.email"
              :disabled="pending"
              id="email"
              placeholder="example@example.com"
              type="text"
            />
          </div>

          <label for="group">
            Отдел:
          </label>

          <div>
            <GroupPicker
              v-model="userData.groupId"
              :disabled="pending"
              inputId="group"
            />
          </div>

          <template v-if="showRoles">
            <label for="role">
              Роль:
            </label>

            <div>
              <RolePicker
                v-model="userData.role"
                :disabled="pending"
                inputId="role"
              />
            </div>
          </template>
        </div>

        <div class="p-grid p-mt-2">
          <div class="p-col-fixed">
            <Button
              :disabled="pending"
              label="Сохранить"
              icon="pi pi-save"
              type="submit"
            />
          </div>
        </div>
      </form>
    </template>
  </Card>
</template>

<script src="./index.js"></script>

<style
  src="./index.styl"
  lang="stylus"
  scoped
></style>
