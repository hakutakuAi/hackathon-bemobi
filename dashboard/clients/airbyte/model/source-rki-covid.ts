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
 * @interface SourceRkiCovid
 */
export interface SourceRkiCovid {
    /**
     * UTC date in the format 2017-01-25. Any data before this date will not be replicated.
     * @type {string}
     * @memberof SourceRkiCovid
     */
    'start_date': string;
    /**
     * 
     * @type {string}
     * @memberof SourceRkiCovid
     */
    'sourceType': SourceRkiCovidSourceTypeEnum;
}

export const SourceRkiCovidSourceTypeEnum = {
    RKI_COVID: 'rki-covid'
} as const;

export type SourceRkiCovidSourceTypeEnum = typeof SourceRkiCovidSourceTypeEnum[keyof typeof SourceRkiCovidSourceTypeEnum];

