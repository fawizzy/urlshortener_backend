import { Router } from "express";
import {
  addurl,
  getAllUrlData,
  redirecturl,
} from "../controller/url.controller";

const urlRoute = Router();

/**
 * openapi: 3.0.0
info:
  title: URL Shortener API
  version: 1.0.0
  description: API for shortening and redirecting URLs

servers:
  - url: http://localhost:YOUR_PORT
    description: Local development server

paths:
  /addurl:
    post:
      summary: Add a URL for shortening
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                newurl:
                  type: string
                  description: The long URL to be shortened
              required:
                - newurl
      responses:
        '200':
          description: URL shortened successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  shorturl:
                    type: string
                    description: The shortened URL

  '/{generatedUrl}':
    get:
      summary: Redirect to the original URL
      parameters:
        - name: generatedUrl
          in: path
          required: true
          description: The generated URL code
          schema:
            type: string
      responses:
        '301':
          description: Redirect to the original URL
        '404':
          description: Short URL not found

  /getallurldata:
    get:
      summary: Get all URL data
      responses:
        '200':
          description: List of all URL data
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  properties:
                    id:
                      type: integer
                      description: The unique identifier for the URL
                    url:
                      type: string
                      description: The original URL
                    generatedUrl:
                      type: string
                      description: The shortened URL code

 */
urlRoute.post("/geturl", addurl);
urlRoute.get("/:params", redirecturl);
urlRoute.get("/a/allurl", getAllUrlData);

export { urlRoute };
