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
import type { Embedding2 } from './embedding2';
// May contain unused imports in some cases
// @ts-ignore
import type { Indexing8 } from './indexing8';
// May contain unused imports in some cases
// @ts-ignore
import type { ProcessingConfigModel } from './processing-config-model';

/**
 * The configuration model for the Vector DB based destinations. This model is used to generate the UI for the destination configuration, as well as to provide type safety for the configuration passed to the destination.  The configuration model is composed of four parts: * Processing configuration * Embedding configuration * Indexing configuration * Advanced configuration  Processing, embedding and advanced configuration are provided by this base class, while the indexing configuration is provided by the destination connector in the sub class.
 * @export
 * @interface DestinationPinecone
 */
export interface DestinationPinecone {
    /**
     * 
     * @type {Embedding2}
     * @memberof DestinationPinecone
     */
    'embedding': Embedding2;
    /**
     * 
     * @type {ProcessingConfigModel}
     * @memberof DestinationPinecone
     */
    'processing': ProcessingConfigModel;
    /**
     * Do not store the text that gets embedded along with the vector and the metadata in the destination. If set to true, only the vector and the metadata will be stored - in this case raw text for LLM use cases needs to be retrieved from another source.
     * @type {boolean}
     * @memberof DestinationPinecone
     */
    'omit_raw_text'?: boolean;
    /**
     * 
     * @type {Indexing8}
     * @memberof DestinationPinecone
     */
    'indexing': Indexing8;
    /**
     * 
     * @type {string}
     * @memberof DestinationPinecone
     */
    'destinationType': DestinationPineconeDestinationTypeEnum;
}

export const DestinationPineconeDestinationTypeEnum = {
    PINECONE: 'pinecone'
} as const;

export type DestinationPineconeDestinationTypeEnum = typeof DestinationPineconeDestinationTypeEnum[keyof typeof DestinationPineconeDestinationTypeEnum];

