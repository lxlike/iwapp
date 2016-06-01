/**
 * IwwaIcons icon set component.
 * Usage: <IwwaIcons name="icon-name" size={20} color="#4F8EF7" />
 *
 * This file is created with command:
 *
 * ./node_modules/.bin/generate-icon node_modules/iwwa-icons/css/styles.css --componentName=IwwaIcons --fontFamily=iwwa > app/components/iwwa-icons.js
 *
 * After that, you should add the font to assets of android and ios.
 */

import createIconSet from "react-native-vector-icons/lib/create-icon-set";

const glyphMap = {
    "iw-co2": 105,
    "iw-csv": 106,
    "iw-dashboard": 107,
    "iw-box": 108,
    "iw-edit": 109,
    "iw-innowatio-logo": 118,
    "iw-gauge": 119,
    "iw-lock": 120,
    "iw-logout": 121,
    "iw-map": 122,
    "iw-search": 73,
    "iw-settings": 74,
    "iw-swipe": 75,
    "iw-thermometer": 76,
    "iw-humidity": 77,
    "iw-alert": 97,
    "iw-danger": 98,
    "iw-alarms": 99,
    "iw-arrow-right": 100,
    "iw-arrow-left": 102,
    "iw-calendar": 103,
    "iw-close": 104,
    "iw-export": 110,
    "iw-filter": 111,
    "iw-flag": 112,
    "iw-help": 113,
    "iw-history": 114,
    "iw-lightbulb": 115,
    "iw-info": 116,
    "iw-chart": 117,
    "iw-menu": 65,
    "iw-pause": 66,
    "iw-pinch": 69,
    "iw-png": 70,
    "iw-power": 71,
    "iw-reset": 72,
    "iw-upload": 78,
    "iw-user": 79,
    "iw-confront": 80,
    "iw-arrow-down": 82,
    "iw-middling": 83,
    "iw-monitoring": 84,
    "iw-tag": 85,
    "iw-assign": 87,
    "iw-bad": 88,
    "iw-duplicate": 90,
    "iw-good": 48,
    "iw-angle-left": 50,
    "iw-drag-drop": 51,
    "iw-star-o": 53,
    "iw-star": 54,
    "iw-option": 55,
    "iw-triangle-up": 56,
    "iw-option-horizontal": 57,
    "iw-merge": 33,
    "iw-information": 34,
    "iw-arrow-up": 35,
    "iw-chart-style1": 36,
    "iw-chart-style2": 37,
    "iw-chart-style4": 39,
    "iw-list-favourite": 40,
    "iw-week": 86,
    "iw-year": 89,
    "iw-month": 49,
    "iw-multiply": 52,
    "iw-open-braket": 38,
    "iw-divide": 41,
    "iw-delta": 42,
    "iw-close-braket": 43,
    "iw-add": 59,
    "iw-file-csv": 67,
    "iw-file-pdf": 81,
    "iw-file-png": 60,
    "iw-file-xsl": 61,
    "iw-chart-style3": 62,
    "iw-square-root": 63,
    "iw-circumflex": 64,
    "iw-percentage": 91,
    "iw-minus": 68,
    "iw-delete": 93,
    "iw-remove-15m": 101,
    "iw-add-15m": 44,
    "iw-remove-1y": 45,
    "iw-add-1y": 46,
    "iw-remove-1w": 47,
    "iw-add-1d": 58,
    "iw-remove-1d": 94,
    "iw-add-1m": 95,
    "iw-remove-1m": 96,
    "iw-add-1w": 123
};

const IwwaIcons = createIconSet(glyphMap, "iwwa", "iwwa.ttf");

module.exports = IwwaIcons;
module.exports.glyphMap = glyphMap;
