import { Router } from "express";
import {
  addurl,
  getAllUrlData,
  redirecturl,
} from "../controller/url.controller";

const urlRoute = Router();
urlRoute.post("/geturl", addurl);
urlRoute.get("/:params", redirecturl);
urlRoute.get("/a/allurl", getAllUrlData);

export { urlRoute };
