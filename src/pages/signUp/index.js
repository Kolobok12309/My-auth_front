import flatry from 'flatry';
import { mapActions } from 'vuex';

import components from './components';

export default {
  name: 'SignUpPage',

  components,

  data() {
    return {
      form: {
        username: '',
        email: '',
        groupId: null,
        password: '',
      },
    };
  },

  methods: {
    ...mapActions('user', ['signUp']),

    async onSubmit() {
      const [err] = await flatry(this.signUp(this.form));

      if (err) {
        this.$toast.add({
          severity: 'error',
          summary: err.serverError || 'Ошибка регистрации',
          life: 5000,
        });
      } else {
        this.$router.push('/');
      }
    },
  },
};
