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
import type { NoTunnel } from './no-tunnel';
// May contain unused imports in some cases
// @ts-ignore
import type { PasswordAuthentication } from './password-authentication';
// May contain unused imports in some cases
// @ts-ignore
import type { SSHKeyAuthentication } from './sshkey-authentication';

/**
 * @type SSHTunnelMethod2
 * Whether to initiate an SSH tunnel before connecting to the database, and if so, which kind of authentication to use.
 * @export
 */
export type SSHTunnelMethod2 = NoTunnel | PasswordAuthentication | SSHKeyAuthentication;

