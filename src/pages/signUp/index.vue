<template>
  <Card class="sign-up-form p-mx-auto">
    <template #title>
      Регистрация
    </template>

    <template #content>
      <form
        class="p-fluid"
        @submit.prevent="onSubmit"
      >
        <div class="p-field">
          <label for="username">Имя пользователя</label>

          <InputText
            v-model="form.username"
            id="username"
            type="text"
            placeholder="example123"
          />
        </div>

        <div class="p-field">
          <label for="email">Электронная почта</label>

          <InputText
            v-model="form.email"
            id="email"
            type="email"
            placeholder="example123@example.com"
          />
        </div>

        <div class="p-field">
          <label for="password">Пароль</label>

          <InputText
            v-model="form.password"
            id="password"
            type="password"
            placeholder="password"
          />
        </div>

        <div class="p-grid">
          <div class="p-col">
            <Button
              label="Зарегистрироваться"
              type="submit"
            />
          </div>

          <div class="p-col">
            <router-link to="/signIn" class="p-reset">
              <Button
                label="Вход"
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
