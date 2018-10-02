import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform } from 'react-native';

// configs
import * as Dimens from './dimens';
import * as Colors from './colors';
import * as Consts from './consts';

// build style sheet
EStyleSheet.build({
    // color
    $color_white: Colors.COLOR_WHITE,
    $color_black: Colors.COLOR_BLACK,
    $color_gray: Colors.COLOR_GRAY,
    $color_blue: Colors.COLOR_BLUE,
    $color_green: Colors.COLOR_GREEN,
    // font
    $font_title: Dimens.FONT_TITLE,
    $font_content: Dimens.FONT_CONTENT,
    $font_description: Dimens.FONT_DESCRIPTION,
    // dimens
    $padding_layout: Dimens.PADDING_LAYOUT,
    $padding_content: Dimens.PADDING_CONTENT,
    $padding_small: Dimens.PADDING_SMALL,
    // icon
    $size_icon: Dimens.SIZE_ICON
});

// create style sheet for project
const appStyles = EStyleSheet.create({
    // $outline: 1,
    // font
    fontTitle: {
        fontSize: '$font_title',
        color: '$color_black',
        backgroundColor: 'transparent'
    },
    fontContent: {
        fontSize: '$font_content',
        color: '$color_black',
        backgroundColor: 'transparent'
    },
    fontDescription: {
        fontSize: '$font_description',
        color: '$color_gray',
        backgroundColor: 'transparent'
    },
    // font color
    fontColorWhite: {
        color: '$color_white'
    },
    fontColorBlack: {
        color: '$color_black'
    },
    fontColorGray: {
        color: '$color_gray'
    },
    // container
    container: {
        flex: 1
    },
    containerRow: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerColumn: {
        width: '100%',
        flexDirection: 'column'
    },
    // margin
    marginLayout: {
        margin: '$padding_layout'
    },
    marginLayoutLeft: {
        marginLeft: '$padding_layout'
    },
    marginLayoutTop: {
        marginTop: '$padding_layout'
    },
    marginLayoutRight: {
        marginRight: '$padding_layout'
    },
    marginLayoutBottom: {
        marginBottom: '$padding_layout'
    },
    marginContent: {
        margin: '$padding_content'
    },
    marginContentLeft: {
        marginLeft: '$padding_content'
    },
    marginContentTop: {
        marginTop: '$padding_content'
    },
    marginContentRight: {
        marginRight: '$padding_content'
    },
    marginContentBottom: {
        marginBottom: '$padding_content'
    },
    marginSmall: {
        margin: '$padding_small'
    },
    marginSmallLeft: {
        marginLeft: '$padding_small'
    },
    marginSmallTop: {
        marginTop: '$padding_small'
    },
    marginSmallRight: {
        marginRight: '$padding_small'
    },
    marginSmallBottom: {
        marginBottom: '$padding_small'
    },
    // padding
    paddingLayout: {
        padding: '$padding_layout'
    },
    paddingLayoutLeft: {
        paddingLeft: '$padding_layout'
    },
    paddingLayoutTop: {
        paddingTop: '$padding_layout'
    },
    paddingLayoutRight: {
        paddingRight: '$padding_layout'
    },
    paddingLayoutBottom: {
        paddingBottom: '$padding_layout'
    },
    paddingContent: {
        padding: '$padding_content'
    },
    paddingContentLeft: {
        paddingLeft: '$padding_content'
    },
    paddingContentTop: {
        paddingTop: '$padding_content'
    },
    paddingContentRight: {
        paddingRight: '$padding_content'
    },
    paddingContentBottom: {
        paddingBottom: '$padding_content'
    },
    paddingSmall: {
        padding: '$padding_small'
    },
    paddingSmallLeft: {
        paddingLeft: '$padding_small'
    },
    paddingSmallTop: {
        paddingTop: '$padding_small'
    },
    paddingSmallRight: {
        paddingRight: '$padding_small'
    },
    paddingSmallBottom: {
        paddingBottom: '$padding_small'
    },
    // icon
    icon: {
        width: '$size_icon',
        height: '$size_icon'
    },
    '@media (max-width: 350)': {
        // media query on sheet level
    },
    '@media (min-width: 350) and (max-width: 500)': {
        // media query on sheet level
    },
    '@media (min-width: 500)': {
        // media query on sheet level
    }
});

export default appStyles;
