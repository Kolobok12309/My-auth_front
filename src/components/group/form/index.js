import defaults from 'lodash/defaults';
import cloneDeep from 'lodash/cloneDeep';
import pick from 'lodash/pick';

import { defaultForm } from './config';
import components from './components';

export default {
  name: 'GroupForm',

  components,

  props: {
    pending: {
      type: Boolean,
      default: false,
    },

    group: {
      type: Object,
      default: null,
    },
  },

  emits: ['submit', 'remove'],

  data() {
    return {
      form: defaultForm(),
      hasAttempt: false,
    };
  },

  computed: {
    isEdit() {
      return this.group !== null;
    },

    btnText() {
      return this.isEdit
        ? 'Сохранить'
        : 'Создать';
    },

    isFormValid() {
      // TODO Add validators
      return true;
    },
  },

  watch: {
    task: {
      handler: 'reset',
      immediate: true,
    },
  },

  methods: {
    reset() {
      if (this.group) {
        const groupClone = pick(cloneDeep(this.group), Object.keys(defaultForm()));

        this.form = defaults(groupClone, defaultForm());
      } else {
        this.form = defaultForm();
      }
    },

    onSubmit() {
      if (!this.isFormValid) {
        this.hasAttempt = true;
        return;
      }

      this.$emit('submit', this.getFormattedForm());
    },

    onRemove() {
      this.$emit('remove');
    },

    getFormattedForm() {
      return cloneDeep(this.form);
    },
  },
};
