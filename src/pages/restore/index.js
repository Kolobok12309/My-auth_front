import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Card from 'primevue/card';
import Button from 'primevue/button';
import flatry from 'flatry';
import {
  required, minLength, sameAs, helpers,
} from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

import { restoreStart } from '@/api/user';

const PASS_MIN_LENGTH = 10;

export default {
  components: {
    Card,
    InputText,
    Password,
    Button,
  },

  data() {
    return {
      login: '',
      password: '',
      confirmPassword: '',

      pending: false,
    };
  },

  // Validations
  setup: () => ({ v$: useVuelidate() }),

  validations() {
    return {
      login: {
        required: helpers.withMessage('Обязательное поле', required),
        minLength: helpers.withMessage('Минимальная длина 4 символа', minLength(4)),
      },
      password: {
        required: helpers.withMessage('Обязательное поле', required),
        minLength: helpers.withMessage(`Минимальная длина ${PASS_MIN_LENGTH} символов`, minLength(PASS_MIN_LENGTH)),
        sameAs: helpers.withMessage('Пароли не совпадают', sameAs(this.confirmPassword)),
      },
      confirmPassword: {
        required: helpers.withMessage('Обязательное поле', required),
        minLength: helpers.withMessage(`Минимальная длина ${PASS_MIN_LENGTH} символов`, minLength(PASS_MIN_LENGTH)),
        sameAs: helpers.withMessage('Пароли не совпадают', sameAs(this.password)),
      },
    };
  },

  methods: {
    async onSubmit() {
      const isFormValid = await this.v$.$validate();

      if (!isFormValid) return;
      this.v$.$reset();

      const { login, password } = this;

      this.pending = true;
      const [err, { code } = {}] = await flatry(restoreStart(this.$axios, { login, password }));
      this.pending = false;

      if (err) {
        return this.$toast.add({
          severity: 'error',
          summary: err.serverError || 'Ошибка восстановления пароля',
          life: 5000,
        });
      }

      this.$toast.add({
        severity: 'success',
        summary: 'Для восстановления пароля пройдите по ссылке в e-mail',
        life: 5000,
      });

      if (code) {
        this.$router.push(`/restore/${code}`);
      }
    },
  },
};
