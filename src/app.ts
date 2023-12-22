import express, { Application } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorhandler";
import notFound from "./app/middlewares/notFound";
import router from "./routes";
import cookieParser from "cookie-parser";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173"] }));
app.use(cookieParser());

// applications routes
app.use("/api/v1", router);

// api not found
app.all("*", notFound);

app.use(globalErrorHandler);
export default app;
