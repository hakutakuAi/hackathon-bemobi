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
 * Disables encryption of communication between Airbyte and source database.
 * @export
 * @interface Disable
 */
export interface Disable {
    [key: string]: any;

    /**
     * 
     * @type {string}
     * @memberof Disable
     */
    'mode': DisableModeEnum;
}

export const DisableModeEnum = {
    DISABLE: 'disable'
} as const;

export type DisableModeEnum = typeof DisableModeEnum[keyof typeof DisableModeEnum];

