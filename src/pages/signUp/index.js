import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import flatry from 'flatry';
import { mapActions } from 'vuex';

import { getGroups } from '@/api/group';

export default {
  components: {
    Card,
    InputText,
    Button,
    Dropdown,
  },

  data() {
    return {
      form: {
        username: '',
        email: '',
        groupId: null,
        password: '',
      },

      groups: [],
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

  async created() {
    const [err, { items } = {}] = await flatry(getGroups(this.$axios, { perPage: 50 }));

    if (err) {
      this.$toast.add({
        severity: 'error',
        summary: err.serverError || 'Ошибка загрузки групп',
        life: 5000,
      });
    } else {
      this.groups = items;
    }
  },
};
