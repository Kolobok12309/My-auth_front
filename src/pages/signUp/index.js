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
