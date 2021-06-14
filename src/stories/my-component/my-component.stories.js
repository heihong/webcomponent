import { MyComponent } from './my-component';

export default {
  title: 'Example/MyComponent',
};

const Template = args => MyComponent(args);

export const Primary = Template.bind({});
Primary.args = {
  first: 'Stencil',
  last: "'Don't call me a framework' JS",
};
