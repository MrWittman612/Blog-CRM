import { create } from '@storybook/theming/create';
import foo from '@storybook/theming';
console.log('🚀 ~ file: blogStoryBookTheme.js ~ line 3 ~ foo', foo);

export default create({
  brandTitle: 'Mr. Wittman Blog CRM',
  brandUrl: 'https://mrwittman-blog-crm.herokuapp.com/',
  brandImage:
    'https://pixabay.com/get/gd427bfb74cb0b2c51c47269bfa9b474f3d05027dffab1330e8970e81327eacf38822a5bc41c6fe317c39dc252d8edd95_640.png',
});
