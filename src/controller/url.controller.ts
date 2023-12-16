import { Request, Response } from "express";
import { Url } from "../entity/Url";
import { generateRandomString } from "../utils/generateString";
import { AppDataSource } from "../data-source";
import { isValidUrl } from "../utils/checkurl";
import * as dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT;
const base_url = process.env.BASE_URL;

export const addurl = async (req: Request, res: Response) => {
  try {
    const longurl = req.body ? req.body.longurl : null;
    if (!isValidUrl(longurl)) {
      return res.send("Make sure your url is valid");
    }

    if (!longurl) {
      res.send("enter url to shorten");
    }
    const url = new Url();
    url.url = longurl;
    url.generatedUrl = generateRandomString(4);
    await AppDataSource.manager.save(url);
    return res
      .status(200)
      .json({ shorturl: `${base_url}:${port}/${url.generatedUrl}` });
  } catch (error) {
    res.send(error);
  }
};

export const redirecturl = async (req: Request, res: Response) => {
  try {
    const generatedUrl = req.params ? req.params.params : null;
    const urlRepository = AppDataSource.getRepository(Url);
    const url = await urlRepository.findOne({ where: { generatedUrl } });
    if (url) {
      const destinationUrl = url.url;
      res.redirect(301, destinationUrl);
    } else {
      res.send("invalid url");
    }
  } catch (error) {
    res.send(error);
  }
};

export const getAllUrlData = async (req: Request, res: Response) => {
  try {
    const urlRepository = AppDataSource.getRepository(Url);
    const allurl = await urlRepository.find();
    res.status(200).json(allurl);
  } catch (error) {
    res.send(error);
  }
};
