import React from 'react';
import { TextLinkButton } from '../shared-components/atoms/Buttons/textLinkButton';

export default {
  title: 'Example/Buttons',
  component: TextLinkButton,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <TextLinkButton {...args} />;

export const textLink = Template.bind({});
textLink.args = {
  label: 'Text Link'
};


