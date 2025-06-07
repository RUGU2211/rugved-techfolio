import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'dark',
  brandTitle: 'Rugved Kharde Components',
  brandImage: './icon.svg',
  brandUrl: 'https://hamishw.com',
});

addons.setConfig({
  theme,
});
