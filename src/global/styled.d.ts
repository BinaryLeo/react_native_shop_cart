import 'styled-components';
import Theme from './theme';
declare module 'styled-components' { //access module styled-components
    type ThemeType = typeof Theme // and add a type ThemeType to the module styled-components
    export interface DefaultTheme extends ThemeType {}
}; 