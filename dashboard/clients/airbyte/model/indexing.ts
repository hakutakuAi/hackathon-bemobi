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
import type { Authentication36 } from './authentication36';
// May contain unused imports in some cases
// @ts-ignore
import type { Header } from './header';

/**
 * Indexing configuration
 * @export
 * @interface Indexing
 */
export interface Indexing {
    /**
     * The public endpoint of the Weaviate cluster.
     * @type {string}
     * @memberof Indexing
     */
    'host': string;
    /**
     * 
     * @type {Authentication36}
     * @memberof Indexing
     */
    'auth': Authentication36;
    /**
     * The number of records to send to Weaviate in each batch
     * @type {number}
     * @memberof Indexing
     */
    'batch_size'?: number;
    /**
     * The field in the object that contains the embedded text
     * @type {string}
     * @memberof Indexing
     */
    'text_field'?: string;
    /**
     * The tenant ID to use for multi tenancy
     * @type {string}
     * @memberof Indexing
     */
    'tenant_id'?: string;
    /**
     * The vectorizer to use if new classes need to be created
     * @type {string}
     * @memberof Indexing
     */
    'default_vectorizer'?: IndexingDefaultVectorizerEnum;
    /**
     * Additional HTTP headers to send with every request.
     * @type {Array<Header>}
     * @memberof Indexing
     */
    'additional_headers'?: Array<Header>;
}

export const IndexingDefaultVectorizerEnum = {
    NONE: 'none',
    TEXT2VEC_COHERE: 'text2vec-cohere',
    TEXT2VEC_HUGGINGFACE: 'text2vec-huggingface',
    TEXT2VEC_OPENAI: 'text2vec-openai',
    TEXT2VEC_PALM: 'text2vec-palm',
    TEXT2VEC_CONTEXTIONARY: 'text2vec-contextionary',
    TEXT2VEC_TRANSFORMERS: 'text2vec-transformers',
    TEXT2VEC_GPT4ALL: 'text2vec-gpt4all'
} as const;

export type IndexingDefaultVectorizerEnum = typeof IndexingDefaultVectorizerEnum[keyof typeof IndexingDefaultVectorizerEnum];

