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
 * Data transfer will not be encrypted.
 * @export
 * @interface Unencrypted
 */
export interface Unencrypted {
    /**
     * 
     * @type {string}
     * @memberof Unencrypted
     */
    'encryption_method': UnencryptedEncryptionMethodEnum;
}

export const UnencryptedEncryptionMethodEnum = {
    UNENCRYPTED: 'unencrypted'
} as const;

export type UnencryptedEncryptionMethodEnum = typeof UnencryptedEncryptionMethodEnum[keyof typeof UnencryptedEncryptionMethodEnum];

