import { mongoose } from "~/services/database/mongoose.server";

type model = {
	name: string;
	schema: mongoose.Schema;
	collection: string;
};

export const models: model[] = [];
