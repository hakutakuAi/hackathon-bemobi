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
 * @interface SourcePicqer
 */
export interface SourcePicqer {
    /**
     * 
     * @type {string}
     * @memberof SourcePicqer
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof SourcePicqer
     */
    'password'?: string;
    /**
     * The organization name which is used to login to picqer
     * @type {string}
     * @memberof SourcePicqer
     */
    'organization_name': string;
    /**
     * 
     * @type {string}
     * @memberof SourcePicqer
     */
    'start_date': string;
    /**
     * 
     * @type {string}
     * @memberof SourcePicqer
     */
    'sourceType': SourcePicqerSourceTypeEnum;
}

export const SourcePicqerSourceTypeEnum = {
    PICQER: 'picqer'
} as const;

export type SourcePicqerSourceTypeEnum = typeof SourcePicqerSourceTypeEnum[keyof typeof SourcePicqerSourceTypeEnum];

