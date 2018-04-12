import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import * as Colors from 'material-ui/colors';

Colors.white = "#FFFFFF";
Colors.black = "#000000";

let theme = {
  "fontFamily": "Palatino",
  "palette": {
    //  "type": 'light',
    "primary": {
      "main": Colors.lightBlue[500]
    },
    "accent": {
      "main": Colors.lightBlue[500]
    },
    "secondary": {
      "main": Colors.white
    },
    "contrastThreshold": 2, // Make raised button text white
    "primaryColor": Colors.lightBlue[500],
    "secondaryColor": Colors.white,
    "pickerHeaderColor": Colors.lightBlue[500],
    "textColor": Colors.lightBlue[500],
    "secondaryTextColor": Colors.grey[500],
    "alternateTextColor": Colors.white,
    "alternateBackgroundColor": "#F1F9FF"
  },
  overrides: {
    "MuiTabs": {
      root: {
        "backgroundColor": Colors.white,
        "color": Colors.lightBlue[500],
        //"selectedTextColor": Colors.lightBlue[500],
      }
    },
    "MuiAppBar": {
      root: {
        "color": Colors.white,
      }
    },
    "MuiButton": {
      root: {
        "color": Colors.lightBlue[500],
        "textTransform": "none"
      }
    },
    "MuiMenuItem": {
      root: {
        "color": Colors.lightBlue[500]
      }
    }
  }
};

const FixionalTheme =  createMuiTheme(theme);

export default FixionalTheme;
