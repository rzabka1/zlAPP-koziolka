import wiktoriaImg from "../../images/goats/wiktoria.jpg";
import kryspinImg from "../../images/goats/kryspin.jpg";
import felicjaImg from "../../images/goats/felicja.jpg";
import tereskaImg from "../../images/goats/tereska.jpg";
import mikolajImg from "../../images/goats/mikolaj.jpg";
import leslawImg from "../../images/goats/leslaw.jpg";
import jedrekImg from "../../images/goats/jedrek.jpg";
import esterkaImg from "../../images/goats/esterka.jpg";
import czesioImg from "../../images/goats/czesio.jpg";
import jadziaImg from "../../images/goats/jadzia.jpg";
import lutekImg from "../../images/goats/lutek.jpg";
import lukaszImg from "../../images/goats/lukasz.jpg";
import swiatlowidImg from "../../images/goats/swiatlowid.jpg";
import kazikImg from "../../images/goats/kazik.jpg";
import onufryImg from "../../images/goats/onufry.jpg";
import janImg from "../../images/goats/jan.jpg";
import maciejImg from "../../images/goats/maciej.jpg";
import stasImg from "../../images/goats/stas.jpg";
import mariannaImg from "../../images/goats/marianna.jpg";
import lucekImg from "../../images/goats/lucek.jpg";
import stachImg from "../../images/goats/stach.jpg";
import janekJurekImg from "../../images/goats/janek-jurek.jpg";
import vetekImg from "../../images/goats/vetek.jpg";
import tomekImg from "../../images/goats/tomek.jpg";
import marianImg from "../../images/goats/marian.jpg";
import wladekImg from "../../images/goats/wladek.jpg";

import silence from "../../audio/1-minute-of-silence.mp3";

export interface Goat {
  id: string;
  name: string;
  address: string;
  points: number;
  description: string;
  photo: any;
  audio: any;
  position: [number, number];
}

