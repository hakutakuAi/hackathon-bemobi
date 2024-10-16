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
import type { AirbyteApiConnectionSchedule } from './airbyte-api-connection-schedule';
// May contain unused imports in some cases
// @ts-ignore
import type { ConnectionStatusEnum } from './connection-status-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { GeographyEnum } from './geography-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { NamespaceDefinitionEnum } from './namespace-definition-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { NonBreakingSchemaUpdatesBehaviorEnum } from './non-breaking-schema-updates-behavior-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { StreamConfigurations } from './stream-configurations';

/**
 * 
 * @export
 * @interface ConnectionCreateRequest
 */
export interface ConnectionCreateRequest {
    /**
     * Optional name of the connection
     * @type {string}
     * @memberof ConnectionCreateRequest
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectionCreateRequest
     */
    'sourceId': string;
    /**
     * 
     * @type {string}
     * @memberof ConnectionCreateRequest
     */
    'destinationId': string;
    /**
     * 
     * @type {StreamConfigurations}
     * @memberof ConnectionCreateRequest
     */
    'configurations'?: StreamConfigurations;
    /**
     * 
     * @type {AirbyteApiConnectionSchedule}
     * @memberof ConnectionCreateRequest
     */
    'schedule'?: AirbyteApiConnectionSchedule;
    /**
     * 
     * @type {GeographyEnum}
     * @memberof ConnectionCreateRequest
     */
    'dataResidency'?: GeographyEnum;
    /**
     * 
     * @type {NamespaceDefinitionEnum}
     * @memberof ConnectionCreateRequest
     */
    'namespaceDefinition'?: NamespaceDefinitionEnum;
    /**
     * Used when namespaceDefinition is \'custom_format\'. If blank then behaves like namespaceDefinition = \'destination\'. If \"${SOURCE_NAMESPACE}\" then behaves like namespaceDefinition = \'source\'.
     * @type {string}
     * @memberof ConnectionCreateRequest
     */
    'namespaceFormat'?: string;
    /**
     * Prefix that will be prepended to the name of each stream when it is written to the destination (ex. “airbyte_” causes “projects” => “airbyte_projects”).
     * @type {string}
     * @memberof ConnectionCreateRequest
     */
    'prefix'?: string;
    /**
     * 
     * @type {NonBreakingSchemaUpdatesBehaviorEnum}
     * @memberof ConnectionCreateRequest
     */
    'nonBreakingSchemaUpdatesBehavior'?: NonBreakingSchemaUpdatesBehaviorEnum;
    /**
     * 
     * @type {ConnectionStatusEnum}
     * @memberof ConnectionCreateRequest
     */
    'status'?: ConnectionStatusEnum;
}



