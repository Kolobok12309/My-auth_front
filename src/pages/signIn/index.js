import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Button from 'primevue/button';
import flatry from 'flatry';
import { mapActions } from 'vuex';

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

  methods: {
    ...mapActions('user', ['signIn']),

    async onSubmit() {
      const { login, password } = this;

      const [err] = await flatry(this.signIn({ login, password }));

      if (err) {
        this.$toast.add({
          severity: 'error',
          summary: err.serverError || 'Ошибка авторизации',
          life: 5000,
        });
      } else {
        this.$router.push('/');
      }
    },
  },
};
