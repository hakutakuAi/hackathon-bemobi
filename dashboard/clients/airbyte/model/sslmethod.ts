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
import type { EncryptedTrustServerCertificate } from './encrypted-trust-server-certificate';
// May contain unused imports in some cases
// @ts-ignore
import type { EncryptedVerifyCertificate } from './encrypted-verify-certificate';
// May contain unused imports in some cases
// @ts-ignore
import type { Unencrypted1 } from './unencrypted1';

/**
 * @type SSLMethod
 * The encryption method which is used when communicating with the database.
 * @export
 */
export type SSLMethod = EncryptedTrustServerCertificate | EncryptedVerifyCertificate | Unencrypted1;

