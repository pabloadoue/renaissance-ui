const path = require('path');
const fs = require('fs');
const convert = require('xml-js');
const setval = require('setval');
const deepIterator = require('deep-iterator').default;
const capitalize = require('capitalize');
const prettier = require('prettier');
const { exec } = require('child_process');

const src = path.resolve(__dirname, '../src/UIIcon/src');
const dest = path.resolve(__dirname, '../src/UIIcon');

const definitions = {};

buildDefinitions(src).then(() => {
    /*const files = fs.readdirSync(dest, { withFileTypes: true });
    for (let file of files) {
        if (!file.isDirectory()) {
            const filePath = path.resolve(dest, file.name);
            fs.unlinkSync(filePath);
        }
    }

    const components = fs.readdirSync(path.resolve(dest, 'components'), {
        withFileTypes: true,
    });

    for (let component of components) {
        if (!component.isDirectory()) {
            //const filePath = path.resolve(dest, 'components', component.name);
            //fs.unlinkSync(filePath);
        }
    }*/

    buildFiles(definitions).then((indexDefinitions) => {
        buildIndex(indexDefinitions).then(() => {
            console.log('done');
        });
    });
});

async function buildIndex(indexDefinitions) {
    const { imports, cases, iconTypes, iconNames } = indexDefinitions;
    let content = `import React from 'react';
    import type {IIconProps} from 'native-base';
    ${imports}

    export function UIIcon(props:TUIIconProps){
        switch(props.name){
            ${cases}
        }
    }

    export interface TUIIconProps extends IIconProps {
        name: TUIIconName
    }
    export type TUIIconName = ${iconTypes.join(' | ')};
    export const UIIcons=${JSON.stringify(iconNames)};
    `;

    content = await prettier.format(content, { parser: 'typescript' });
    fs.writeFileSync(path.resolve(dest, `index.tsx`), content);
    await lintFile(path.resolve(dest, `index.tsx`));

    return;
}

async function buildFiles(icons) {
    let imports = ``;
    let cases = ``;
    const iconTypes = [];
    const iconNames = [];
    for (let key in icons) {
        console.log(`Building ${key}`);
        let definition = icons[key];
        const dependencies = [];

        let solid = null;
        let outline = null;
        let round = null;
        let sharp = null;
        let fallback = null;

        if (typeof definition.solid === 'string') {
            const solidSrc = fs.readFileSync(definition.solid, 'utf8');
            solid = parseIcon(solidSrc);
            solid.dependencies.forEach((dependency) => {
                if (!dependencies.includes(dependency)) {
                    dependencies.push(dependency);
                }
            });
        }

        if (typeof definition.outline === 'string') {
            const outlineSrc = fs.readFileSync(definition.outline, 'utf8');
            outline = parseIcon(outlineSrc);
            outline.dependencies.forEach((dependency) => {
                if (!dependencies.includes(dependency)) {
                    dependencies.push(dependency);
                }
            });
        }

        if (typeof definition.round === 'string') {
            const roundSrc = fs.readFileSync(definition.round, 'utf8');
            round = parseIcon(roundSrc);
            round.dependencies.forEach((dependency) => {
                if (!dependencies.includes(dependency)) {
                    dependencies.push(dependency);
                }
            });
        }

        if (typeof definition.sharp === 'string') {
            const sharpSrc = fs.readFileSync(definition.sharp, 'utf8');
            sharp = parseIcon(sharpSrc);
            sharp.dependencies.forEach((dependency) => {
                if (!dependencies.includes(dependency)) {
                    dependencies.push(dependency);
                }
            });
        }

        if (outline) {
            fallback = outline;
        } else if (solid) {
            fallback = solid;
        } else if (round) {
            fallback = round;
        } else if (sharp) {
            fallback = sharp;
        }

        if (fallback) {
            let iconNameArray = [];
            let iconOutputNameArray = [];
            key.split('_').map((name) => {
                iconNameArray.push(capitalize(name));
                iconOutputNameArray.push(name.toLowerCase());
            });

            const iconName = iconNameArray.join('');
            const iconOutputName = iconOutputNameArray.join('-');
            iconTypes.push(`'${iconOutputName}'`);
            iconNames.push(`${iconName}`);

            const iconPath = path.resolve(
                dest,
                'components',
                `${iconName}Icon.tsx`
            );

            imports += `import Icon${iconName} from './components/${iconName}Icon';\n`;
            cases += `      case '${iconOutputName}':\n`;
            cases += `          return <Icon${iconName} {...props} />;\n`;

            if (fs.existsSync(iconPath)) {
                console.log(`      Exists`);
            } else {
                let variants = ``;

                if (solid) {
                    variants += `case('solid'):
                                    return <Icon viewBox='${solid.viewBox}' {...props}>
                                        ${solid.svg}
                                    </Icon>;
                                `;
                }

                if (outline) {
                    variants += `case('outline'):
                                    return <Icon viewBox='${outline.viewBox}' {...props}>
                                        ${outline.svg}
                                    </Icon>;
                                `;
                }

                if (round) {
                    variants += `case('round'):
                                    return <Icon viewBox='${round.viewBox}' {...props}>
                                        ${round.svg}
                                    </Icon>;
                                `;
                }

                if (sharp) {
                    variants += `case('sharp'):
                                    return <Icon viewBox='${sharp.viewBox}' {...props}>
                                        ${sharp.svg}
                                    </Icon>;
                                `;
                }

                let content = `
                import React from 'react';
                import {Icon} from 'native-base';
                import {${dependencies.join(',')}} from 'react-native-svg';
                
                export default function Icon${iconName}(props: any){
    
                    switch(props.variant){
                        ${variants}
                        default:
                            return <Icon viewBox='${
                                fallback.viewBox
                            }' {...props}>
                                ${fallback.svg}
                            </Icon>;
                    }
                }
                `;

                content = await prettier.format(content, {
                    parser: 'typescript',
                });

                fs.writeFileSync(
                    path.resolve(dest, 'components', `${iconName}Icon.tsx`),
                    content
                );

                await lintFile(
                    path.resolve(dest, 'components', `${iconName}Icon.tsx`)
                );
            }
        }
    }

    return {
        imports: imports,
        cases: cases,
        iconTypes: iconTypes,
        iconNames: iconNames,
    };
}

