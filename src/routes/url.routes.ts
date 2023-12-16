import { Router } from "express";
import {
  addurl,
  getAllUrlData,
  redirecturl,
} from "../controller/url.controller";

const urlRoute = Router();

/**
 * @openapi
 * tags:
 *   - name: URL Shortener
 *     description: Operations related to URL shortening
 * components:
 *   schemas:
 *     Url:
 *       type: object
 *       properties:
 *         url:
 *           type: string
 *           description: The long URL to be shortened
 *
 *
 * paths:
 *   /getshorturl:
 *     post:
 *       summary: Add a URL for shortening
 *       operationId: addUrl
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Url'
 *       responses:
 *         '200':
 *           description: URL shortened successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   shorturl:
 *                     type: string
 *                     description: The shortened URL
 *
 *   '/{generatedUrl}':
 *     get:
 *       summary: Redirect to the original URL
 *       operationId: redirectToOriginalUrl
 *       parameters:
 *         - name: generatedUrl
 *           in: path
 *           required: true
 *           description: The generated URL code
 *           schema:
 *             type: string
 *       responses:
 *         '301':
 *           description: Redirect to the original URL
 *         '404':
 *           description: Short URL not found
 *
 *   /a/allurl:
 *     get:
 *       summary: Get all URL data
 *       operationId: getAllUrlData
 *       responses:
 *         '200':
 *           description: List of all URL data
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Url'
 */

urlRoute.post("/getshorturl", addurl);
urlRoute.get("/:params", redirecturl);
urlRoute.get("/a/allurl", getAllUrlData);

export { urlRoute };
