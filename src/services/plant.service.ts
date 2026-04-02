import {translateText} from "./translation.service";

export class PlantService {
    async get(page: Number) {
        const url = `https://perenual.com/api/v2/species-list?key=sk-gTG669cdaafc0bac616049&page=${page}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Erro ao buscar dados da Perenual");
        }

        const data = await response.json();

        const plants = data?.data ?? [];

        const translatedPlants = await Promise.all(
            plants.slice(0, 29).map(async (plant: any) => {
                const translatedName = await translateText(plant.common_name ?? "");

                return {
                    id: plant.id,
                    name: plant.common_name,
                    namePtBr: translatedName,
                    scientificName: plant.scientific_name?.[0] ?? "",
                    family: plant.family ?? "",
                    default_image: plant?.default_image?.original_url ?? ""
                };
            })
        );

        return translatedPlants;
    }
}