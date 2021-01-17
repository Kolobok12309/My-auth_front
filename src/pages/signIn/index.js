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
        console.error(err);
        window.err = err;
        this.$toast.add({
          severity: 'error',
          summary: err.serverError || err.message,
          life: 5000,
        });
      }
    },
  },
};