export const goats: Goat[] = [
  {
    id: "wiktoria",
    name: "Wiktoria",
    address: "ul. Narutowicza 6",
    points: 2,
    description:
      "Kózka Wiktoria inspirowana jest opowieścią o fundacji kościoła przez króla Władysława Jagiełłę. Jej imię nawiązuje do zwycięstwa odniesionego w bitwie pod Grunwaldem w 1410 roku. Zgodnie z przekazem król Władysław II Jagiełło po zwycięskiej bitwie ufundował w Lublinie kościół jako wotum dziękczynne. Świątynią tą jest Kościół Wniebowzięcia Najświętszej Maryi Panny Zwycięskiej, obecnie znany jako Kościół Pobrygidkowskim, Kózka Wiktoria znajduje się tuż obok tej świątyni.",
    photo: wiktoriaImg,
    audio: silence,
    position: [51.24622587050444, 22.561564768080864],
  },
  {
    id: "kryspin",
    name: "Kryspin",
    address: "ul. Królewska 10",
    points: 2,
    description:
      "Koziołek Kryspin jest symbolicznym „strażnikiem” miasta, przypominającym o znaczeniu murów miejskich i ich funkcjach obronnych, szczególnie w okresie średniowiecza. Znajduje się przy ul. Królewskiej, czyli jednej z ulic, wzdłuż której przebiegały dawne mury obronne miasta. Pierwsze mury miejskie zaczęły prawdopodobnie powstawać w XIII wieku. Nie były one jednak początkowo wystarczająco bezpieczne – wznoszono je z drewna i wałów ziemnych. Ich przebudowa na murowane obwarowania wynikała z potrzeby zwiększenia bezpieczeństwa miasta po najeździe Tatarów w 1341 roku. Inicjatorem i fundatorem budowy był panujący wówczas król Kazimierz Wielki.",
    photo: kryspinImg,
    audio: silence,
    position: [51.24656247477901, 22.56818896613974],
  },
  {
    id: "felicja",
    name: "Felicja",
    address: "ul. Jezuicka 11",
    points: 2,
    description:
      "Kózka Felicja opowiada „Legendę o kamieniu nieszczęścia”. Według tej legendy w mieście pojawił się kiedyś kamień, który po dotknięciu przynosił nieszczęście i powodował drobne wypadki. Mówiono, że przyczyną tego było stracenie na nim niewinnego człowieka, gdy służył jako podstawa pod katowski pień. Felicja znajduje się w pobliżu kamienia nieszczęścia i trzyma w ręku magiczny, zielony kamyk, mający po potarciu go odczarowywać złą moc kamienia.\n",
    photo: felicjaImg,
    audio: silence,
    position: [51.247171168736564, 22.567942064207706],
  },
  {
    id: "tereska",
    name: "Tereska",
    address: "ul. Jezuicka 11",
    points: 2,
    description:
      "Kózka Tereska przedstawia córkę złotnika o tym samym imieniu z „Legendy o pięknej złotniczance”. Tereska słynęła ze swojej urody, przyciągającej wzrok wszystkich  mieszkańców miasta. Zazdrosne mieszczanki często skarżyły się złotnikowi na brak wierności swoich mężów, obwiniając  o to jego córkę. Ten jednak nie reagował na ich skargi, ponieważ nie zauważał, by ktoś przychodzi do Tereski. Jedynym świadkiem był kogucik na szczycie Wieży Trynitarskiej, który według legendy pieje, gdy przez bramę przechodzi wierny małżonek.\n",
    photo: tereskaImg,
    audio: silence,
    position: [51.247950906268244, 22.568976048429878],
  },
  {
    id: "mikolaj",
    name: "Mikołaj",
    address: "ul. Archidiakońska 5",
    points: 2,
    description:
      "Koziołek Mikołaj przypomina „Legendę o herbie miasta”, a sam stanowi nawiązanie do herbarza Mikołaja – autora herbu Lublina. Nadanie miastu herbu oznaczało jednocześnie przyznanie mu praw miejskich. Według wizji księcia Władysława Łokietka i delegatów z Lublina w herbie miała znaleźć się koza i winnice. Nawiązuje to do historii o kozie, która podczas najazdu Tatarów, wykarmiła swoim mlekiem mieszkańców ukrywających się w wąwozie, gdy skończyły się zapasy jedzenia. Mikołaj jednak zamiast kozy w winnicach przedstawił kozła wspinającego się na winorośl, co początkowo zmartwiło delegatów, lecz ostatecznie spodobało się mieszkańcom miasta.\n",
    photo: mikolajImg,
    audio: silence,
    position: [51.2480950579797, 22.569495436535462],
  },
  {
    id: "leslaw",
    name: "Lesław",
    address: "ul. Grodzka 11",
    points: 2,
    description:
      "Koziołek Lesław nawiązuje do księcia Leszka Czarnego i „Legendy o śnie księcia”. Legenda głosi, że w XIII wieku na Lublin najechali Jadźwingowie i splądrowali gród w czasie gdy odsiecz z Krakowa pod dowództwem księcia Leszka Czarnego była jeszcze w drodze. Kiedy książę dotarł na miejsce i zastał zniszczony miasto, zrezygnowany zasnął pod dębem, znajdującym się na obecnym Placu Po Farze. We śnie objawił mu się Archanioł Michał, który nakłonił go  do jak najszybszego dogonienia wroga i wymierzenia mu sprawiedliwości. Leszek zwyciężył, a następnie ufundował kościół farny pod wezwaniem Archanioła Michała, wzniesiony w miejscu, gdzie rósł dąb. Koziołek Lesław znajduje się właśnie w pobliżu Placu Po Farze.\n",
    photo: leslawImg,
    audio: silence,
    position: [51.248933089417044, 22.569398748787037],
  },
  {
    id: "jedrek",
    name: "Jędrek",
    address: "ul. Zamkowa 9",
    points: 2,
    description:
      "Koziołek Jędrek ma przypominać mistrza Andrzeja – twórcę fresków w Kaplicy Trójcy Świętej na Zamku Lubelskim. Wykonanie fresków zlecił mu król Władysław Jagiełło, któremu nie odpowiadały, białe ściany kaplicy. Władca pragnął nadać świątyni bardziej podniosły i reprezentacyjny charakter. Prace nad freskami realizowane przez mistrza Andrzeja i jego współpracowników, ukończono w 1418 roku. Wśród malowideł znajdują się jedne z nielicznych zachowanych do dziś wizerunków Władysława Jagiełły.\n",
    photo: jedrekImg,
    audio: silence,
    position: [51.250664338462954, 22.571246005022633],
  },
  {
    id: "esterka",
    name: "Esterka",
    address: "ul. Furmańska 1",
    points: 2,
    description:
      "Kózka Esterka trzyma w ręku cebularz – jeden z najpopularniejszych regionalnych wypieków Lubelszczyzny. Według „Legendy o Kazimierzu Wielkim i pięknej Esterce” król  zatrzymał się w Lublinie podczas podróży i poprosił o posiłek w najbliższym domu. Przyjęła go młoda Żydówka Esterka, która dysponowała jedynie mąkę, cebulę i makiem. Z tych składników  przygotowała potrawę, która zachwyciła króla i jego towarzyszy. Historycy jednak wiążą  powstanie cebularza lubelskiego z XIX wiekiem.\n",
    photo: esterkaImg,
    audio: silence,
    position: [51.24977440036177, 22.568681539528534],
  },
  {
    id: "czesio",
    name: "Czesio",
    address: "ul. Kowalska 3",
    points: 2,
    description:
      "Koziołek Czesio opowiada „Legendę o pochodzeniu nazwy miasta”. Według niej, zanim powstał Lublin, istniała tu osada otoczona zielenią i dolinami rzek. Przejeżdżający przez nią  książę zachwycił się jej urodą i zapytał mieszkańców o nazwę miejsca. Gdy usłyszał, że jej nie ma , postanowił ją nadać. Inspiracją miała być pierwsza ryba wyłowiona przez rybaków. Rybakowi Czesiowi udało się jednak złowić dwie ryby na raz – szczupaka i lina. Książę powtarzał „szczupak lub lin… lub lin… Lublin!”, a nazwa ta spodobała się mieszkańcom osady. Koziołek Czesio znajduje się w pobliżu Placu Rybnego.\n",
    photo: czesioImg,
    audio: silence,
    position: [51.249763444579536, 22.567697847998076],
  },
  {
    id: "jadzia",
    name: "Jadzia",
    address: "pl. Rybny",
    points: 2,
    description:
      "Kózka Jadzia przypomina o pożarze miasta z 1575 roku. Jadwiga Kołaczniczka, do której nawiązuje, mieszkała przy ulicy Grodzkiej i zajmowała się wypiekiem ciast. W przeddzień święta św. Stanisława przygotowywała placki, które miała sprzedawać następnego dnia. Niestety, źle utrzymany komin doprowadził do pożaru, który objął  jej dom, a następnie rozprzestrzenił się na całe miasto i Krakowskie Przedmieście (Ośrodek „Brama Grodzka - Teatr NN”, b.d.). Po tym wydarzeniu mieszkańcy przez lata odbudowywali Lublin, wznosząc murowane kamienice bogate w zdobienia.\n",
    photo: jadziaImg,
    audio: silence,
    position: [51.249199421303686, 22.56774980750171],
  },
  {
    id: "lutek",
    name: "Lutek",
    address: "pl. Łokietka 3",
    points: 2,
    description:
      "Koziołek Lutek opowiada „Legendę o zegarmistrzu” – panu Lutowskim, opiekunie zegara w Bramie Krakowskiej. Jego obowiązkiem było dbanie o mechanizm i jego regularne nakręcanie. Mimo doświadczenia słynął z licznych pomyłek, wynikających z  zamiłowania do trunków. Zdarzało się, że zegar wskazywał niewłaściwą godzinę, wprowadzając mieszkańców w błąd. O lubelskim zegarze krążyły powiedzenia, m.in.  „Wszędzie częstokroć mylą się zegarze, lecz te w Lublinie najpewniejsze łgarze”. Według legendy, duch zegarmistrza nadal przebywa w bramie i czasem przestawia wskazówki zegara. Koziołek Lutek znajduje się na placu Łokietka, przy Bramie Krakowskiej.\n",
    photo: lutekImg,
    audio: silence,
    position: [51.247320718707, 22.566295015395315],
  },
  {
    id: "lukasz",
    name: "Łukasz",
    address: "ul. Jezuicka 17",
    points: 2,
    description:
      "Koziołek Łukasz nawiązuje do Łukasza Rodakiewicza – architekta i fundatora Teatru Starego w Lublinie, drugiego najstarszego teatru w Polsce (1822) . Przez wiele lat budynek pozostawał nieużytkowany, jednak jego działalność wznowiono w 2012 roku. Impulsem do jego powstania była miłość Łukasza do Marianny Drewnowskiej, marzącej o własnym  teatrze. Pierwsze przedstawienia odbyły się już cztery miesiące od rozpoczęcia budowy. Koziołek znajduje się  naprzeciwko Teatru Starego.\n",
    photo: lukaszImg,
    audio: silence,
    position: [51.24723917850644, 22.569216369814974],
  },
  {
    id: "swiatlowid",
    name: "Światłowid",
    address: "ul. Grodzka 14",
    points: 2,
    description:
      "Koziołek Światłowid upamiętnia wkład Lublina, a konkretnie Ośrodka Techniki Optotelekomunikacyjnej, w rozwój technologii światłowodowych. Badania nad włóknami rozpoczęto w 1975 roku na Uniwersytecie Marii Curie-Skłodowskiej, a powołany w 1983 roku ośrodek był pierwszym tego typu w Polsce i jednym z czterech na świecie. Fundatorem rzeźby jest Orange Polska.\n",
    photo: swiatlowidImg,
    audio: silence,
    position: [51.248653164687454, 22.56858724564385],
  },
  {
    id: "kazik",
    name: "Kazik",
    address: "ul. Bramowa 2",
    points: 2,
    description:
      "Koziołek Kazik nawiązuje do Bramy Krakowskiej. Jego imię pochodzi od króla Kazimierza Wielkiego, fundatora jej budowy. Trzymana przez koziołka  poziomica symbolizuje odchylenie bramy od pionu, a klucz odwołuje się do legendy o zegarmistrzu.\n",
    photo: kazikImg,
    audio: silence,
    position: [51.247613785140246, 22.566571254497937],
  },
  {
    id: "onufry",
    name: "Onufry",
    address: "pl. Łokietka 1",
    points: 2,
    description:
      "Koziołek Onufry powstał na cześć hejnalisty Onufrego Koszarnego (1933-2019), który przez blisko 25 lat pełnił funkcję miejskiego trębacza i od 1991 roku codziennie w południe odgrywał hejnał z balkonu ratusza. Rzeźba znajduje się  przy Ratuszu Miasta Lublin. ",
    photo: onufryImg,
    audio: silence,
    position: [51.24758231411283, 22.565496626090102],
  },
  {
    id: "jan",
    name: "Jan",
    address: "ul. Krakowskie Przedmieście 6",
    points: 2,
    description:
      "Koziołek Jan przedstawia postać Jana Mincla z powieści „Lalka” Bolesława Prusa. Stoi przed dawnym sklepem galanteryjnym, który posłużył pisarzowi jako pierwowzór miejsca opisanego w powieści.",
    photo: janImg,
    audio: silence,
    position: [51.24743474857693, 22.56521862696508],
  },
  {
    id: "maciej",
    name: "Maciej",
    address: "ul. Staszica 3a",
    points: 2,
    description:
      "Koziołek Maciej znajduje się przy Pałacu Potockich, niedawno zrewitalizowanym przez jego fundatora. Hasło „Tu znajdziesz codzienną porcję szczęścia w promieniach własnego kąta” nawiązuje do obszaru działania fundatora, jakim są nieruchomości.\n",
    photo: maciejImg,
    audio: silence,
    position: [51.24944018727795, 22.562601181576802],
  },
  {
    id: "stas",
    name: "Staś",
    address: "ul. Staszica 11",
    points: 2,
    description:
      "Koziołek Staś znajduje się  przy Uniwersyteckim Szpitalu Klinicznym nr 1  – jednym z najstarszych szpitali w Lublinie, którego początki sięgają XVII wieku. Imię koziołka nawiązuje do patrona ulicy – Stanisława Staszica.\n",
    photo: stasImg,
    audio: silence,
    position: [51.250230891469236, 22.56338742695936],
  },
  {
    id: "marianna",
    name: "Marianna",
    address: "ul. Staszica 16",
    points: 2,
    description:
      "Kózka Marianna, zwana Szarytką, upamiętnia Zgromadzenie Sióstr Miłosierdzia św. Wincentego á Paulo. Jej imię pochodzi od siostry Marianny Kulisińskiej – pierwszej przełożonej zgromadzenia w Lublinie. Siostry przez blisko 200 lat opiekowały się chorymi, ubogimi i sierotami.\n",
    photo: mariannaImg,
    audio: silence,
    position: [51.25063524425781, 22.563217704301582],
  },
  {
    id: "lucek",
    name: "LuCeK",
    address: "ul. Grottgera 2 (5. piętro)",
    points: 2,
    description:
      "Koziołek LuCeK nawiązuje do Lubelskiego Centrum Konferencyjnego. Przedstawia uczestnika konferencji przesiadującego na tarasie restauracji znajdującej się w budynku. Stanowi charakterystyczny element przyciągający odwiedzających z kraju i zagranicy.",
    photo: lucekImg,
    audio: silence,
    position: [51.24749626197396, 22.549538118541182],
  },
  {
    id: "stach",
    name: "Stach",
    address: "ul. Nadbystrzycka 40",
    points: 2,
    description:
      "Koziołek Stach powstał z okazji 60-lecia Wydziału Budownictwa i Architektury Politechniki Lubelskiej. Jego imię upamiętnia dwóch profesorów o imieniu Stanisław – inicjatora powstania uczelni oraz pierwszego dziekana wydziału.",
    photo: stachImg,
    audio: silence,
    position: [51.235551969751974, 22.547923716653358],
  },
  {
    id: "janekJurek",
    name: "Janek i Jurek",
    address: "al. Racławickie 23",
    points: 2,
    description:
      "Koziołki Janek i Jurek znajdują się przy szpitalu wojskowym.  Powstały w  upamiętnia wydarzeń z 16-17 września 1939 roku oraz bohaterów  – Jana Iglatowskiego  i Jerzego Kędzierskiego, którzy bronili miasta i zginęli w jego obronie.",
    photo: janekJurekImg,
    audio: silence,
    position: [51.25053793333502, 22.53459778156494],
  },
  {
    id: "vetek",
    name: "Vetek",
    address: "ul. Szmaragdowa 4a",
    points: 2,
    description:
      "Koziołek Vetek znajduje się przed siedzibą Kliniki Weterynaryjnej przy ul. Szmaragdowej. Przypomina o znaczeniu opieki nad zwierzętami oraz o tradycjach lubelskiej weterynarii.",
    photo: vetekImg,
    audio: silence,
    position: [51.22578884940558, 22.523430194551537],
  },
  {
    id: "tomek",
    name: "Tomek",
    address: "ul. Chodźki 1",
    points: 2,
    description:
      "Koziołek Tomek powstał z inicjatywy studentów analityki medycznej Uniwersytetu Medycznego w Lublinie. Upamiętnia prof. Tomasza Borkowskiego – współtwórcę Lubelskiego Oddziału Polskiego Towarzystwa Diagnostyków Laboratoryjnych. Rzeźba znajduje się przed Collegium Universum.",
    photo: tomekImg,
    audio: silence,
    position: [51.25936728188868, 22.56815567611335],
  },
  {
    id: "marian",
    name: "Marian",
    address: "ul. Bramowa 2",
    points: 2,
    description: "Opis Mariana...",
    photo: marianImg,
    audio: silence,
    position: [51.24788685631064, 22.567136018996315],
  },
  {
    id: "wladek",
    name: "Władek",
    address: "ul. Bernardyńska 6",
    points: 2,
    description: "Opis Władka...",
    photo: wladekImg,
    audio: silence,
    position: [51.24674179010686, 22.565050213451997],
  },
];
