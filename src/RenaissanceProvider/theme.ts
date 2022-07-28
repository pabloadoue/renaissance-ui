import { colorContrastRatioCalculator } from '@mdhnpm/color-contrast-ratio-calculator';
import findValue from '@pabloadoue/find-value';
import ColorConvert from 'color';
import { Harmonizer } from 'color-harmony';
import { extendTheme } from 'native-base';

var harmonizer = new Harmonizer();

const handler = {
    pallete: {
        primary: {
            light: '#C40000',
            dark: '#C40000',
        },
        accent: {
            light: 'rgb(255,204,0)',
            dark: 'rgb(255,204,0)',
        },
        red: {
            light: 'rgb(255,59,48)',
            dark: 'rgb(255,69,58)',
        },
        orange: {
            light: 'rgb(255,149,0)',
            dark: 'rgb(255,159,10)',
        },
        green: {
            light: 'rgb(52,199,89)',
            dark: 'rgb(48,209,88)',
        },
        mint: {
            light: 'rgb(0,199,190)',
            dark: 'rgb(102,212,207)',
        },
        teal: {
            light: 'rgb(48,176,199)',
            dark: 'rgb(64,200,224)',
        },
        cyan: {
            light: 'rgb(50,173,230)',
            dark: 'rgb(100,210,255)',
        },
        blue: {
            light: 'rgb(0,122,255)',
            dark: 'rgb(10,132,255)',
        },
        indigo: {
            light: 'rgb(88,86,214)',
            dark: 'rgb(94,92,230)',
        },
        purple: {
            light: 'rgb(175,82,222)',
            dark: 'rgb(191,90,242)',
        },
        pink: {
            light: 'rgb(255,45,85)',
            dark: 'rgb(255,55,95)',
        },
        gray: {
            light: 'rgb(142,142,147)',
            dark: 'rgb(142,142,147)',
        },
        gray2: {
            light: 'rgb(174,174,178)',
            dark: 'rgb(99,99,102)',
        },
        gray3: {
            light: 'rgb(199,199,204)',
            dark: 'rgb(72,72,74)',
        },
        gray4: {
            light: 'rgb(209,209,214)',
            dark: 'rgb(58,58,60)',
        },
        gray5: {
            light: 'rgb(229,229,234)',
            dark: 'rgb(44,44,46)',
        },
        gray6: {
            light: 'rgb(242,242,247)',
            dark: 'rgb(28,28,30)',
        },
    },
    build: (
        colorMode: 'dark' | 'light',
        pallete: {
            primary: {
                light: string;
                dark: string;
            };
            accent: {
                light: string;
                dark: string;
            };
        },
        fonts?: any
    ) => {
        handler.pallete = {
            ...handler.pallete,
            ...pallete,
        };
        const providedFonts = typeof fonts !== 'undefined' ? fonts : {};
        const colors = handler.colors(colorMode);
        const theme = extendTheme({
            useSystemColorMode: false,
            initialColorMode: colorMode,
            ...providedFonts,
            components: {
                Button: {
                    variants: {
                        ghost: (props: any) => {
                            const { colorScheme } = props;
                            const sourceColor =
                                typeof findValue(
                                    props,
                                    `theme.colors.${colorScheme}`
                                ) === 'string'
                                    ? findValue(
                                          props,
                                          `theme.colors.${colorScheme}`
                                      )
                                    : findValue(
                                          props,
                                          `theme.colors.${colorScheme}.500`
                                      ) !== null
                                    ? findValue(
                                          props,
                                          `theme.colors.${colorScheme}.500`
                                      )
                                    : '#000000';
                            const parsedColor = ColorConvert(sourceColor);
                            //const contrast = colorContrastRatioCalculator(parsedColor.hex(), '#000000');
                            let darkColor = null;
                            for (let i = 1; i <= 100; i++) {
                                const index = i / 100;
                                const lightenColor = parsedColor.lighten(index);
                                const ligthnenContrast =
                                    colorContrastRatioCalculator(
                                        lightenColor.hex(),
                                        '#000000'
                                    );

                                if (!darkColor && ligthnenContrast > 5) {
                                    darkColor = lightenColor;
                                }
                            }

                            if (!darkColor) {
                                darkColor = parsedColor.negate();
                            }

                            return {
                                _light: {
                                    _icon: {
                                        color: parsedColor.toString(),
                                    },
                                    _text: {
                                        color: parsedColor.toString(),
                                    },
                                    _hover: {
                                        backgroundColor: parsedColor
                                            .fade(0.9)
                                            .toString(),
                                    },
                                    _pressed: {
                                        opacity: 0.5,
                                        backgroundColor: parsedColor
                                            .fade(0.95)
                                            .toString(),
                                    },
                                },
                                _dark: {
                                    _icon: {
                                        color: darkColor.toString(),
                                    },
                                    _text: {
                                        color: darkColor.toString(),
                                    },
                                    _hover: {
                                        backgroundColor: darkColor
                                            .fade(0.9)
                                            .toString(),
                                    },
                                    _pressed: {
                                        opacity: 0.5,
                                        backgroundColor: darkColor
                                            .fade(0.95)
                                            .toString(),
                                    },
                                },
                            };
                        },
                    },
                    sizes: {
                        xl: {
                            px: 2,
                            py: 3,
                            _text: {
                                fontSize: 16,
                                paddingLeft: 3,
                            },
                            _icon: {
                                size: 5,
                            },
                        },
                        lg: {
                            px: 3,
                            py: 1.5,
                        },
                        md: {
                            px: 3,
                            py: 1.5,
                        },
                        sm: {
                            px: 3,
                            py: 1.5,
                        },
                        xs: {
                            px: 3,
                            py: 1,
                        },
                    },
                },
                Icon: {
                    sizes: {
                        '2xs': 2,
                        'xs': 3,
                        'sm': 7,
                        'md': 5,
                        'lg': 6,
                        'xl': 7,
                        '2xl': 8,
                        '3xl': 9,
                        '4xl': 10,
                        '5xl': 12,
                        '6xl': 16,
                    },
                },
                IconButton: {
                    variants: {
                        ghost: (props: any) => {
                            const { colorScheme } = props;
                            const sourceColor =
                                typeof findValue(
                                    props,
                                    `theme.colors.${colorScheme}`
                                ) === 'string'
                                    ? findValue(
                                          props,
                                          `theme.colors.${colorScheme}`
                                      )
                                    : findValue(
                                          props,
                                          `theme.colors.${colorScheme}.500`
                                      ) !== null
                                    ? findValue(
                                          props,
                                          `theme.colors.${colorScheme}.500`
                                      )
                                    : '#000000';
                            const parsedColor = ColorConvert(sourceColor);
                            const contrast = colorContrastRatioCalculator(
                                parsedColor.hex(),
                                '#000000'
                            );

                            const darkColor =
                                contrast < 4.5
                                    ? parsedColor.negate()
                                    : parsedColor;

                            return {
                                _light: {
                                    _icon: {
                                        color: parsedColor.toString(),
                                    },
                                    _hover: {
                                        backgroundColor: parsedColor
                                            .fade(0.85)
                                            .toString(),
                                    },
                                    _pressed: {
                                        opacity: 0.5,
                                        backgroundColor: parsedColor
                                            .fade(0.85)
                                            .toString(),
                                    },
                                },
                                _dark: {
                                    _icon: {
                                        color: darkColor.toString(),
                                    },
                                    _hover: {
                                        backgroundColor: darkColor
                                            .fade(0.85)
                                            .toString(),
                                    },
                                    _pressed: {
                                        opacity: 0.5,
                                        backgroundColor: darkColor
                                            .fade(0.85)
                                            .toString(),
                                    },
                                },
                            };
                        },
                    },
                    sizes: {
                        xl: {
                            p: 2,
                            px: 2,
                            py: 2,
                            _icon: {
                                size: 'xl',
                            },
                            _hover: {
                                borderRadius: 8,
                            },
                            _pressed: {
                                borderRadius: 8,
                            },
                        },
                        lg: {
                            px: 1.5,
                            py: 1.5,
                        },
                        md: {
                            px: 1.5,
                            py: 1.5,
                        },
                        sm: {
                            px: 1.5,
                            py: 1.5,
                        },
                        xs: {
                            px: 1.5,
                            py: 1,
                        },
                    },
                },
                Input: {},
            },
            colors: {
                ...colors,
                primary: {
                    ...handler.colorMixin(colors.primary),
                },
                accent: {
                    ...handler.colorMixin(colors.accent),
                },
                blue: {
                    ...handler.colorMixin(colors.blue),
                },
                green: {
                    ...handler.colorMixin(colors.green),
                },
                gray: {
                    ...handler.colorMixin(colors.gray),
                },
                gray2: {
                    ...handler.colorMixin(colors.gray2),
                },
                gray3: {
                    ...handler.colorMixin(colors.gray3),
                },
                gray4: {
                    ...handler.colorMixin(colors.gray4),
                },
                gray5: {
                    ...handler.colorMixin(colors.gray5),
                },
                gray6: {
                    ...handler.colorMixin(colors.gray6),
                },
                red: {
                    ...handler.colorMixin(colors.red),
                },
            },
        });

        return theme;
    },
    colorMixin: (input: string) => {
        const tints: Array<string> = harmonizer.tints(input, 6);
        const shades: Array<string> = harmonizer.shades(input, 5);

        tints.reverse();
        shades.splice(0, 1);

        const colors: Array<Color> = [];

        tints.forEach((color) => {
            let value = 0;
            if (colors.length === 0) {
                value = 50;
            } else {
                value = colors.length * 100;
            }
            colors.push({
                name: `${value}`,
                value: color,
            });
        });

        shades.forEach((color) => {
            let value = colors.length * 100;
            colors.push({
                name: `${value}`,
                value: color,
            });
        });

        const result: Pallete = {
            '50': '',
            '100': '',
            '200': '',
            '300': '',
            '400': '',
            '500': '',
            '600': '',
            '700': '',
            '800': '',
            '900': '',
        };

        Object.keys(result).map((key) => {
            const Key = key as keyof typeof result;
            colors.map((color) => {
                if (color.name === key) {
                    result[Key] = color.value;
                }
            });
        });

        return result;
    },
    colors: (colorMode: 'dark' | 'light') => {
        let result: any = {};
        Object.keys(handler.pallete).forEach((key) => {
            const name = key as keyof typeof handler.pallete;
            const color = handler.pallete[name][colorMode];
            result[name] = color;
        });

        return result;
    },
};

type Pallete = {
    '50': string;
    '100': string;
    '200': string;
    '300': string;
    '400': string;
    '500': string;
    '600': string;
    '700': string;
    '800': string;
    '900': string;
};

type Color = {
    name: string;
    value: string;
};

const defaultTheme = handler.build('light', {
    primary: {
        light: '#C40000',
        dark: '#C40000',
    },
    accent: {
        light: 'rgb(255,204,0)',
        dark: 'rgb(255,204,0)',
    },
});

type ThemeType = typeof defaultTheme;

declare module 'native-base' {
    interface ICustomTheme extends ThemeType {}
}

export { defaultTheme };
export default handler.build;
