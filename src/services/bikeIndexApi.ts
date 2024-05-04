import axios from "axios";
import { StolenBike } from "../types/StolenBike";
import { BIKE_INDEX_API_URL } from "../constants/constants";

interface FetchStolenBikesParams {
  page?: number;
  perPage?: number;
  location?: string;
  stolenness?: string;
}

export const fetchStolenBikes = async (
  params?: FetchStolenBikesParams
): Promise<{ bikes: StolenBike[]; totalCount: number }> => {
  try {
    // Fetch total count separately
    const totalCountResponse = await axios.get(`${BIKE_INDEX_API_URL}/count`, {
      params: {
        ...params,
        location: params?.location || "munich",
        stolenness: params?.stolenness || "stolen",
      },
    });

    const totalCount = totalCountResponse.data.stolen;

    // Fetch bikes data
    const response = await axios.get(BIKE_INDEX_API_URL, {
      params: {
        ...params,
        location: params?.location || "munich",
        stolenness: params?.stolenness || "stolen",
      },
    });

    // Format date_stolen for each stolen bike
    const formattedBikes = response.data.bikes.map((bike: StolenBike) => ({
      ...bike,
      date_stolen: bike.date_stolen ? new Date(bike.date_stolen * 1000).toLocaleDateString() : undefined,
    }));

    return { bikes: formattedBikes, totalCount: totalCount };
  } catch (error) {
    throw new Error("Error fetching data: " + (error as Error).message);
  }
};
