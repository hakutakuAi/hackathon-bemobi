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


// May contain unused imports in some cases
// @ts-ignore
import type { DeletionMode } from './deletion-mode';

/**
 * Settings for the Fauna Collection.
 * @export
 * @interface Collection
 */
export interface Collection {
    /**
     * The page size used when reading documents from the database. The larger the page size, the faster the connector processes documents. However, if a page is too large, the connector may fail. <br> Choose your page size based on how large the documents are. <br> See <a href=\"https://docs.fauna.com/fauna/current/learn/understanding/types#page\">the docs</a>.
     * @type {number}
     * @memberof Collection
     */
    'page_size': number;
    /**
     * 
     * @type {DeletionMode}
     * @memberof Collection
     */
    'deletions': DeletionMode;
}
