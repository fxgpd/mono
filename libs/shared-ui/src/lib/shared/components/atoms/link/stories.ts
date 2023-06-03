import { Meta } from '@storybook/angular';

import { LinkComponent } from './impl';

export default {
  title: 'LinkComponent',
  component: LinkComponent,
} as Meta<LinkComponent>;

export const Primary = {
  render: (args: LinkComponent) => ({
    props: args,
  }),
  args: {
    text: 'Enabled',
  },
};
