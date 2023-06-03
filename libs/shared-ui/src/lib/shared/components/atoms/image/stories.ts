import { Meta } from '@storybook/angular';

import { ImageComponent } from './impl';

export default {
  title: 'ImageComponent',
  component: ImageComponent,
} as Meta<ImageComponent>;

export const Primary = {
  render: (args: ImageComponent) => ({
    props: args,
  }),
  args: {
    src: 'assets/images/dummy_600x400.png',
  },
};
