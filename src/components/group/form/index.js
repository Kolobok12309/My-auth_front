import defaults from 'lodash/defaults';
import cloneDeep from 'lodash/cloneDeep';
import pick from 'lodash/pick';
import { required, helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

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
    };
  },

  // Validations
  setup: () => ({ v$: useVuelidate() }),

  validations() {
    return {
      form: {
        name: {
          required: helpers.withMessage('Обязательное поле', required),
        },
      },
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

    async onSubmit() {
      const isFormValid = await this.v$.$validate();

      if (!isFormValid) return;
      this.v$.$reset();

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
