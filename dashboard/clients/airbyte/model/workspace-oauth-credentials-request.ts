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
import type { ActorTypeEnum } from './actor-type-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { OAuthActorNames } from './oauth-actor-names';
// May contain unused imports in some cases
// @ts-ignore
import type { OAuthCredentialsConfiguration } from './oauth-credentials-configuration';

/**
 * POST body for creating/updating workspace level OAuth credentials
 * @export
 * @interface WorkspaceOAuthCredentialsRequest
 */
export interface WorkspaceOAuthCredentialsRequest {
    /**
     * 
     * @type {ActorTypeEnum}
     * @memberof WorkspaceOAuthCredentialsRequest
     */
    'actorType': ActorTypeEnum;
    /**
     * 
     * @type {OAuthActorNames}
     * @memberof WorkspaceOAuthCredentialsRequest
     */
    'name': OAuthActorNames;
    /**
     * 
     * @type {OAuthCredentialsConfiguration}
     * @memberof WorkspaceOAuthCredentialsRequest
     */
    'configuration': OAuthCredentialsConfiguration | null;
}


