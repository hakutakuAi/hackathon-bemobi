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
 * @interface SourceSavvycal
 */
export interface SourceSavvycal {
    /**
     * Go to SavvyCal → Settings → Developer → Personal Tokens and make a new token. Then, copy the private key. https://savvycal.com/developers
     * @type {string}
     * @memberof SourceSavvycal
     */
    'api_key': string;
    /**
     * 
     * @type {string}
     * @memberof SourceSavvycal
     */
    'sourceType': SourceSavvycalSourceTypeEnum;
}

export const SourceSavvycalSourceTypeEnum = {
    SAVVYCAL: 'savvycal'
} as const;

export type SourceSavvycalSourceTypeEnum = typeof SourceSavvycalSourceTypeEnum[keyof typeof SourceSavvycalSourceTypeEnum];

