<template>
  <Card class="sign-in-form">
    <template #title>
      Вход
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
          />
        </div>

        <div class="p-field">
          <label for="password">Пароль</label>

          <InputText
            v-model="password"
            id="password"
            type="password"
            placeholder="password"
          />
        </div>

        <Button
          label="Войти"
          type="submit"
        />
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