function parseIcon(svgString) {
    const svgObject = convert.xml2js(svgString, { compact: false }).elements[0];
    const height = svgObject.attributes.height;
    const width = svgObject.attributes.width;
    const viewBox = svgObject.attributes.viewBox;
    const dependencies = [];

    const iterator = deepIterator(svgObject);
    // eslint-disable-next-line no-shadow
    for (let { key, value, path } of iterator) {
        const parsedPath = path.join('.');
        const parentPath = path.slice(0, -1).join('.');
        if (key === 'name') {
            if (value === 'g') {
                if (!dependencies.includes('G')) {
                    dependencies.push('G');
                }
                setval(svgObject, parsedPath, 'G', '.');
            } else if (value === 'rect') {
                if (!dependencies.includes('Rect')) {
                    dependencies.push('Rect');
                }
                setval(svgObject, parsedPath, 'Rect', '.');
            } else if (value === 'path') {
                if (!dependencies.includes('Path')) {
                    dependencies.push('Path');
                }
                setval(svgObject, parsedPath, 'Path', '.');
            } else if (value === 'polygon') {
                if (!dependencies.includes('Polygon')) {
                    dependencies.push('Polygon');
                }
                setval(svgObject, parsedPath, 'Polygon', '.');
            }
        } else if (key === 'fill-rule') {
            setval(svgObject, `${parentPath}.fillRule`, value, '.');
            setval(svgObject, `${parentPath}.fill-rule`, undefined, '.');
        } else if (key === 'stroke-width') {
            setval(svgObject, `${parentPath}.strokeWidth`, value, '.');
            setval(svgObject, `${parentPath}.stroke-width`, undefined, '.');
        }
    }

    let svgOutput = convert.js2xml(svgObject, { compact: false });
    return {
        svg: svgOutput,
        height: height,
        width: width,
        viewBox: viewBox,
        dependencies: dependencies,
    };
}

function lintFile(filePath) {
    return new Promise((resolve, reject) => {
        exec(`yarn lint ${filePath} --fix`, (error, stdout) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                resolve(stdout);
            }
        });
    });
}

async function buildDefinitions(srcDir) {
    let entries = fs.readdirSync(srcDir, { withFileTypes: true });
    for (let entry of entries) {
        if (entry.isDirectory()) {
            const icons = fs.readdirSync(path.join(srcDir, entry.name), {
                withFileTypes: true,
            });
            for (let icon of icons) {
                if (icon.isDirectory()) {
                    const name = `${entry.name}_${icon.name}`;
                    const variants = fs.readdirSync(
                        path.join(srcDir, entry.name, icon.name),
                        { withFileTypes: true }
                    );
                    let definition = {};
                    for (let variant of variants) {
                        if (variant.isDirectory()) {
                            const files = fs.readdirSync(
                                path.join(
                                    srcDir,
                                    entry.name,
                                    icon.name,
                                    variant.name
                                ),
                                { withFileTypes: true }
                            );
                            //Order files by name
                            files.sort((a, b) => {
                                if (a.name < b.name) return 1;
                                if (a.name > b.name) return -1;
                                return 0;
                            });

                            let target = null;
                            if (files.length > 0) {
                                target = path.join(
                                    srcDir,
                                    entry.name,
                                    icon.name,
                                    variant.name,
                                    files[0].name
                                );
                            }

                            if (target) {
                                switch (variant.name) {
                                    case 'materialicons':
                                        definition.solid = target;
                                        break;
                                    case 'materialiconsoutlined':
                                        definition.outline = target;
                                        break;
                                    case 'materialiconsround':
                                        definition.round = target;
                                        break;
                                    case 'materialiconssharp':
                                        definition.sharp = target;
                                        break;
                                }
                            }
                        }
                    }
                    if (Object.keys(definition).length > 0) {
                        if (Object.keys(definitions).length <= 1500) {
                            definitions[name] = definition;
                        } else {
                            definitions[name] = definition;
                        }
                    }
                }
            }
        }
    }
}
