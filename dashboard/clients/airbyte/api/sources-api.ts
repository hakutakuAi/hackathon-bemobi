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
import type { InitiateOauthRequest } from '../model';
// @ts-ignore
import type { SourceCreateRequest } from '../model';
// @ts-ignore
import type { SourcePatchRequest } from '../model';
// @ts-ignore
import type { SourcePutRequest } from '../model';
// @ts-ignore
import type { SourceResponse } from '../model';
// @ts-ignore
import type { SourcesResponse } from '../model';
/**
 * SourcesApi - axios parameter creator
 * @export
 */
export const SourcesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a source given a name, workspace id, and a json blob containing the configuration for the source.
         * @summary Create a source
         * @param {SourceCreateRequest} [sourceCreateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSource: async (sourceCreateRequest?: SourceCreateRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sources`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(sourceCreateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete a Source
         * @param {string} sourceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSource: async (sourceId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'sourceId' is not null or undefined
            assertParamExists('deleteSource', 'sourceId', sourceId)
            const localVarPath = `/sources/{sourceId}`
                .replace(`{${"sourceId"}}`, encodeURIComponent(String(sourceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Source details
         * @param {string} sourceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSource: async (sourceId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'sourceId' is not null or undefined
            assertParamExists('getSource', 'sourceId', sourceId)
            const localVarPath = `/sources/{sourceId}`
                .replace(`{${"sourceId"}}`, encodeURIComponent(String(sourceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Given a source ID, workspace ID, and redirect URL, initiates OAuth for the source.  This returns a fully formed URL for performing user authentication against the relevant source identity provider (IdP). Once authentication has been completed, the IdP will redirect to an Airbyte endpoint which will save the access and refresh tokens off as a secret and return the secret ID to the redirect URL specified in the `secret_id` query string parameter.  That secret ID can be used to create a source with credentials in place of actual tokens.
         * @summary Initiate OAuth for a source
         * @param {InitiateOauthRequest} initiateOauthRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        initiateOAuth: async (initiateOauthRequest: InitiateOauthRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'initiateOauthRequest' is not null or undefined
            assertParamExists('initiateOAuth', 'initiateOauthRequest', initiateOauthRequest)
            const localVarPath = `/sources/initiateOAuth`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(initiateOauthRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary List sources
         * @param {Array<string>} [workspaceIds] The UUIDs of the workspaces you wish to list sources for. Empty list will retrieve all allowed workspaces.
         * @param {boolean} [includeDeleted] Include deleted sources in the returned results.
         * @param {number} [limit] Set the limit on the number of sources returned. The default is 20.
         * @param {number} [offset] Set the offset to start at when returning sources. The default is 0
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSources: async (workspaceIds?: Array<string>, includeDeleted?: boolean, limit?: number, offset?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sources`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (workspaceIds) {
                localVarQueryParameter['workspaceIds'] = workspaceIds;
            }

            if (includeDeleted !== undefined) {
                localVarQueryParameter['includeDeleted'] = includeDeleted;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update a Source
         * @param {string} sourceId 
         * @param {SourcePatchRequest} [sourcePatchRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchSource: async (sourceId: string, sourcePatchRequest?: SourcePatchRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'sourceId' is not null or undefined
            assertParamExists('patchSource', 'sourceId', sourceId)
            const localVarPath = `/sources/{sourceId}`
                .replace(`{${"sourceId"}}`, encodeURIComponent(String(sourceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(sourcePatchRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update a Source and fully overwrite it
         * @param {string} sourceId 
         * @param {SourcePutRequest} [sourcePutRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putSource: async (sourceId: string, sourcePutRequest?: SourcePutRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'sourceId' is not null or undefined
            assertParamExists('putSource', 'sourceId', sourceId)
            const localVarPath = `/sources/{sourceId}`
                .replace(`{${"sourceId"}}`, encodeURIComponent(String(sourceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(sourcePutRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SourcesApi - functional programming interface
 * @export
 */
export const SourcesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SourcesApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a source given a name, workspace id, and a json blob containing the configuration for the source.
         * @summary Create a source
         * @param {SourceCreateRequest} [sourceCreateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSource(sourceCreateRequest?: SourceCreateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SourceResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createSource(sourceCreateRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SourcesApi.createSource']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Delete a Source
         * @param {string} sourceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSource(sourceId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSource(sourceId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SourcesApi.deleteSource']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get Source details
         * @param {string} sourceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSource(sourceId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SourceResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSource(sourceId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SourcesApi.getSource']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Given a source ID, workspace ID, and redirect URL, initiates OAuth for the source.  This returns a fully formed URL for performing user authentication against the relevant source identity provider (IdP). Once authentication has been completed, the IdP will redirect to an Airbyte endpoint which will save the access and refresh tokens off as a secret and return the secret ID to the redirect URL specified in the `secret_id` query string parameter.  That secret ID can be used to create a source with credentials in place of actual tokens.
         * @summary Initiate OAuth for a source
         * @param {InitiateOauthRequest} initiateOauthRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async initiateOAuth(initiateOauthRequest: InitiateOauthRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.initiateOAuth(initiateOauthRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SourcesApi.initiateOAuth']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary List sources
         * @param {Array<string>} [workspaceIds] The UUIDs of the workspaces you wish to list sources for. Empty list will retrieve all allowed workspaces.
         * @param {boolean} [includeDeleted] Include deleted sources in the returned results.
         * @param {number} [limit] Set the limit on the number of sources returned. The default is 20.
         * @param {number} [offset] Set the offset to start at when returning sources. The default is 0
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listSources(workspaceIds?: Array<string>, includeDeleted?: boolean, limit?: number, offset?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SourcesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listSources(workspaceIds, includeDeleted, limit, offset, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SourcesApi.listSources']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Update a Source
         * @param {string} sourceId 
         * @param {SourcePatchRequest} [sourcePatchRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchSource(sourceId: string, sourcePatchRequest?: SourcePatchRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SourceResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchSource(sourceId, sourcePatchRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SourcesApi.patchSource']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Update a Source and fully overwrite it
         * @param {string} sourceId 
         * @param {SourcePutRequest} [sourcePutRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putSource(sourceId: string, sourcePutRequest?: SourcePutRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SourceResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.putSource(sourceId, sourcePutRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SourcesApi.putSource']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SourcesApi - factory interface
 * @export
 */
export const SourcesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SourcesApiFp(configuration)
    return {
        /**
         * Creates a source given a name, workspace id, and a json blob containing the configuration for the source.
         * @summary Create a source
         * @param {SourcesApiCreateSource1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSource(requestParameters: SourcesApiCreateSource1Request = {}, options?: RawAxiosRequestConfig): AxiosPromise<SourceResponse> {
            return localVarFp.createSource(requestParameters.sourceCreateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete a Source
         * @param {SourcesApiDeleteSource1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSource(requestParameters: SourcesApiDeleteSource1Request, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteSource(requestParameters.sourceId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Source details
         * @param {SourcesApiGetSource1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSource(requestParameters: SourcesApiGetSource1Request, options?: RawAxiosRequestConfig): AxiosPromise<SourceResponse> {
            return localVarFp.getSource(requestParameters.sourceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Given a source ID, workspace ID, and redirect URL, initiates OAuth for the source.  This returns a fully formed URL for performing user authentication against the relevant source identity provider (IdP). Once authentication has been completed, the IdP will redirect to an Airbyte endpoint which will save the access and refresh tokens off as a secret and return the secret ID to the redirect URL specified in the `secret_id` query string parameter.  That secret ID can be used to create a source with credentials in place of actual tokens.
         * @summary Initiate OAuth for a source
         * @param {SourcesApiInitiateOAuth1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        initiateOAuth(requestParameters: SourcesApiInitiateOAuth1Request, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.initiateOAuth(requestParameters.initiateOauthRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List sources
         * @param {SourcesApiListSources1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSources(requestParameters: SourcesApiListSources1Request = {}, options?: RawAxiosRequestConfig): AxiosPromise<SourcesResponse> {
            return localVarFp.listSources(requestParameters.workspaceIds, requestParameters.includeDeleted, requestParameters.limit, requestParameters.offset, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a Source
         * @param {SourcesApiPatchSource1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchSource(requestParameters: SourcesApiPatchSource1Request, options?: RawAxiosRequestConfig): AxiosPromise<SourceResponse> {
            return localVarFp.patchSource(requestParameters.sourceId, requestParameters.sourcePatchRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a Source and fully overwrite it
         * @param {SourcesApiPutSource1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putSource(requestParameters: SourcesApiPutSource1Request, options?: RawAxiosRequestConfig): AxiosPromise<SourceResponse> {
            return localVarFp.putSource(requestParameters.sourceId, requestParameters.sourcePutRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createSource operation in SourcesApi.
 * @export
 * @interface SourcesApiCreateSource1Request
 */
export interface SourcesApiCreateSource1Request {
    /**
     * 
     * @type {SourceCreateRequest}
     * @memberof SourcesApiCreateSource1
     */
    readonly sourceCreateRequest?: SourceCreateRequest
}

/**
 * Request parameters for deleteSource operation in SourcesApi.
 * @export
 * @interface SourcesApiDeleteSource1Request
 */
export interface SourcesApiDeleteSource1Request {
    /**
     * 
     * @type {string}
     * @memberof SourcesApiDeleteSource1
     */
    readonly sourceId: string
}

/**
 * Request parameters for getSource operation in SourcesApi.
 * @export
 * @interface SourcesApiGetSource1Request
 */
export interface SourcesApiGetSource1Request {
    /**
     * 
     * @type {string}
     * @memberof SourcesApiGetSource1
     */
    readonly sourceId: string
}

/**
 * Request parameters for initiateOAuth operation in SourcesApi.
 * @export
 * @interface SourcesApiInitiateOAuth1Request
 */
export interface SourcesApiInitiateOAuth1Request {
    /**
     * 
     * @type {InitiateOauthRequest}
     * @memberof SourcesApiInitiateOAuth1
     */
    readonly initiateOauthRequest: InitiateOauthRequest
}

/**
 * Request parameters for listSources operation in SourcesApi.
 * @export
 * @interface SourcesApiListSources1Request
 */
export interface SourcesApiListSources1Request {
    /**
     * The UUIDs of the workspaces you wish to list sources for. Empty list will retrieve all allowed workspaces.
     * @type {Array<string>}
     * @memberof SourcesApiListSources1
     */
    readonly workspaceIds?: Array<string>

    /**
     * Include deleted sources in the returned results.
     * @type {boolean}
     * @memberof SourcesApiListSources1
     */
    readonly includeDeleted?: boolean

    /**
     * Set the limit on the number of sources returned. The default is 20.
     * @type {number}
     * @memberof SourcesApiListSources1
     */
    readonly limit?: number

    /**
     * Set the offset to start at when returning sources. The default is 0
     * @type {number}
     * @memberof SourcesApiListSources1
     */
    readonly offset?: number
}

/**
 * Request parameters for patchSource operation in SourcesApi.
 * @export
 * @interface SourcesApiPatchSource1Request
 */
export interface SourcesApiPatchSource1Request {
    /**
     * 
     * @type {string}
     * @memberof SourcesApiPatchSource1
     */
    readonly sourceId: string

    /**
     * 
     * @type {SourcePatchRequest}
     * @memberof SourcesApiPatchSource1
     */
    readonly sourcePatchRequest?: SourcePatchRequest
}

/**
 * Request parameters for putSource operation in SourcesApi.
 * @export
 * @interface SourcesApiPutSource1Request
 */
export interface SourcesApiPutSource1Request {
    /**
     * 
     * @type {string}
     * @memberof SourcesApiPutSource1
     */
    readonly sourceId: string

    /**
     * 
     * @type {SourcePutRequest}
     * @memberof SourcesApiPutSource1
     */
    readonly sourcePutRequest?: SourcePutRequest
}

/**
 * SourcesApi - object-oriented interface
 * @export
 * @class SourcesApi
 * @extends {BaseAPI}
 */
export class SourcesApi extends BaseAPI {
    /**
     * Creates a source given a name, workspace id, and a json blob containing the configuration for the source.
     * @summary Create a source
     * @param {SourcesApiCreateSource1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SourcesApi
     */
    public createSource(requestParameters: SourcesApiCreateSource1Request = {}, options?: RawAxiosRequestConfig) {
        return SourcesApiFp(this.configuration).createSource(requestParameters.sourceCreateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete a Source
     * @param {SourcesApiDeleteSource1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SourcesApi
     */
    public deleteSource(requestParameters: SourcesApiDeleteSource1Request, options?: RawAxiosRequestConfig) {
        return SourcesApiFp(this.configuration).deleteSource(requestParameters.sourceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Source details
     * @param {SourcesApiGetSource1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SourcesApi
     */
    public getSource(requestParameters: SourcesApiGetSource1Request, options?: RawAxiosRequestConfig) {
        return SourcesApiFp(this.configuration).getSource(requestParameters.sourceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Given a source ID, workspace ID, and redirect URL, initiates OAuth for the source.  This returns a fully formed URL for performing user authentication against the relevant source identity provider (IdP). Once authentication has been completed, the IdP will redirect to an Airbyte endpoint which will save the access and refresh tokens off as a secret and return the secret ID to the redirect URL specified in the `secret_id` query string parameter.  That secret ID can be used to create a source with credentials in place of actual tokens.
     * @summary Initiate OAuth for a source
     * @param {SourcesApiInitiateOAuth1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SourcesApi
     */
    public initiateOAuth(requestParameters: SourcesApiInitiateOAuth1Request, options?: RawAxiosRequestConfig) {
        return SourcesApiFp(this.configuration).initiateOAuth(requestParameters.initiateOauthRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List sources
     * @param {SourcesApiListSources1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SourcesApi
     */
    public listSources(requestParameters: SourcesApiListSources1Request = {}, options?: RawAxiosRequestConfig) {
        return SourcesApiFp(this.configuration).listSources(requestParameters.workspaceIds, requestParameters.includeDeleted, requestParameters.limit, requestParameters.offset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update a Source
     * @param {SourcesApiPatchSource1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SourcesApi
     */
    public patchSource(requestParameters: SourcesApiPatchSource1Request, options?: RawAxiosRequestConfig) {
        return SourcesApiFp(this.configuration).patchSource(requestParameters.sourceId, requestParameters.sourcePatchRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update a Source and fully overwrite it
     * @param {SourcesApiPutSource1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SourcesApi
     */
    public putSource(requestParameters: SourcesApiPutSource1Request, options?: RawAxiosRequestConfig) {
        return SourcesApiFp(this.configuration).putSource(requestParameters.sourceId, requestParameters.sourcePutRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

