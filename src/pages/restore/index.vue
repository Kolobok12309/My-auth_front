<template>
  <Card class="restore-form p-mx-auto">
    <template #title>
      Восстановление пароля
    </template>

    <template #content>
      <form
        class="p-fluid"
        @submit.prevent="onSubmit"
      >
        <div class="p-field">
          <label for="login">Имя пользователя или email</label>

          <InputText
            v-model="login"
            id="login"
            type="text"
            placeholder="name@example.com"
            :disabled="pending"
            :class="{
              'p-invalid': v$.login.$error
            }"
          />

          <small
            v-if="v$.login.$error"
            class="p-error"
          >
            {{ v$.login.$errors[0].$message }}
          </small>
        </div>

        <div class="p-field">
          <label for="password">Новый пароль</label>

          <Password
            v-model="password"
            id="password"
            placeholder="Пароль"
            :disabled="pending"
            :feedback="false"
            toggleMask
            :class="{
              'p-invalid': v$.password.$error
            }"
          />

          <small
            v-if="v$.password.$error"
            class="p-error"
          >
            {{ v$.password.$errors[0].$message }}
          </small>
        </div>

        <div class="p-field">
          <label for="confirmPassword">Подтверждение пароля</label>

          <Password
            v-model="confirmPassword"
            id="confirmPassword"
            placeholder="Пароль"
            :disabled="pending"
            :feedback="false"
            toggleMask
            :class="{
              'p-invalid': v$.confirmPassword.$error
            }"
          />

          <small
            v-if="v$.confirmPassword.$error"
            class="p-error"
          >
            {{ v$.confirmPassword.$errors[0].$message }}
          </small>
        </div>

        <div class="p-grid">
          <div class="p-col">
            <Button
              label="Восстановить"
              :disabled="pending"
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
