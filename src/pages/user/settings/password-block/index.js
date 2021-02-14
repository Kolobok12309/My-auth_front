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

  computed: {
    isPasswordEquals() {
      return this.password === this.confirmPassword;
    },

    isFormValid() {
      return this.isMe
        ? this.isPasswordEquals
          && this.password.length >= PASS_MIN_LENGTH
          && this.oldPassword
        : this.isPasswordEquals
        && this.password.length >= PASS_MIN_LENGTH;
    },
  },

  methods: {
    clear() {
      this.oldPassword = '';
      this.password = '';
      this.confirmPassword = '';
    },

    onSubmit() {
      if (!this.isFormValid) {
        let errorText = 'Ошибка в введенных данных';

        if (this.isMe && !this.oldPassword) {
          errorText = 'Введите старый пароль';
        } else if (!this.password) {
          errorText = 'Введите новый пароль';
        } else if (!this.isPasswordEquals) {
          errorText = 'Новый пароль не совпадает с подтверждением';
        } else if (this.password.length < PASS_MIN_LENGTH) {
          errorText = `Минимальная длина пароля ${PASS_MIN_LENGTH} символов`;
        }

        this.$toast.add({
          severity: 'error',
          summary: errorText,
          life: 5000,
        });
        return;
      }

      const payload = {
        password: this.password,
      };

      if (this.isMe) payload.oldPassword = this.oldPassword;

      this.$emit('submit', payload);
    },
  },
};
