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
import type { WorkspaceCreateRequest } from '../model';
// @ts-ignore
import type { WorkspaceOAuthCredentialsRequest } from '../model';
// @ts-ignore
import type { WorkspaceResponse } from '../model';
// @ts-ignore
import type { WorkspaceUpdateRequest } from '../model';
// @ts-ignore
import type { WorkspacesResponse } from '../model';
/**
 * PublicWorkspacesApi - axios parameter creator
 * @export
 */
export const PublicWorkspacesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create/update a set of OAuth credentials to override the Airbyte-provided OAuth credentials used for source/destination OAuth. In order to determine what the credential configuration needs to be, please see the connector specification of the relevant source/destination.
         * @summary Create OAuth override credentials for a workspace and source type.
         * @param {string} workspaceId 
         * @param {WorkspaceOAuthCredentialsRequest} workspaceOAuthCredentialsRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOrUpdateWorkspaceOAuthCredentials: async (workspaceId: string, workspaceOAuthCredentialsRequest: WorkspaceOAuthCredentialsRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'workspaceId' is not null or undefined
            assertParamExists('createOrUpdateWorkspaceOAuthCredentials', 'workspaceId', workspaceId)
            // verify required parameter 'workspaceOAuthCredentialsRequest' is not null or undefined
            assertParamExists('createOrUpdateWorkspaceOAuthCredentials', 'workspaceOAuthCredentialsRequest', workspaceOAuthCredentialsRequest)
            const localVarPath = `/workspaces/{workspaceId}/oauthCredentials`
                .replace(`{${"workspaceId"}}`, encodeURIComponent(String(workspaceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication clientCredentials required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "clientCredentials", [], configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(workspaceOAuthCredentialsRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create a workspace
         * @param {WorkspaceCreateRequest} workspaceCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createWorkspace: async (workspaceCreateRequest: WorkspaceCreateRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'workspaceCreateRequest' is not null or undefined
            assertParamExists('createWorkspace', 'workspaceCreateRequest', workspaceCreateRequest)
            const localVarPath = `/workspaces`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication clientCredentials required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "clientCredentials", [], configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(workspaceCreateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete a Workspace
         * @param {string} workspaceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWorkspace: async (workspaceId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'workspaceId' is not null or undefined
            assertParamExists('deleteWorkspace', 'workspaceId', workspaceId)
            const localVarPath = `/workspaces/{workspaceId}`
                .replace(`{${"workspaceId"}}`, encodeURIComponent(String(workspaceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication clientCredentials required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "clientCredentials", [], configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
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
         * @summary Get Workspace details
         * @param {string} workspaceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorkspace: async (workspaceId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'workspaceId' is not null or undefined
            assertParamExists('getWorkspace', 'workspaceId', workspaceId)
            const localVarPath = `/workspaces/{workspaceId}`
                .replace(`{${"workspaceId"}}`, encodeURIComponent(String(workspaceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication clientCredentials required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "clientCredentials", [], configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
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
         * @summary List workspaces
         * @param {Array<string>} [workspaceIds] The UUIDs of the workspaces you wish to fetch. Empty list will retrieve all allowed workspaces.
         * @param {boolean} [includeDeleted] Include deleted workspaces in the returned results.
         * @param {number} [limit] Set the limit on the number of workspaces returned. The default is 20.
         * @param {number} [offset] Set the offset to start at when returning workspaces. The default is 0
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listWorkspaces: async (workspaceIds?: Array<string>, includeDeleted?: boolean, limit?: number, offset?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/workspaces`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication clientCredentials required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "clientCredentials", [], configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

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
         * @summary Update a workspace
         * @param {string} workspaceId 
         * @param {WorkspaceUpdateRequest} workspaceUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWorkspace: async (workspaceId: string, workspaceUpdateRequest: WorkspaceUpdateRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'workspaceId' is not null or undefined
            assertParamExists('updateWorkspace', 'workspaceId', workspaceId)
            // verify required parameter 'workspaceUpdateRequest' is not null or undefined
            assertParamExists('updateWorkspace', 'workspaceUpdateRequest', workspaceUpdateRequest)
            const localVarPath = `/workspaces/{workspaceId}`
                .replace(`{${"workspaceId"}}`, encodeURIComponent(String(workspaceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication clientCredentials required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "clientCredentials", [], configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(workspaceUpdateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PublicWorkspacesApi - functional programming interface
 * @export
 */
export const PublicWorkspacesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PublicWorkspacesApiAxiosParamCreator(configuration)
    return {
        /**
         * Create/update a set of OAuth credentials to override the Airbyte-provided OAuth credentials used for source/destination OAuth. In order to determine what the credential configuration needs to be, please see the connector specification of the relevant source/destination.
         * @summary Create OAuth override credentials for a workspace and source type.
         * @param {string} workspaceId 
         * @param {WorkspaceOAuthCredentialsRequest} workspaceOAuthCredentialsRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOrUpdateWorkspaceOAuthCredentials(workspaceId: string, workspaceOAuthCredentialsRequest: WorkspaceOAuthCredentialsRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOrUpdateWorkspaceOAuthCredentials(workspaceId, workspaceOAuthCredentialsRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PublicWorkspacesApi.createOrUpdateWorkspaceOAuthCredentials']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Create a workspace
         * @param {WorkspaceCreateRequest} workspaceCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createWorkspace(workspaceCreateRequest: WorkspaceCreateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkspaceResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createWorkspace(workspaceCreateRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PublicWorkspacesApi.createWorkspace']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Delete a Workspace
         * @param {string} workspaceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteWorkspace(workspaceId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteWorkspace(workspaceId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PublicWorkspacesApi.deleteWorkspace']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get Workspace details
         * @param {string} workspaceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWorkspace(workspaceId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkspaceResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWorkspace(workspaceId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PublicWorkspacesApi.getWorkspace']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary List workspaces
         * @param {Array<string>} [workspaceIds] The UUIDs of the workspaces you wish to fetch. Empty list will retrieve all allowed workspaces.
         * @param {boolean} [includeDeleted] Include deleted workspaces in the returned results.
         * @param {number} [limit] Set the limit on the number of workspaces returned. The default is 20.
         * @param {number} [offset] Set the offset to start at when returning workspaces. The default is 0
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listWorkspaces(workspaceIds?: Array<string>, includeDeleted?: boolean, limit?: number, offset?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkspacesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listWorkspaces(workspaceIds, includeDeleted, limit, offset, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PublicWorkspacesApi.listWorkspaces']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Update a workspace
         * @param {string} workspaceId 
         * @param {WorkspaceUpdateRequest} workspaceUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateWorkspace(workspaceId: string, workspaceUpdateRequest: WorkspaceUpdateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkspaceResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateWorkspace(workspaceId, workspaceUpdateRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PublicWorkspacesApi.updateWorkspace']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PublicWorkspacesApi - factory interface
 * @export
 */
export const PublicWorkspacesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PublicWorkspacesApiFp(configuration)
    return {
        /**
         * Create/update a set of OAuth credentials to override the Airbyte-provided OAuth credentials used for source/destination OAuth. In order to determine what the credential configuration needs to be, please see the connector specification of the relevant source/destination.
         * @summary Create OAuth override credentials for a workspace and source type.
         * @param {PublicWorkspacesApiCreateOrUpdateWorkspaceOAuthCredentialsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOrUpdateWorkspaceOAuthCredentials(requestParameters: PublicWorkspacesApiCreateOrUpdateWorkspaceOAuthCredentialsRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.createOrUpdateWorkspaceOAuthCredentials(requestParameters.workspaceId, requestParameters.workspaceOAuthCredentialsRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create a workspace
         * @param {PublicWorkspacesApiCreateWorkspaceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createWorkspace(requestParameters: PublicWorkspacesApiCreateWorkspaceRequest, options?: RawAxiosRequestConfig): AxiosPromise<WorkspaceResponse> {
            return localVarFp.createWorkspace(requestParameters.workspaceCreateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete a Workspace
         * @param {PublicWorkspacesApiDeleteWorkspaceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWorkspace(requestParameters: PublicWorkspacesApiDeleteWorkspaceRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteWorkspace(requestParameters.workspaceId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Workspace details
         * @param {PublicWorkspacesApiGetWorkspaceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorkspace(requestParameters: PublicWorkspacesApiGetWorkspaceRequest, options?: RawAxiosRequestConfig): AxiosPromise<WorkspaceResponse> {
            return localVarFp.getWorkspace(requestParameters.workspaceId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List workspaces
         * @param {PublicWorkspacesApiListWorkspacesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listWorkspaces(requestParameters: PublicWorkspacesApiListWorkspacesRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<WorkspacesResponse> {
            return localVarFp.listWorkspaces(requestParameters.workspaceIds, requestParameters.includeDeleted, requestParameters.limit, requestParameters.offset, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a workspace
         * @param {PublicWorkspacesApiUpdateWorkspaceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWorkspace(requestParameters: PublicWorkspacesApiUpdateWorkspaceRequest, options?: RawAxiosRequestConfig): AxiosPromise<WorkspaceResponse> {
            return localVarFp.updateWorkspace(requestParameters.workspaceId, requestParameters.workspaceUpdateRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createOrUpdateWorkspaceOAuthCredentials operation in PublicWorkspacesApi.
 * @export
 * @interface PublicWorkspacesApiCreateOrUpdateWorkspaceOAuthCredentialsRequest
 */
export interface PublicWorkspacesApiCreateOrUpdateWorkspaceOAuthCredentialsRequest {
    /**
     * 
     * @type {string}
     * @memberof PublicWorkspacesApiCreateOrUpdateWorkspaceOAuthCredentials
     */
    readonly workspaceId: string

    /**
     * 
     * @type {WorkspaceOAuthCredentialsRequest}
     * @memberof PublicWorkspacesApiCreateOrUpdateWorkspaceOAuthCredentials
     */
    readonly workspaceOAuthCredentialsRequest: WorkspaceOAuthCredentialsRequest
}

/**
 * Request parameters for createWorkspace operation in PublicWorkspacesApi.
 * @export
 * @interface PublicWorkspacesApiCreateWorkspaceRequest
 */
export interface PublicWorkspacesApiCreateWorkspaceRequest {
    /**
     * 
     * @type {WorkspaceCreateRequest}
     * @memberof PublicWorkspacesApiCreateWorkspace
     */
    readonly workspaceCreateRequest: WorkspaceCreateRequest
}

/**
 * Request parameters for deleteWorkspace operation in PublicWorkspacesApi.
 * @export
 * @interface PublicWorkspacesApiDeleteWorkspaceRequest
 */
export interface PublicWorkspacesApiDeleteWorkspaceRequest {
    /**
     * 
     * @type {string}
     * @memberof PublicWorkspacesApiDeleteWorkspace
     */
    readonly workspaceId: string
}

/**
 * Request parameters for getWorkspace operation in PublicWorkspacesApi.
 * @export
 * @interface PublicWorkspacesApiGetWorkspaceRequest
 */
export interface PublicWorkspacesApiGetWorkspaceRequest {
    /**
     * 
     * @type {string}
     * @memberof PublicWorkspacesApiGetWorkspace
     */
    readonly workspaceId: string
}

/**
 * Request parameters for listWorkspaces operation in PublicWorkspacesApi.
 * @export
 * @interface PublicWorkspacesApiListWorkspacesRequest
 */
export interface PublicWorkspacesApiListWorkspacesRequest {
    /**
     * The UUIDs of the workspaces you wish to fetch. Empty list will retrieve all allowed workspaces.
     * @type {Array<string>}
     * @memberof PublicWorkspacesApiListWorkspaces
     */
    readonly workspaceIds?: Array<string>

    /**
     * Include deleted workspaces in the returned results.
     * @type {boolean}
     * @memberof PublicWorkspacesApiListWorkspaces
     */
    readonly includeDeleted?: boolean

    /**
     * Set the limit on the number of workspaces returned. The default is 20.
     * @type {number}
     * @memberof PublicWorkspacesApiListWorkspaces
     */
    readonly limit?: number

    /**
     * Set the offset to start at when returning workspaces. The default is 0
     * @type {number}
     * @memberof PublicWorkspacesApiListWorkspaces
     */
    readonly offset?: number
}

/**
 * Request parameters for updateWorkspace operation in PublicWorkspacesApi.
 * @export
 * @interface PublicWorkspacesApiUpdateWorkspaceRequest
 */
export interface PublicWorkspacesApiUpdateWorkspaceRequest {
    /**
     * 
     * @type {string}
     * @memberof PublicWorkspacesApiUpdateWorkspace
     */
    readonly workspaceId: string

    /**
     * 
     * @type {WorkspaceUpdateRequest}
     * @memberof PublicWorkspacesApiUpdateWorkspace
     */
    readonly workspaceUpdateRequest: WorkspaceUpdateRequest
}

/**
 * PublicWorkspacesApi - object-oriented interface
 * @export
 * @class PublicWorkspacesApi
 * @extends {BaseAPI}
 */
export class PublicWorkspacesApi extends BaseAPI {
    /**
     * Create/update a set of OAuth credentials to override the Airbyte-provided OAuth credentials used for source/destination OAuth. In order to determine what the credential configuration needs to be, please see the connector specification of the relevant source/destination.
     * @summary Create OAuth override credentials for a workspace and source type.
     * @param {PublicWorkspacesApiCreateOrUpdateWorkspaceOAuthCredentialsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicWorkspacesApi
     */
    public createOrUpdateWorkspaceOAuthCredentials(requestParameters: PublicWorkspacesApiCreateOrUpdateWorkspaceOAuthCredentialsRequest, options?: RawAxiosRequestConfig) {
        return PublicWorkspacesApiFp(this.configuration).createOrUpdateWorkspaceOAuthCredentials(requestParameters.workspaceId, requestParameters.workspaceOAuthCredentialsRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create a workspace
     * @param {PublicWorkspacesApiCreateWorkspaceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicWorkspacesApi
     */
    public createWorkspace(requestParameters: PublicWorkspacesApiCreateWorkspaceRequest, options?: RawAxiosRequestConfig) {
        return PublicWorkspacesApiFp(this.configuration).createWorkspace(requestParameters.workspaceCreateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete a Workspace
     * @param {PublicWorkspacesApiDeleteWorkspaceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicWorkspacesApi
     */
    public deleteWorkspace(requestParameters: PublicWorkspacesApiDeleteWorkspaceRequest, options?: RawAxiosRequestConfig) {
        return PublicWorkspacesApiFp(this.configuration).deleteWorkspace(requestParameters.workspaceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Workspace details
     * @param {PublicWorkspacesApiGetWorkspaceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicWorkspacesApi
     */
    public getWorkspace(requestParameters: PublicWorkspacesApiGetWorkspaceRequest, options?: RawAxiosRequestConfig) {
        return PublicWorkspacesApiFp(this.configuration).getWorkspace(requestParameters.workspaceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List workspaces
     * @param {PublicWorkspacesApiListWorkspacesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicWorkspacesApi
     */
    public listWorkspaces(requestParameters: PublicWorkspacesApiListWorkspacesRequest = {}, options?: RawAxiosRequestConfig) {
        return PublicWorkspacesApiFp(this.configuration).listWorkspaces(requestParameters.workspaceIds, requestParameters.includeDeleted, requestParameters.limit, requestParameters.offset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update a workspace
     * @param {PublicWorkspacesApiUpdateWorkspaceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicWorkspacesApi
     */
    public updateWorkspace(requestParameters: PublicWorkspacesApiUpdateWorkspaceRequest, options?: RawAxiosRequestConfig) {
        return PublicWorkspacesApiFp(this.configuration).updateWorkspace(requestParameters.workspaceId, requestParameters.workspaceUpdateRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
