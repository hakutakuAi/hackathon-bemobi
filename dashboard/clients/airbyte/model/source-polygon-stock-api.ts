/* tslint:disable */
/* eslint-disable */
/**
 * airbyte-api
 * Programatically control Airbyte Cloud, OSS & Enterprise.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface SourcePolygonStockApi
 */
export interface SourcePolygonStockApi {
    /**
     * Sort the results by timestamp. asc will return results in ascending order (oldest at the top), desc will return results in descending order (newest at the top).
     * @type {string}
     * @memberof SourcePolygonStockApi
     */
    'sort'?: string;
    /**
     * The target date for the aggregate window.
     * @type {number}
     * @memberof SourcePolygonStockApi
     */
    'limit'?: number;
    /**
     * Your API ACCESS Key
     * @type {string}
     * @memberof SourcePolygonStockApi
     */
    'apiKey': string;
    /**
     * Determines whether or not the results are adjusted for splits. By default, results are adjusted and set to true. Set this to false to get results that are NOT adjusted for splits.
     * @type {string}
     * @memberof SourcePolygonStockApi
     */
    'adjusted'?: string;
    /**
     * The target date for the aggregate window.
     * @type {string}
     * @memberof SourcePolygonStockApi
     */
    'end_date': string;
    /**
     * The size of the time window.
     * @type {string}
     * @memberof SourcePolygonStockApi
     */
    'timespan': string;
    /**
     * The size of the timespan multiplier.
     * @type {number}
     * @memberof SourcePolygonStockApi
     */
    'multiplier': number;
    /**
     * The beginning date for the aggregate window.
     * @type {string}
     * @memberof SourcePolygonStockApi
     */
    'start_date': string;
    /**
     * The exchange symbol that this item is traded under.
     * @type {string}
     * @memberof SourcePolygonStockApi
     */
    'stocksTicker': string;
    /**
     * 
     * @type {string}
     * @memberof SourcePolygonStockApi
     */
    'sourceType': SourcePolygonStockApiSourceTypeEnum;
}

export const SourcePolygonStockApiSourceTypeEnum = {
    POLYGON_STOCK_API: 'polygon-stock-api'
} as const;

export type SourcePolygonStockApiSourceTypeEnum = typeof SourcePolygonStockApiSourceTypeEnum[keyof typeof SourcePolygonStockApiSourceTypeEnum];

