import Vue from 'vue';
import { mergeData } from 'vue-functional-data-merge';

export const props = {
  alt: {
    type: String,
    required: true,
  },
  sourceImage: {
    type: [String, Object],
    required: true,
  },
  sourceImageDark: {
    type: [String, Object],
    required: false,
  },
  height: {
    type: [Number, String],
    default: null,
  },
  width: {
    type: [Number, String],
    default: null,
  },
};

export const LazyImage = Vue.extend({
  name: 'LazyImage',
  functional: true,
  props,
  // eslint-disable-next-line no-shadow
  render(createElement, { props, data }) {
    const baseClass = 'lazyload';
    return createElement('picture',
      [
        props.sourceImageDark !== undefined ? createElement('source', mergeData(data, {
          class: [baseClass],
          attrs: {
            'data-srcset': props.sourceImageDark.srcSet,
            media: '(prefers-color-scheme: dark)',
          },
        })) : undefined,
        createElement('source', mergeData(data, {
          class: [baseClass],
          attrs: {
            'data-srcset': props.sourceImage.srcSet,
          },
        })),
        createElement('img', mergeData(data, {
          class: [baseClass],
          attrs: {
            'data-sizes': 'auto',
            alt: props.alt,
            'data-src': props.sourceImage.placeholder.url,
          },
        })),
      ]);
  },
});
