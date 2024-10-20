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
import type { GeographyEnumNoDefault } from './geography-enum-no-default';
// May contain unused imports in some cases
// @ts-ignore
import type { NamespaceDefinitionEnumNoDefault } from './namespace-definition-enum-no-default';
// May contain unused imports in some cases
// @ts-ignore
import type { NonBreakingSchemaUpdatesBehaviorEnumNoDefault } from './non-breaking-schema-updates-behavior-enum-no-default';
// May contain unused imports in some cases
// @ts-ignore
import type { StreamConfigurations } from './stream-configurations';

/**
 * 
 * @export
 * @interface ConnectionPatchRequest
 */
export interface ConnectionPatchRequest {
    /**
     * Optional name of the connection
     * @type {string}
     * @memberof ConnectionPatchRequest
     */
    'name'?: string;
    /**
     * 
     * @type {StreamConfigurations}
     * @memberof ConnectionPatchRequest
     */
    'configurations'?: StreamConfigurations;
    /**
     * 
     * @type {AirbyteApiConnectionSchedule}
     * @memberof ConnectionPatchRequest
     */
    'schedule'?: AirbyteApiConnectionSchedule;
    /**
     * 
     * @type {GeographyEnumNoDefault}
     * @memberof ConnectionPatchRequest
     */
    'dataResidency'?: GeographyEnumNoDefault;
    /**
     * 
     * @type {NamespaceDefinitionEnumNoDefault}
     * @memberof ConnectionPatchRequest
     */
    'namespaceDefinition'?: NamespaceDefinitionEnumNoDefault;
    /**
     * Used when namespaceDefinition is \'custom_format\'. If blank then behaves like namespaceDefinition = \'destination\'. If \"${SOURCE_NAMESPACE}\" then behaves like namespaceDefinition = \'source\'.
     * @type {string}
     * @memberof ConnectionPatchRequest
     */
    'namespaceFormat'?: string;
    /**
     * Prefix that will be prepended to the name of each stream when it is written to the destination (ex. “airbyte_” causes “projects” => “airbyte_projects”).
     * @type {string}
     * @memberof ConnectionPatchRequest
     */
    'prefix'?: string;
    /**
     * 
     * @type {NonBreakingSchemaUpdatesBehaviorEnumNoDefault}
     * @memberof ConnectionPatchRequest
     */
    'nonBreakingSchemaUpdatesBehavior'?: NonBreakingSchemaUpdatesBehaviorEnumNoDefault;
    /**
     * 
     * @type {ConnectionStatusEnum}
     * @memberof ConnectionPatchRequest
     */
    'status'?: ConnectionStatusEnum;
}



