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
 * @interface SourceTwitter
 */
export interface SourceTwitter {
    /**
     * App only Bearer Token. See the <a href=\"https://developer.twitter.com/en/docs/authentication/oauth-2-0/bearer-tokens\">docs</a> for more information on how to obtain this token.
     * @type {string}
     * @memberof SourceTwitter
     */
    'api_key': string;
    /**
     * Query for matching Tweets. You can learn how to build this query by reading <a href=\"https://developer.twitter.com/en/docs/twitter-api/tweets/search/integrate/build-a-query\"> build a query guide </a>.
     * @type {string}
     * @memberof SourceTwitter
     */
    'query': string;
    /**
     * The start date for retrieving tweets cannot be more than 7 days in the past.
     * @type {string}
     * @memberof SourceTwitter
     */
    'start_date'?: string;
    /**
     * The end date for retrieving tweets must be a minimum of 10 seconds prior to the request time.
     * @type {string}
     * @memberof SourceTwitter
     */
    'end_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceTwitter
     */
    'sourceType': SourceTwitterSourceTypeEnum;
}

export const SourceTwitterSourceTypeEnum = {
    TWITTER: 'twitter'
} as const;

export type SourceTwitterSourceTypeEnum = typeof SourceTwitterSourceTypeEnum[keyof typeof SourceTwitterSourceTypeEnum];

