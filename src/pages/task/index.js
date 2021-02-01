import { mapGetters, mapState } from 'vuex';
import flatry from 'flatry';

import Card from 'primevue/card';
import Column from 'primevue/column';
import Sidebar from 'primevue/sidebar';
import Fieldset from 'primevue/fieldset';
import ScrollPanel from 'primevue/scrollpanel';
import Divider from 'primevue/divider';

import Table from '@/components/table';

import { getTasks } from '@/api/task';

export default {
  components: {
    Card,
    Table,
    Column,
    Sidebar,
    Fieldset,
    ScrollPanel,
    Divider,
  },

  data() {
    return {
      meta: null,
      pending: true,
      tasks: [],

      sidebar: false,
      selected: null,
    };
  },

  computed: {
    ...mapState('user', ['groupId', 'id']),

    ...mapGetters('user', ['hasGroup']),

    tasksType() {
      return this.$route.params.type;
    },

    title() {
      switch (this.tasksType) {
        case 'my':
          return 'Мои задачи';
        case 'group':
          return 'Задачи отдела';
        case 'all':
          return 'Все задачи';
        default:
          return 'Задачи';
      }
    },

    filter() {
      const filter = {};

      if (this.tasksType === 'my') {
        filter.userId = this.id;
      } else if (this.tasksType === 'group' && this.hasGroup) {
        filter.groupId = this.groupId;
      }

      return filter;
    },

    showGroup() {
      const { hasGroup, tasksType } = this;

      if (tasksType === 'all') return true;
      if (tasksType === 'group') return false;

      return !hasGroup;
    },

    showUser() {
      return this.tasksType !== 'my';
    },
  },

  watch: {
    tasksType: {
      handler() {
        this.loadTasks();
      },
      immediate: true,
    },
  },

  methods: {
    async loadTasks(page = 1) {
      const query = {
        ...this.filter,
        page,
        perPage: 20,
      };

      this.pending = true;
      const [err, { items, meta = null } = {}] = await flatry(getTasks(this.$axios, query));

      if (err) {
        this.$toast.add({
          severity: 'error',
          summary: err.serverError || 'Ошибка загрузки задач',
          life: 5000,
        });
        this.pending = false;
        return;
      }

      this.tasks = items;
      this.meta = meta;
      this.pending = false;
    },

    onRowSelect(task) {
      this.selected = task;
      this.sidebar = true;
    },

    onChangePage(event) {
      this.loadTasks(event.page + 1, event.rows);
    },

    onSidebarHide() {
      this.selected = null;
    },
  },
};
