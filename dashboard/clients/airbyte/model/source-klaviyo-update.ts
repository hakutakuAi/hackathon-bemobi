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
 * @interface SourceKlaviyoUpdate
 */
export interface SourceKlaviyoUpdate {
    /**
     * Klaviyo API Key. See our <a href=\"https://docs.airbyte.com/integrations/sources/klaviyo\">docs</a> if you need help finding this key.
     * @type {string}
     * @memberof SourceKlaviyoUpdate
     */
    'api_key': string;
    /**
     * UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated. This field is optional - if not provided, all data will be replicated.
     * @type {string}
     * @memberof SourceKlaviyoUpdate
     */
    'start_date'?: string;
    /**
     * Certain streams like the profiles stream can retrieve predictive analytics data from Klaviyo\'s API. However, at high volume, this can lead to service availability issues on the API which can be improved by not fetching this field. WARNING: Enabling this setting will stop the  \"predictive_analytics\" column from being populated in your downstream destination.
     * @type {boolean}
     * @memberof SourceKlaviyoUpdate
     */
    'disable_fetching_predictive_analytics'?: boolean;
}
