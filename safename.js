/* eslint-disable no-undef */
import mixin from 'lodash/mixin';
import capitalize from 'lodash/capitalize';

global._ = { mixin, capitalize };

_.mixin(_, {
  safename: string => (string ? string.split(' ').join('-').replace(/[^a-zA-Z0-9-_]/g, '').toLowerCase() : string),
  unsafename: string => (string ? capitalize(string.split('-').join(' ')) : string),
});

export const {
  safename,
  unsafename,
} = _;
