import type { PaletteMode } from '@mui/material';
export interface ThemeState {
    mode: PaletteMode;
}
export declare const toggleMode: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"theme/toggleMode">;
declare const _default: import("redux").Reducer<ThemeState>;
export default _default;
