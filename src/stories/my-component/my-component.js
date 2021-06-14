import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const MyComponent = ({ first, last }) => {
  return html`<my-component first=${first} last=${last}></my-component>`;
};
