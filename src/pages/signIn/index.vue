<template>
  <Card class="sign-in-form p-mx-auto">
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

        <div class="p-grid">
          <div class="p-col">
            <Button
              label="Войти"
              type="submit"
            />
          </div>

          <div class="p-col">
            <router-link to="/signUp" class="p-reset">
              <Button
                label="Регистрация"
                class="p-button-outlined p-button-info"
              />
            </router-link>
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
