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
 * @interface KeyPairAuthentication2
 */
export interface KeyPairAuthentication2 {
    /**
     * 
     * @type {string}
     * @memberof KeyPairAuthentication2
     */
    'auth_type'?: KeyPairAuthentication2AuthTypeEnum;
    /**
     * RSA Private key to use for Snowflake connection. See the <a href=\"https://docs.airbyte.com/integrations/destinations/snowflake\">docs</a> for more information on how to obtain this key.
     * @type {string}
     * @memberof KeyPairAuthentication2
     */
    'private_key': string;
    /**
     * Passphrase for private key
     * @type {string}
     * @memberof KeyPairAuthentication2
     */
    'private_key_password'?: string;
}

export const KeyPairAuthentication2AuthTypeEnum = {
    KEY_PAIR_AUTHENTICATION: 'Key Pair Authentication'
} as const;

export type KeyPairAuthentication2AuthTypeEnum = typeof KeyPairAuthentication2AuthTypeEnum[keyof typeof KeyPairAuthentication2AuthTypeEnum];

