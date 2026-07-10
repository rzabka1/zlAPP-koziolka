import zamek from "../../images/places/zamek.jpg";
import czechowicz from "../../images/places/czechowicz.jpg";
import trynitarska from "../../images/places/trynitarska.jpg";
import krakowska from "../../images/places/krakowska.jpg";
import silence from "../../audio/1-minute-of-silence.mp3";

export interface Place {
	id: string;
	name: string;
	address: string;
	description: string;
	photo: any;
	audio: any;
	position: [number, number];
}

export const places: Place[] = [
	{
		id: "zamek",
		name: "Zamek Lubelski – Muzeum Narodowe w Lublinie",
		address: "ul. Zamkowa 9",
		description: "Jeden z najbardziej rozpoznawalnych zabytków Lublina i obowiązkowy punkt każdej wizyty w mieście. W jego wnętrzach mieści się Muzeum Narodowe z bogatymi zbiorami sztuki i historii, a prawdziwą perełką jest średniowieczna Kaplica Trójcy Świętej ze słynnymi freskami.",
		photo: zamek,
		audio: silence,
		position: [51.250425116739784, 22.572426324244525],
	},
	{
		id: "czechowicz",
		name: "Muzeum Józefa Czechowicza",
		address: "ul. Złota 3",
		description: "To miejsce poświęcone życiu i twórczości Józefa Czechowicza – jednego z najwybitniejszych poetów związanych z Lublinem. W niewielkim, klimatycznym muzeum można zobaczyć pamiątki po artyście i lepiej poznać miasto jego oczami.",
		photo: czechowicz,
		audio: silence,
		position: [51.24784881973207, 22.56908346154913],
	},
	{
		id: "trynitarska",
		name: "Wieża Trynitarska",
		address: "ul. Królewska 10",
		description: "Najwyższy punkt widokowy na Starym Mieście, z którego rozciąga się piękna panorama Lublina. Po pokonaniu kilkuset schodów czeka nagroda w postaci widoku na dachy kamienic, Zamek Lubelski i okoliczne wzgórza.",
		photo: trynitarska,
		audio: silence,
		position: [51.24707998172064, 22.568065390261616],
	},
	{
		id: "krakowska",
		name: "Brama Krakowska – Muzeum Historii Miasta Lublina",
		address: "pl. Łokietka 3",
		description: "Muzeum mieści się w Bramie Krakowskiej – jednym z najbardziej charakterystycznych symboli Lublina. Wystawa przybliża historię miasta od średniowiecza po współczesność, a z górnych kondygnacji można spojrzeć na Stare Miasto z zupełnie innej perspektywy.",
		photo: krakowska,
		audio: silence,
		position: [51.24742607529606, 22.56658376518769],
	},
]