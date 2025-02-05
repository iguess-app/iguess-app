import { Dimensions } from 'react-native';

// COLORS

export const SCENE_BACKGROUND_COLOR = '#FFF'; // white
export const CARD_TEAM_NAME_COLOR = '#4D6980'; // gray
export const CARD_BACKGROUND_COLOR = '#FFF'; // white
export const CARD_BORDER_COLOR = 'rgba(149, 177, 205, 0.25)'; // light gray
export const SCHEDULED_TIME_COLOR = CARD_TEAM_NAME_COLOR; // white
export const MENU_COLOR = CARD_BACKGROUND_COLOR; // white
export const SELECT_LINE_PRIMARY_TEXT = CARD_BACKGROUND_COLOR; // white
export const SELECT_LINE_POINTS_TEXT = '#553DD1'; // purple-blue
export const GUESS_GUESSED_TEXT_COLOR = CARD_TEAM_NAME_COLOR; // gray
export const GUESS_DEFAULT_TEXT_COLOR = '#043874'; // darker gray
export const SETTINGS_TEXT_COLOR = '#553DD1'; // purple
export const SETTINGS_BORDER_COLOR = '#E4EBF2'; // light gray
export const TEXT_SECONDARY_SCENE = CARD_TEAM_NAME_COLOR; // gray
export const PRIMARY_BUTTON_COLOR = '#19D88C'; // green
export const PRIMARY_BUTTON_TEXT_COLOR = '#FFF'; // white
export const HEADER_TEXT_COLOR = '#FFF'; // white
export const HOME_TEXT_COLOR = '#FFF'; // white
export const INPUT_TINT_COLOR = '#CAD2D9'; //gray
export const INPUT_DEFAULT_COLOR = '#4D6980'; // gray
export const INPUT_FLOAT_LABEL_COLOR = '#4D6980'; // darker-gray
export const INPUT_SUCCESS_COLOR = '#19D88C'; // green
export const INPUT_ERROR_COLOR = '#EE4042'; // red
export const SIGN_UP_TERMS_COLOR = '#4D6980'; // darker-gray
export const LOADING_TITLE_COLOR = SETTINGS_TEXT_COLOR; //purple
export const LOADING_SUBTITLE_COLOR = GUESS_DEFAULT_TEXT_COLOR; // darker-gray
export const CARD_LIST_TITLE_COLOR = '#5435D4'; // purple
export const CARD_LIST_SUBTITLE_COLOR = '#4D6980'; // light gray
export const CARD_SCORE_COLOR = SETTINGS_TEXT_COLOR; // purple
export const GREEN_SCOREBOARD = '#19D88C';
export const GRAY_SCOREBOARD = '#7E7E7E';
export const SCORE_FONT_COLOR = '#FFF';
export const PROGRESS_TINT_COLOR = '#694CFE'; // purple
export const PROGRESS_BACKGROUND_COLOR = '#E1DBFF'; // gray-purple
export const TRY_AGAIN_SET_PREDICTION = CARD_LIST_TITLE_COLOR;
export const VERSION_COLOR = '#333333';
export const ABOUT_SECTION_TITLE = '#553DD1';
export const SEPARATOR_COLOR = '#CAD2D9';
export const HIGHLITENED_CONTENT = '#553DD1';
export const BOARD_BORDER_COLOR = '#D2D8DE';
export const BOARD_TITLE_COLOR = '#FFF';

// BACKGROUND

export DEFAULT_BACKGROUND from '@assets/images/defaultBackground.png';
export HOME_BACKGROUND from '@assets/images/homeBackground.png';

// SIZES

const { width, height } = Dimensions.get('window');

// Constants that relate actual dimensions to Zeplin prototype dimensions
export const WIDTH_REL = width / 375;
export const HEIGHT_REL = height / 667;

// For fonts and square images
export const RATIO = (WIDTH_REL + HEIGHT_REL) / 2;
