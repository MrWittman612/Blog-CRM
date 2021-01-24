import { create } from '@storybook/theming';
import image from '../src/assets/blog-logo.png';

export default create({
  base: 'dark',
  brandTitle: 'Mr. Wittman Blog',
  brandUrl: 'https://mrwittman-blog-crm.herokuapp.com/',
  brandImage: image,
});
