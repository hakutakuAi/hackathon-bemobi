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
 * @interface SourceAmplitudeUpdate
 */
export interface SourceAmplitudeUpdate {
    /**
     * Amplitude data region server
     * @type {string}
     * @memberof SourceAmplitudeUpdate
     */
    'data_region'?: SourceAmplitudeUpdateDataRegionEnum;
    /**
     * Amplitude API Key. See the <a href=\"https://docs.airbyte.com/integrations/sources/amplitude#setup-guide\">setup guide</a> for more information on how to obtain this key.
     * @type {string}
     * @memberof SourceAmplitudeUpdate
     */
    'api_key': string;
    /**
     * Amplitude Secret Key. See the <a href=\"https://docs.airbyte.com/integrations/sources/amplitude#setup-guide\">setup guide</a> for more information on how to obtain this key.
     * @type {string}
     * @memberof SourceAmplitudeUpdate
     */
    'secret_key': string;
    /**
     * UTC date and time in the format 2021-01-25T00:00:00Z. Any data before this date will not be replicated.
     * @type {string}
     * @memberof SourceAmplitudeUpdate
     */
    'start_date': string;
    /**
     * According to <a href=\"https://www.docs.developers.amplitude.com/analytics/apis/export-api/#considerations\">Considerations</a> too big time range in request can cause a timeout error. In this case, set shorter time interval in hours.
     * @type {number}
     * @memberof SourceAmplitudeUpdate
     */
    'request_time_range'?: number;
}

export const SourceAmplitudeUpdateDataRegionEnum = {
    STANDARD_SERVER: 'Standard Server',
    EU_RESIDENCY_SERVER: 'EU Residency Server'
} as const;

export type SourceAmplitudeUpdateDataRegionEnum = typeof SourceAmplitudeUpdateDataRegionEnum[keyof typeof SourceAmplitudeUpdateDataRegionEnum];

