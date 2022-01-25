export interface Props {
  text?: string;
  onPress?: () => void;
  type?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
}

export const colors = {
  primary: '#0258d8',
  secondary: '#61696d',
  success: '#16774a',
  danger: '#b6202e',
  warning: '#dca500',
  info: '#0bb2d3',
  light: '#f8f9fa',
  dark: '#212529',
};
