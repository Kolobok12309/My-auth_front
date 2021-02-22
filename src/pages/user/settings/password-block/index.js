import {
  required, minLength, sameAs, helpers,
} from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

import components from './components';

const PASS_MIN_LENGTH = 10;

export default {
  name: 'ChangePasswordBlock',

  components,

  props: {
    pending: {
      type: Boolean,
      default: false,
    },

    isMe: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['submit'],

  data() {
    return {
      oldPassword: '',
      password: '',
      confirmPassword: '',
    };
  },

  // Validations
  setup: () => ({ v$: useVuelidate() }),

  validations() {
    return {
      oldPassword: this.isMe
        ? {
          required: helpers.withMessage('Обязательное поле', required),
          minLength: helpers.withMessage(`Минимальная длина ${PASS_MIN_LENGTH} символов`, minLength(PASS_MIN_LENGTH)),
        } : {},
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
    clear() {
      this.oldPassword = '';
      this.password = '';
      this.confirmPassword = '';
    },

    async onSubmit() {
      const isFormValid = await this.v$.$validate();

      if (!isFormValid) return;
      this.v$.$reset();

      const payload = {
        password: this.password,
      };

      if (this.isMe) payload.oldPassword = this.oldPassword;

      this.$emit('submit', payload);
    },
  },
};
