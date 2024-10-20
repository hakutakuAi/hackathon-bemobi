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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { StreamProperties } from '../model';
/**
 * PublicStreamsApi - axios parameter creator
 * @export
 */
export const PublicStreamsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get stream properties
         * @param {string} sourceId ID of the source
         * @param {string} [destinationId] ID of the destination
         * @param {boolean} [ignoreCache] If true pull the latest schema from the source, else pull from cache (default false)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStreamProperties: async (sourceId: string, destinationId?: string, ignoreCache?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'sourceId' is not null or undefined
            assertParamExists('getStreamProperties', 'sourceId', sourceId)
            const localVarPath = `/streams`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (sourceId !== undefined) {
                localVarQueryParameter['sourceId'] = sourceId;
            }

            if (destinationId !== undefined) {
                localVarQueryParameter['destinationId'] = destinationId;
            }

            if (ignoreCache !== undefined) {
                localVarQueryParameter['ignoreCache'] = ignoreCache;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PublicStreamsApi - functional programming interface
 * @export
 */
export const PublicStreamsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PublicStreamsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get stream properties
         * @param {string} sourceId ID of the source
         * @param {string} [destinationId] ID of the destination
         * @param {boolean} [ignoreCache] If true pull the latest schema from the source, else pull from cache (default false)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStreamProperties(sourceId: string, destinationId?: string, ignoreCache?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<StreamProperties>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStreamProperties(sourceId, destinationId, ignoreCache, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PublicStreamsApi.getStreamProperties']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PublicStreamsApi - factory interface
 * @export
 */
export const PublicStreamsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PublicStreamsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get stream properties
         * @param {PublicStreamsApiGetStreamPropertiesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStreamProperties(requestParameters: PublicStreamsApiGetStreamPropertiesRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<StreamProperties>> {
            return localVarFp.getStreamProperties(requestParameters.sourceId, requestParameters.destinationId, requestParameters.ignoreCache, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getStreamProperties operation in PublicStreamsApi.
 * @export
 * @interface PublicStreamsApiGetStreamPropertiesRequest
 */
export interface PublicStreamsApiGetStreamPropertiesRequest {
    /**
     * ID of the source
     * @type {string}
     * @memberof PublicStreamsApiGetStreamProperties
     */
    readonly sourceId: string

    /**
     * ID of the destination
     * @type {string}
     * @memberof PublicStreamsApiGetStreamProperties
     */
    readonly destinationId?: string

    /**
     * If true pull the latest schema from the source, else pull from cache (default false)
     * @type {boolean}
     * @memberof PublicStreamsApiGetStreamProperties
     */
    readonly ignoreCache?: boolean
}

/**
 * PublicStreamsApi - object-oriented interface
 * @export
 * @class PublicStreamsApi
 * @extends {BaseAPI}
 */
export class PublicStreamsApi extends BaseAPI {
    /**
     * 
     * @summary Get stream properties
     * @param {PublicStreamsApiGetStreamPropertiesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicStreamsApi
     */
    public getStreamProperties(requestParameters: PublicStreamsApiGetStreamPropertiesRequest, options?: RawAxiosRequestConfig) {
        return PublicStreamsApiFp(this.configuration).getStreamProperties(requestParameters.sourceId, requestParameters.destinationId, requestParameters.ignoreCache, options).then((request) => request(this.axios, this.basePath));
    }
}

