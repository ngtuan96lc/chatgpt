import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


app.post('/', async(req, res) => {
	try {
		const response = await openai.createCompletion({
			model: "text-davinci-003",
			prompt: req.body.text,
			temperature: 0.7,
			max_tokens: 256,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0,
		});

		res.status(200).send({
			bot: response.data.choices[0].text
		});
	} catch (error) {
		res.status(500).send({error});
	}
});


app.listen(4000, () => {
	console.log(`Server is running on port 4000`);
});
