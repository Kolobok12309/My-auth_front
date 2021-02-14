import DataTable from 'primevue/datatable';
import Paginator from 'primevue/paginator';
import Card from 'primevue/card';

export default {
  name: 'MyDataTable',

  components: {
    Card,
    DataTable,
    Paginator,
  },

  props: {
    title: {
      type: String,
      default: '',
    },

    items: {
      type: Array,
      default: () => [],
    },

    pending: {
      type: Boolean,
      default: false,
    },

    paginator: {
      type: Boolean,
      default: true,
    },

    page: {
      type: Number,
      default: 1,
    },

    perPage: {
      type: Number,
      default: 20,
    },

    totalCount: {
      type: Number,
      default: 0,
    },
  },

  emits: ['rowSelect', 'page'],

  computed: {
    first() {
      const { page = 1, perPage = 20 } = this;

      return (page - 1) * perPage;
    },
  },

  methods: {
    onRowSelect(event) {
      this.$emit('rowSelect', event.data);
    },

    onChangePage(event) {
      this.$emit('page', event);
    },
  },
};
