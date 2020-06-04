import Vue from 'vue';
import styled from 'vue-styled-components';

export const props = {
  alt: {
    type: String,
    required: true,
  },
  sourceImage: {
    type: [String, Object],
    required: true,
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

export const LazyGhostImage = Vue.extend({
  name: 'LazyGhostImage',
  functional: true,
  props,
  // eslint-disable-next-line no-shadow
  render(h, { props }) {
    const sizes = [300, 600, 1000, 2000];
    let srcset = '';
    if (props.sourceImage.includes('ghost.cms.site/url')) {
      srcset = sizes.map(size => `${props.sourceImage.replace('images', `images/size/w${size}`)} ${size}w`).join(', ');
    } else {
      srcset = sizes.map(size => `${props.sourceImage} ${size}w`).join(', ');
    }
    const heroImage = styled.img`width: 100%;`;

    return (
      <heroImage class="lazyload" data-srcset={srcset} data-sizes="auto" data-src={props.sourceImage} alt={props.alt} />
    );
  },
});
