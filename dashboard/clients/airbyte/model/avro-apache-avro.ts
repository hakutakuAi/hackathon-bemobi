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
import type { CompressionCodec } from './compression-codec';

/**
 * 
 * @export
 * @interface AvroApacheAvro
 */
export interface AvroApacheAvro {
    /**
     * 
     * @type {string}
     * @memberof AvroApacheAvro
     */
    'format_type': AvroApacheAvroFormatTypeEnum;
    /**
     * 
     * @type {CompressionCodec}
     * @memberof AvroApacheAvro
     */
    'compression_codec': CompressionCodec;
}

export const AvroApacheAvroFormatTypeEnum = {
    AVRO: 'Avro'
} as const;

export type AvroApacheAvroFormatTypeEnum = typeof AvroApacheAvroFormatTypeEnum[keyof typeof AvroApacheAvroFormatTypeEnum];

