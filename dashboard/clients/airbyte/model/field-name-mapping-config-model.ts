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
 * @interface FieldNameMappingConfigModel
 */
export interface FieldNameMappingConfigModel {
    /**
     * The field name in the source
     * @type {string}
     * @memberof FieldNameMappingConfigModel
     */
    'from_field': string;
    /**
     * The field name to use in the destination
     * @type {string}
     * @memberof FieldNameMappingConfigModel
     */
    'to_field': string;
}
