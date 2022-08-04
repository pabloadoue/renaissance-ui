import uuid from 'react-native-uuid';
import type { TUIListItem } from 'renaissance-ui';

export default function () {
    const result: TUIListItem[] = [];
    for (let i = 0; i < 20; i++) {
        const name = names[randomInt(0, names.length - 1)];
        const lastName = lastNames[randomInt(0, lastNames.length - 1)];
        const familyName = familyNames[randomInt(0, familyNames.length - 1)];
        const email = `${name?.toLowerCase()}.${lastName?.toLowerCase()}@${familyName?.toLowerCase()}.com`;

        result.push({
            id: uuid.v4() as string,
            title: `${name} ${lastName} ${familyName}`,
            subtitle: email,
            avatar: {
                name: `${name}`,
                lastName: `${lastName}`,
            },
        });
    }

    return result;
}

const names = [
    'Juan',
    'Paco',
    'Hugo',
    'Luis',
    'Pablo',
    'Claudia',
    'Martín',
    'David',
    'Eduardo',
    'Carlos',
    'Enrique',
    'Gabriela',
    'Karina',
    'Paulina',
    'Sara',
    'Sofía',
    'Valentina',
    'Victoria',
    'Ximena',
    'Yolanda',
    'Zoe',
    'Ángela',
    'Beatriz',
    'Carmen',
    'Cristina',
    'Diana',
    'Elena',
    'Francisca',
    'Gabriel',
    'Isabel',
    'Juana',
    'Julia',
    'Laura',
    'María',
    'Mariana',
    'Marta',
    'Miriam',
    'Natalia',
    'Patricia',
    'Rocío',
    'Sara',
    'Sofía',
    'Valentina',
    'Victoria',
    'Ximena',
    'Yolanda',
    'Zoe',
    'Ángela',
    'Beatriz',
    'Carmen',
    'Cristina',
];
const lastNames = [
    'Baca',
    'Báez',
    'Baños',
    'Barba',
    'Barrera',
    'Barrientos',
    'Barriga',
    'Bastida',
    'Batalla',
    'Bautista',
    'Bazán',
    'Becerra',
    'Becerril',
    'Bello',
    'Beltrán',
    'Benítez',
    'Bernal',
    'Bolaños',
    'Bonilla',
    'Borges',
    'Bustamante',
    'Busto',
];
const familyNames = [
    'Caballero',
    'Cabeza',
    'Cabrera',
    'Cadenas',
    'Caldera',
    'Calleja',
    'Calles',
    'Camacho',
    'Camareno',
    'Camarillo',
    'Campos',
    'Cárdenas',
    'Cardoso',
    'Carranza',
    'Carrillo',
    'Carvajal',
    'Carvallo',
    'Casas',
    'Castellanos',
    'Castañeda',
    'Cepeda',
    'Cerda',
    'Cervantes',
    'Céspedes',
    'Cevallos',
    'Cevedo',
    'Chávez',
    'Chavira',
    'Cisneros',
    'Collado',
    'Cordero',
    'Cornejo',
    'Correa',
    'Corro',
    'Cuéllar',
    'Cuervo',
    'Cuesta',
    'Cuevas',
];

function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
