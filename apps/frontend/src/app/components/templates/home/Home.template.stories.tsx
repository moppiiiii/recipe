import type { Meta, StoryObj } from '@storybook/react';

import Home from './Home.template';

export default {
  title: 'Templates/Home',
  component: Home,
} as Meta<typeof Home>;

type Story = StoryObj<typeof Home>;

export const HomeTemplate: Story = {
  render: () => <Home />,
};
