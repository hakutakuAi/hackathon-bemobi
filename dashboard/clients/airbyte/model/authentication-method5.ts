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
import type { AccessToken3 } from './access-token3';
// May contain unused imports in some cases
// @ts-ignore
import type { OAuth2015 } from './oauth2015';

/**
 * @type AuthenticationMethod5
 * Choose either OAuth (recommended for Airbyte Cloud) or Access Token. See our <a href=\'https://docs.airbyte.com/integrations/sources/notion#setup-guide\'>docs</a> for more information.
 * @export
 */
export type AuthenticationMethod5 = AccessToken3 | OAuth2015;

