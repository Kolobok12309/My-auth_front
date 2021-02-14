import Menubar from 'primevue/menubar';

export default {
  name: 'AllPage',

  components: {
    Menubar,
  },

  computed: {
    toolbarItems() {
      return [
        {
          label: 'Задачи',
          icon: 'pi pi-list',
          to: '/all/tasks',
        },
        {
          label: 'Отделы',
          icon: 'pi pi-folder',
          to: '/all/groups',
        },
        {
          label: 'Участники',
          icon: 'pi pi-users',
          to: '/all/users',
        },
      ];
    },
  },
};
