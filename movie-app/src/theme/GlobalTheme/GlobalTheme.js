const colors = {
    primary50:'#EBE9FE',
    primary100:'#DEDBFD',
    primary200:'#BEB7FB',
    primary300:'#9C92F8',
    primary400:'#7B6EF6',
    primary500:'#5A4AF4',
    primary600:'#483BC3',
    primary700:'#362C92',
    primary800:'#251E62',
    primary900:'#120F31',
    secondary50:'#E4F4FF',
    secondary100:'#D2ECFE',
    secondary200:'#A5DBFE',
    secondary300:'#78C8FD',
    secondary400:'#4BB7FD',
    secondary500:'#1EA5FC',
    secondary600:'#1884CA',
    secondary700:'#126297',
    secondary800:'#0C4265',
    secondary900:'#062032',
    tertary50:'#F6EDFF',
    tertary100:'#F0E2FF',
    tertary200:'#E2C5FF',
    tertary300:'#D3A7FF',
    tertary400:'#C58AFF',
    tertary500:'#B66DFF',
    tertary600:'#9257CC',
    tertary700:'#6D4199',
    tertary800:'#492C66',
    tertary900:'#241633',
    success50:'#E1F9F2',
    success100:'#CDF5E9',
    success200:'#9BEBD3',
    success300:'#69E2BD',
    success400:'#37D8A7',
    success500:'#05CE91',
    success600:'#04A574',
    success700:'#037C57',
    success800:'#02523A',
    success900:'#01291D',
    error50:'#FFECEC',
    error100:'#FFDFDF',
    error200:'#FFC0C0',
    error300:'#FFA0A0',
    error400:'#FF8181',
    error500:'#FF6161',
    error600:'#CC4E4E',
    error700:'#993A3A',
    error800:'#662727',
    error900:'#331313',
    warning50:'#FFF5E9',
    warning100:'#FFEFDB',
    warning200:'#FFDEB6',
    warning300:'#FFCE92',
    warning400:'#FFBD6D',
    warning500:'#FFAD49',
    warning600:'#CC8A3A',
    warning700:'#99682C',
    warning800:'#66451D',
    warning900:'#33230F',
    grey50:'#EBEEF5',
    grey100:'#C3C8D4',
    grey200:'#A8AEBF',
    grey300:'#8E95A9',
    grey400:'#767E94',
    grey500:'#61697F',
    grey600:'#475069',
    grey700:'#323B54',
    grey800:'#20283E',
    grey900:'#121829',
    black10:'rgba(0, 0, 0, 0.1)',
    black20:'rgba(0, 0, 0, 0.2)',
    black30:'rgba(0, 0, 0, 0.3)',
    black40:'rgba(0, 0, 0, 0.4)',
    black50:'rgba(0, 0, 0, 0.5)',
    black65:'rgba(0, 0, 0, 0.65)',
    black75:'rgba(0, 0, 0, 0.75)',
    black100:'#000000',
    white10:'rgba(255, 255, 255, 0.1)',
    white20:'rgba(255, 255, 255, 0.2)',
    white30:'rgba(255, 255, 255, 0.3)',
    white40:'rgba(255, 255, 255, 0.4)',
    white50:'rgba(255, 255, 255, 0.5)',
    white65:'rgba(255, 255, 255, 0.65)',
    white75:'rgba(255, 255, 255, 0.75)',
    white100:'#FFFFFF',
}

const themeSettings = {
    light : {
        backgroundColor: colors.grey900,
        header : {
            linkColor: colors.grey200,
            linkHoverColor: colors.white100,
        },
        hero :{
            titleColor: colors.grey50,
            textColor: colors.grey300,
        },
        button : {
            primary : {
                backgroundColor : colors.primary400,
                color : colors.white100,
                borderColor : colors.primary400,
                hoverBackgroundColor: colors.primary500,
                activeBorderColor: colors.primary500,
            },
            secondary : {
                backgroundColor : 'blue',
            }
        },
        input : {
            backgroundColor : colors.black10,
            borderColor: colors.grey700,
            color: colors.grey400,
        }
    },
    dark : {
        button : {
            primary : {
                backgroundColor : 'red',
                color : colors.white100,
                borderColor : colors.primary400,
                hoverBackgroundColor: colors.primary500,
                activeBorderColor: colors.primary500,
            }
        }
    }
}
export default themeSettings;