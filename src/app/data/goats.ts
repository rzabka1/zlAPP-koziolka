import wiktoriaImg from '../../images/goats/wiktoria.jpg';
import kryspinImg from '../../images/goats/kryspin.jpg';
import felicjaImg from '../../images/goats/felicja.jpg';
import tereskaImg from '../../images/goats/tereska.jpg';
import mikolajImg from '../../images/goats/mikolaj.jpg';
import leslawImg from '../../images/goats/leslaw.jpg';
import jedrekImg from '../../images/goats/jedrek.jpg';
import esterkaImg from '../../images/goats/esterka.jpg';
import czesioImg from '../../images/goats/czesio.jpg';
import jadziaImg from '../../images/goats/jadzia.jpg';
import lutekImg from '../../images/goats/lutek.jpg';
import lukaszImg from '../../images/goats/lukasz.jpg';
import swiatlowidImg from '../../images/goats/swiatlowid.jpg';
import kazikImg from '../../images/goats/kazik.jpg';
import onufryImg from '../../images/goats/onufry.jpg';
import janImg from '../../images/goats/jan.jpg';
import maciejImg from '../../images/goats/maciej.jpg';
import stasImg from '../../images/goats/stas.jpg';
import mariannaImg from '../../images/goats/marianna.jpg';
import lucekImg from '../../images/goats/lucek.jpg';
import stachImg from '../../images/goats/stach.jpg';
import janekJurekImg from '../../images/goats/janek-jurek.jpg';
import vetekImg from '../../images/goats/vetek.jpg';
import tomekImg from '../../images/goats/tomek.jpg';
import marianImg from '../../images/goats/marian.jpg';
import wladekImg from '../../images/goats/wladek.jpg';

export interface Goat {
    id: string;
    name: string;
    address: string;
    points: number;
    description: string;
    photo: any;
    position: [number, number];
}

