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
 * @interface DoubleValue
 */
export interface DoubleValue {
    /**
     * 
     * @type {string}
     * @memberof DoubleValue
     */
    'value_type': DoubleValueValueTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof DoubleValue
     */
    'value': number;
}

export const DoubleValueValueTypeEnum = {
    DOUBLE_VALUE: 'doubleValue'
} as const;

export type DoubleValueValueTypeEnum = typeof DoubleValueValueTypeEnum[keyof typeof DoubleValueValueTypeEnum];

