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
 * @interface SourceAlgoliaUpdate
 */
export interface SourceAlgoliaUpdate {
    /**
     * 
     * @type {string}
     * @memberof SourceAlgoliaUpdate
     */
    'api_key': string;
    /**
     * The application ID for your application found in settings
     * @type {string}
     * @memberof SourceAlgoliaUpdate
     */
    'application_id': string;
    /**
     * Search query to be used with indexes_query stream with format defined in `https://www.algolia.com/doc/rest-api/search/#tag/Search/operation/searchSingleIndex`
     * @type {string}
     * @memberof SourceAlgoliaUpdate
     */
    'search_query'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceAlgoliaUpdate
     */
    'start_date': string;
    /**
     * Object ID within index for search queries
     * @type {string}
     * @memberof SourceAlgoliaUpdate
     */
    'object_id'?: string;
}