export const goats: Goat[] = [
    {
        id: 'wiktoria',
        name: 'Kózka Wiktoria',
        address: 'ul. Narutowicza 6',
        points: 2,
        description: 'Opis Wiktorii...',
        photo: wiktoriaImg,
        position: [51.24622587050444, 22.561564768080864],
    },
    {
        id: 'kryspin',
        name: 'Koziołek Kryspin',
        address: 'ul. Narutowicza 6',
        points: 2,
        description: 'Opis Kryspina...',
        photo: kryspinImg,
        position: [51.24656247477901, 22.56818896613974],
    },
    {
        id: 'felicja',
        name: 'Kózka Felicja',
        address: 'ul. Narutowicza 6',
        points: 2,
        description: 'Opis Felicji...',
        photo: felicjaImg,
        position: [51.247171168736564, 22.567942064207706],
    },
    {
        id: 'tereska',
        name: 'Kózka Tereska',
        address: 'ul. Narutowicza 6',
        points: 2,
        description: 'Opis Tereski',
        photo: tereskaImg,
        position: [51.247950906268244, 22.568976048429878],
    },
    {
        id: 'mikolaj',
        name: 'Koziołek Mikołaj',
        address: 'ul. Narutowicza 6',
        points: 2,
        description: 'Opis Mikołaja...',
        photo: mikolajImg,
        position: [51.2480950579797, 22.569495436535462],
    },
    {
        id: 'leslaw',
        name: 'Koziołek Lesław',
        address: 'ul. Narutowicza 6',
        points: 2,
        description: 'Opis Lesława...',
        photo: leslawImg,
        position: [51.248933089417044, 22.569398748787037],
    },
    {
        id: 'jedrek',
        name: 'Koziołek Jędrek',
        address: 'ul. Narutowicza 6',
        points: 2,
        description: 'Opis Jędrka...',
        photo: jedrekImg,
        position: [51.250664338462954, 22.571246005022633],
    },
    {
        id: 'esterka',
        name: 'Kózka Esterka',
        address: 'ul. Narutowicza 6',
        points: 2,
        description: 'Opis Esterki...',
        photo: esterkaImg,
        position: [51.24977440036177, 22.568681539528534],
    },
    {
        id: 'czesio',
        name: 'Koziołek Czesio',
        address: 'ul. Narutowicza 6',
        points: 2,
        description: 'Opis Czesia...',
        photo: czesioImg,
        position: [51.249763444579536, 22.567697847998076],
    },
    {
        id: 'jadzia',
        name: 'Kózka Jadzia',
        address: 'ul. Narutowicza 6',
        points: 2,
        description: 'Opis Jadzi...',
        photo: jadziaImg,
        position: [51.249199421303686, 22.56774980750171],
    },
    {
        id: 'lutek',
        name: 'Koziołek Lutek',
        address: 'ul. Narutowicza 6',
        points: 2,
        description: 'Opis Lutka...',
        photo: lutekImg,
        position: [51.247320718707, 22.566295015395315],
    },
    {
        id: 'lukasz',
        name: 'Koziołek Łukasz',
        address: 'ul. Narutowicza 6',
        points: 2,
        description: 'Opis Łukasza...',
        photo: lukaszImg,
        position: [51.24723917850644, 22.569216369814974],
    },
    {
        id: 'swiatlowid',
        name: 'Koziołek Światłowid',
        address: 'ul. Narutowicza 6',
        points: 2,
        description: 'Opis Światłowida...',
        photo: swiatlowidImg,
        position: [51.248653164687454, 22.56858724564385],
    },
    {
        id: 'kazik',
        name: 'Koziołek Kazik',
        address: 'ul. Narutowicza 6',
        points: 2,
        description: 'Opis Kazika...',
        photo: kazikImg,
        position: [51.247613785140246, 22.566571254497937],
    },
    {
        id: 'onufry',
        name: 'Koziołek Onufry',
        address: 'ul. Narutowicza 6',
        points: 2,
        description: 'Opis Onufrego...',
        photo: onufryImg,
        position: [51.24758231411283, 22.565496626090102],
    },
    {
        id: 'jan',
        name: 'Koziołek Jan',
        address: 'ul. Narutowicza 6',
        points: 2,
        description: 'Opis Jana...',
        photo: janImg,
        position: [51.24743474857693, 22.56521862696508],
    },
    {
        id: 'maciej',
        name: 'Koziołek Maciej',
        address: 'ul. Narutowicza 6',
        points: 2,
        description: 'Opis Macieja...',
        photo: maciejImg,
        position: [51.24944018727795, 22.562601181576802],
    },
    {
        id: 'stas',
        name: 'Koziołek Staś',
        address: 'ul. Narutowicza 6',
        points: 2,
        description: 'Opis Stasia...',
        photo: stasImg,
        position: [51.250230891469236, 22.56338742695936],
    },
    {
        id: 'marianna',
        name: 'Kózka Marianna',
        address: 'ul. Narutowicza 6',
        points: 2,
        description: 'Opis Marianny...',
        photo: mariannaImg,
        position: [51.25063524425781, 22.563217704301582],
    },
    {
        id: 'lucek',
        name: 'Koziołek LuCeK',
        address: 'ul. Narutowicza 6',
        points: 2,
        description: 'Opis LuCKa...',
        photo: lucekImg,
        position: [51.24749626197396, 22.549538118541182],
    },
    {
        id: 'stach',
        name: 'Koziołek Stach',
        address: 'ul. Narutowicza 6',
        points: 2,
        description: 'Opis Stacha...',
        photo: stachImg,
        position: [51.235551969751974, 22.547923716653358],
    },
    {
        id: 'janekJurek',
        name: 'Koziołki Janek i Jurek',
        address: 'ul. Narutowicza 6',
        points: 2,
        description: 'Opis Janka i Jurka...',
        photo: janekJurekImg,
        position: [51.25053793333502, 22.53459778156494],
    },
    {
        id: 'vetek',
        name: 'Koziołek Vetek',
        address: 'ul. Narutowicza 6',
        points: 2,
        description: 'Opis Vetka...',
        photo: vetekImg,
        position: [51.22578884940558, 22.523430194551537],
    },
    {
        id: 'tomek',
        name: 'Koziołek Tomek',
        address: 'ul. Narutowicza 6',
        points: 2,
        description: 'Opis Tomka...',
        photo: tomekImg,
        position: [51.25936728188868, 22.56815567611335],
    },
    {
        id: 'marian',
        name: 'Koziołek Marian',
        address: 'ul. Narutowicza 6',
        points: 2,
        description: 'Opis Mariana...',
        photo: marianImg,
        position: [51.24788685631064, 22.567136018996315],
    },
    {
        id: 'wladek',
        name: 'Koziołek Władek',
        address: 'ul. Narutowicza 6',
        points: 2,
        description: 'Opis Władka...',
        photo: wladekImg,
        position: [51.24674179010686, 22.565050213451997],
    },
];