import type { ThemeConfig } from 'antd';
import { isString, toLower } from 'lodash';

export function formatTheme(theme: ThemeConfig) {
  const token = (theme.token || {}) as Record<string, any>;
  // convert token color value to lower case
  Object.keys(token).forEach(key => {
    if (isString(token[key])) {
      token[key] = toLower(token[key]);
    }
  });
  const components = (theme.components || {}) as Record<string, any>;
  Object.keys(components).forEach(componentName => {
    const componentToken = components[componentName] || {};
    // convert token color value to lower case
    Object.keys(componentToken).forEach(key => {
      if (isString(componentToken[key])) {
        componentToken[key] = toLower(componentToken[key]);
      }
    });
  });
  return theme;
}
