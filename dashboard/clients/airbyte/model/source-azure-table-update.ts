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
 * @interface SourceAzureTableUpdate
 */
export interface SourceAzureTableUpdate {
    /**
     * The name of your storage account.
     * @type {string}
     * @memberof SourceAzureTableUpdate
     */
    'storage_account_name': string;
    /**
     * Azure Table Storage Access Key. See the <a href=\"https://docs.airbyte.com/integrations/sources/azure-table\">docs</a> for more information on how to obtain this key.
     * @type {string}
     * @memberof SourceAzureTableUpdate
     */
    'storage_access_key': string;
    /**
     * Azure Table Storage service account URL suffix. See the <a href=\"https://docs.airbyte.com/integrations/sources/azure-table\">docs</a> for more information on how to obtain endpoint suffix
     * @type {string}
     * @memberof SourceAzureTableUpdate
     */
    'storage_endpoint_suffix'?: string;
}
