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
import type { DestinationConfiguration } from './destination-configuration';

/**
 * 
 * @export
 * @interface DestinationCreateRequest
 */
export interface DestinationCreateRequest {
    /**
     * Name of the destination e.g. dev-mysql-instance.
     * @type {string}
     * @memberof DestinationCreateRequest
     */
    'name': string;
    /**
     * The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided.
     * @type {string}
     * @memberof DestinationCreateRequest
     */
    'definitionId'?: string;
    /**
     * 
     * @type {string}
     * @memberof DestinationCreateRequest
     */
    'workspaceId': string;
    /**
     * 
     * @type {DestinationConfiguration}
     * @memberof DestinationCreateRequest
     */
    'configuration': DestinationConfiguration;
}
