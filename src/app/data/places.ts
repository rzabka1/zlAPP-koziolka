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
		description: "Opis Zamku",
		photo: zamek,
		audio: silence,
		position: [51.250425116739784, 22.572426324244525],
	},
	{
		id: "czechowicz",
		name: "Muzeum Józefa Czechowicza",
		address: "ul. Zamkowa 9",
		description: "Opis Muzeum Czechowicza",
		photo: czechowicz,
		audio: silence,
		position: [51.24784881973207, 22.56908346154913],
	},
	{
		id: "trynitarska",
		name: "Wieża Trynitarska",
		address: "ul. Zamkowa 9",
		description: "Opis Wieży",
		photo: trynitarska,
		audio: silence,
		position: [51.24707998172064, 22.568065390261616],
	},
	{
		id: "krakowska",
		name: "Brama Krakowska – Muzeum Historii Miasta Lublina",
		address: "ul. Zamkowa 9",
		description: "Opis Bramy",
		photo: krakowska,
		audio: silence,
		position: [51.24742607529606, 22.56658376518769],
	},
]