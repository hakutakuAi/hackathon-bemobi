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
 * Require SSL mode.
 * @export
 * @interface Require2
 */
export interface Require2 {
    [key: string]: any;

    /**
     * 
     * @type {string}
     * @memberof Require2
     */
    'mode': Require2ModeEnum;
}

export const Require2ModeEnum = {
    REQUIRE: 'require'
} as const;

export type Require2ModeEnum = typeof Require2ModeEnum[keyof typeof Require2ModeEnum];

