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
 * Disable SSL.
 * @export
 * @interface Disable3
 */
export interface Disable3 {
    [key: string]: any;

    /**
     * 
     * @type {string}
     * @memberof Disable3
     */
    'mode': Disable3ModeEnum;
}

export const Disable3ModeEnum = {
    DISABLE: 'disable'
} as const;

export type Disable3ModeEnum = typeof Disable3ModeEnum[keyof typeof Disable3ModeEnum];

