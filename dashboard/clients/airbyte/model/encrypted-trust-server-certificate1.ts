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
 * Use the certificate provided by the server without verification. (For testing purposes only!)
 * @export
 * @interface EncryptedTrustServerCertificate1
 */
export interface EncryptedTrustServerCertificate1 {
    /**
     * 
     * @type {string}
     * @memberof EncryptedTrustServerCertificate1
     */
    'ssl_method': EncryptedTrustServerCertificate1SslMethodEnum;
}

export const EncryptedTrustServerCertificate1SslMethodEnum = {
    ENCRYPTED_TRUST_SERVER_CERTIFICATE: 'encrypted_trust_server_certificate'
} as const;

export type EncryptedTrustServerCertificate1SslMethodEnum = typeof EncryptedTrustServerCertificate1SslMethodEnum[keyof typeof EncryptedTrustServerCertificate1SslMethodEnum];

