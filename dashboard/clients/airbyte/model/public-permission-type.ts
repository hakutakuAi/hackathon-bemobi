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
 * Subset of `PermissionType` (removing `instance_admin`), could be used in public-api.
 * @export
 * @enum {string}
 */

export const PublicPermissionType = {
    ORGANIZATION_ADMIN: 'organization_admin',
    ORGANIZATION_EDITOR: 'organization_editor',
    ORGANIZATION_READER: 'organization_reader',
    ORGANIZATION_MEMBER: 'organization_member',
    WORKSPACE_ADMIN: 'workspace_admin',
    WORKSPACE_EDITOR: 'workspace_editor',
    WORKSPACE_READER: 'workspace_reader'
} as const;

export type PublicPermissionType = typeof PublicPermissionType[keyof typeof PublicPermissionType];


