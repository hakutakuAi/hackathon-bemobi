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
 * @interface Throttled
 */
export interface Throttled {
    /**
     * 
     * @type {string}
     * @memberof Throttled
     */
    'test_destination_type': ThrottledTestDestinationTypeEnum;
    /**
     * Number of milli-second to pause in between records.
     * @type {number}
     * @memberof Throttled
     */
    'millis_per_record': number;
}

export const ThrottledTestDestinationTypeEnum = {
    THROTTLED: 'THROTTLED'
} as const;

export type ThrottledTestDestinationTypeEnum = typeof ThrottledTestDestinationTypeEnum[keyof typeof ThrottledTestDestinationTypeEnum];

