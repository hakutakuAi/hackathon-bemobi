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
 * @interface SourcePosthogUpdate
 */
export interface SourcePosthogUpdate {
    /**
     * The date from which you\'d like to replicate the data. Any data before this date will not be replicated.
     * @type {string}
     * @memberof SourcePosthogUpdate
     */
    'start_date': string;
    /**
     * API Key. See the <a href=\"https://docs.airbyte.com/integrations/sources/posthog\">docs</a> for information on how to generate this key.
     * @type {string}
     * @memberof SourcePosthogUpdate
     */
    'api_key': string;
    /**
     * Base PostHog url. Defaults to PostHog Cloud (https://app.posthog.com).
     * @type {string}
     * @memberof SourcePosthogUpdate
     */
    'base_url'?: string;
    /**
     * Set lower value in case of failing long running sync of events stream.
     * @type {number}
     * @memberof SourcePosthogUpdate
     */
    'events_time_step'?: number;
}
