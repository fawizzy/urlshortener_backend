import "reflect-metadata";
import { AppDataSource } from "./data-source";
import * as express from "express";
import { urlRoute } from "./routes/url.routes";
import * as swaggerUi from "swagger-ui-express";
import * as swaggerOptions from "./swagger";

AppDataSource.initialize().catch((error) => console.log(error));

const app = express();
const port = process.env.PORT || 3000;

app.use("/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOptions));

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(urlRoute);

// Basic route
app.get("/", (req: express.Request, res: express.Response) => {
  const randomIndex = Math.floor(Math.random() * 26);
  res.send(String(randomIndex));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
