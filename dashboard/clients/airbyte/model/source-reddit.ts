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
 * @interface SourceReddit
 */
export interface SourceReddit {
    /**
     * 
     * @type {string}
     * @memberof SourceReddit
     */
    'api_key': string;
    /**
     * Specifies the query for searching in reddits and subreddits
     * @type {string}
     * @memberof SourceReddit
     */
    'query'?: string;
    /**
     * Includes mature content
     * @type {boolean}
     * @memberof SourceReddit
     */
    'include_over_18'?: boolean;
    /**
     * Specifies exact keyword and reduces distractions
     * @type {boolean}
     * @memberof SourceReddit
     */
    'exact'?: boolean;
    /**
     * Max records per page limit
     * @type {number}
     * @memberof SourceReddit
     */
    'limit'?: number;
    /**
     * Subreddits for exploration
     * @type {Array<any>}
     * @memberof SourceReddit
     */
    'subreddits'?: Array<any>;
    /**
     * 
     * @type {string}
     * @memberof SourceReddit
     */
    'start_date': string;
    /**
     * 
     * @type {string}
     * @memberof SourceReddit
     */
    'sourceType': SourceRedditSourceTypeEnum;
}

export const SourceRedditSourceTypeEnum = {
    REDDIT: 'reddit'
} as const;

export type SourceRedditSourceTypeEnum = typeof SourceRedditSourceTypeEnum[keyof typeof SourceRedditSourceTypeEnum];

