import { Dimensions } from 'react-native';

const getScreenWidth = () => {
  const { width } = Dimensions.get('window');
  const roundedWidth = Math.round(width);
  let text;

  if (roundedWidth <= 768) {
    text = 'xs';
  } else if (roundedWidth > 768 && roundedWidth <= 991) {
    text = 'sm';
  } else if (roundedWidth > 991 && roundedWidth <= 1200) {
    text = 'md';
  } else {
    text = 'lg';
  }

  return { width: roundedWidth, text };
};

export default getScreenWidth;
