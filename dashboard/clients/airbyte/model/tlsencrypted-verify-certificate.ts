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
 * Verify and use the certificate provided by the server.
 * @export
 * @interface TLSEncryptedVerifyCertificate
 */
export interface TLSEncryptedVerifyCertificate {
    /**
     * 
     * @type {string}
     * @memberof TLSEncryptedVerifyCertificate
     */
    'encryption_method': TLSEncryptedVerifyCertificateEncryptionMethodEnum;
    /**
     * Privacy Enhanced Mail (PEM) files are concatenated certificate containers frequently used in certificate installations.
     * @type {string}
     * @memberof TLSEncryptedVerifyCertificate
     */
    'ssl_certificate': string;
}

export const TLSEncryptedVerifyCertificateEncryptionMethodEnum = {
    ENCRYPTED_VERIFY_CERTIFICATE: 'encrypted_verify_certificate'
} as const;

export type TLSEncryptedVerifyCertificateEncryptionMethodEnum = typeof TLSEncryptedVerifyCertificateEncryptionMethodEnum[keyof typeof TLSEncryptedVerifyCertificateEncryptionMethodEnum];

