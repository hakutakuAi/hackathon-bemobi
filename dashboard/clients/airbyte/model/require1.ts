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
 * Always require encryption. If the source database server does not support encryption, connection will fail.
 * @export
 * @interface Require1
 */
export interface Require1 {
    [key: string]: any;

    /**
     * 
     * @type {string}
     * @memberof Require1
     */
    'mode': Require1ModeEnum;
}

export const Require1ModeEnum = {
    REQUIRE: 'require'
} as const;

export type Require1ModeEnum = typeof Require1ModeEnum[keyof typeof Require1ModeEnum];

