import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Button from 'primevue/button';
import flatry from 'flatry';
import { mapActions } from 'vuex';
import { required, minLength, helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

const PASS_MIN_LENGTH = 10;

export default {
  components: {
    Card,
    InputText,
    Button,
  },

  data() {
    return {
      login: '',
      password: '',
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
      },
    };
  },

  methods: {
    ...mapActions('user', ['signIn']),

    async onSubmit() {
      const isFormValid = await this.v$.$validate();

      if (!isFormValid) return;
      this.v$.$reset();

      const { login, password } = this;

      const [err, user] = await flatry(this.signIn({ login, password }));

      if (err) {
        this.$toast.add({
          severity: 'error',
          summary: err.serverError || 'Ошибка авторизации',
          life: 5000,
        });
      } else {
        this.$router.push(`/user/${user.id}/profile`);
      }
    },
  },
};
