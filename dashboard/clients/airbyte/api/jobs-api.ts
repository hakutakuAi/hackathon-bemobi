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
import type { JobCreateRequest } from '../model';
// @ts-ignore
import type { JobResponse } from '../model';
// @ts-ignore
import type { JobStatusEnum } from '../model';
// @ts-ignore
import type { JobTypeEnum } from '../model';
// @ts-ignore
import type { JobsResponse } from '../model';
/**
 * JobsApi - axios parameter creator
 * @export
 */
export const JobsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Cancel a running Job
         * @param {number} jobId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancelJob: async (jobId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'jobId' is not null or undefined
            assertParamExists('cancelJob', 'jobId', jobId)
            const localVarPath = `/jobs/{jobId}`
                .replace(`{${"jobId"}}`, encodeURIComponent(String(jobId)));
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
         * @summary Trigger a sync or reset job of a connection
         * @param {JobCreateRequest} jobCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createJob: async (jobCreateRequest: JobCreateRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'jobCreateRequest' is not null or undefined
            assertParamExists('createJob', 'jobCreateRequest', jobCreateRequest)
            const localVarPath = `/jobs`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(jobCreateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Job status and details
         * @param {number} jobId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJob: async (jobId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'jobId' is not null or undefined
            assertParamExists('getJob', 'jobId', jobId)
            const localVarPath = `/jobs/{jobId}`
                .replace(`{${"jobId"}}`, encodeURIComponent(String(jobId)));
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
         * 
         * @summary List Jobs by sync type
         * @param {string} [connectionId] Filter the Jobs by connectionId.
         * @param {number} [limit] Set the limit on the number of Jobs returned. The default is 20 Jobs.
         * @param {number} [offset] Set the offset to start at when returning Jobs. The default is 0.
         * @param {JobTypeEnum} [jobType] Filter the Jobs by jobType.
         * @param {Array<string>} [workspaceIds] The UUIDs of the workspaces you wish to list jobs for. Empty list will retrieve all allowed workspaces.
         * @param {JobStatusEnum} [status] The Job status you want to filter by
         * @param {string} [createdAtStart] The start date to filter by
         * @param {string} [createdAtEnd] The end date to filter by
         * @param {string} [updatedAtStart] The start date to filter by
         * @param {string} [updatedAtEnd] The end date to filter by
         * @param {string} [orderBy] The field and method to use for ordering
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listJobs: async (connectionId?: string, limit?: number, offset?: number, jobType?: JobTypeEnum, workspaceIds?: Array<string>, status?: JobStatusEnum, createdAtStart?: string, createdAtEnd?: string, updatedAtStart?: string, updatedAtEnd?: string, orderBy?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/jobs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (connectionId !== undefined) {
                localVarQueryParameter['connectionId'] = connectionId;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (jobType !== undefined) {
                localVarQueryParameter['jobType'] = jobType;
            }

            if (workspaceIds) {
                localVarQueryParameter['workspaceIds'] = workspaceIds;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            if (createdAtStart !== undefined) {
                localVarQueryParameter['createdAtStart'] = (createdAtStart as any instanceof Date) ?
                    (createdAtStart as any).toISOString() :
                    createdAtStart;
            }

            if (createdAtEnd !== undefined) {
                localVarQueryParameter['createdAtEnd'] = (createdAtEnd as any instanceof Date) ?
                    (createdAtEnd as any).toISOString() :
                    createdAtEnd;
            }

            if (updatedAtStart !== undefined) {
                localVarQueryParameter['updatedAtStart'] = (updatedAtStart as any instanceof Date) ?
                    (updatedAtStart as any).toISOString() :
                    updatedAtStart;
            }

            if (updatedAtEnd !== undefined) {
                localVarQueryParameter['updatedAtEnd'] = (updatedAtEnd as any instanceof Date) ?
                    (updatedAtEnd as any).toISOString() :
                    updatedAtEnd;
            }

            if (orderBy !== undefined) {
                localVarQueryParameter['orderBy'] = orderBy;
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
 * JobsApi - functional programming interface
 * @export
 */
export const JobsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = JobsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Cancel a running Job
         * @param {number} jobId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cancelJob(jobId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cancelJob(jobId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['JobsApi.cancelJob']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Trigger a sync or reset job of a connection
         * @param {JobCreateRequest} jobCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createJob(jobCreateRequest: JobCreateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createJob(jobCreateRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['JobsApi.createJob']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get Job status and details
         * @param {number} jobId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getJob(jobId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getJob(jobId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['JobsApi.getJob']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary List Jobs by sync type
         * @param {string} [connectionId] Filter the Jobs by connectionId.
         * @param {number} [limit] Set the limit on the number of Jobs returned. The default is 20 Jobs.
         * @param {number} [offset] Set the offset to start at when returning Jobs. The default is 0.
         * @param {JobTypeEnum} [jobType] Filter the Jobs by jobType.
         * @param {Array<string>} [workspaceIds] The UUIDs of the workspaces you wish to list jobs for. Empty list will retrieve all allowed workspaces.
         * @param {JobStatusEnum} [status] The Job status you want to filter by
         * @param {string} [createdAtStart] The start date to filter by
         * @param {string} [createdAtEnd] The end date to filter by
         * @param {string} [updatedAtStart] The start date to filter by
         * @param {string} [updatedAtEnd] The end date to filter by
         * @param {string} [orderBy] The field and method to use for ordering
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listJobs(connectionId?: string, limit?: number, offset?: number, jobType?: JobTypeEnum, workspaceIds?: Array<string>, status?: JobStatusEnum, createdAtStart?: string, createdAtEnd?: string, updatedAtStart?: string, updatedAtEnd?: string, orderBy?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listJobs(connectionId, limit, offset, jobType, workspaceIds, status, createdAtStart, createdAtEnd, updatedAtStart, updatedAtEnd, orderBy, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['JobsApi.listJobs']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * JobsApi - factory interface
 * @export
 */
export const JobsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = JobsApiFp(configuration)
    return {
        /**
         * 
         * @summary Cancel a running Job
         * @param {JobsApiCancelJob1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancelJob(requestParameters: JobsApiCancelJob1Request, options?: RawAxiosRequestConfig): AxiosPromise<JobResponse> {
            return localVarFp.cancelJob(requestParameters.jobId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Trigger a sync or reset job of a connection
         * @param {JobsApiCreateJob1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createJob(requestParameters: JobsApiCreateJob1Request, options?: RawAxiosRequestConfig): AxiosPromise<JobResponse> {
            return localVarFp.createJob(requestParameters.jobCreateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Job status and details
         * @param {JobsApiGetJob1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJob(requestParameters: JobsApiGetJob1Request, options?: RawAxiosRequestConfig): AxiosPromise<JobResponse> {
            return localVarFp.getJob(requestParameters.jobId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List Jobs by sync type
         * @param {JobsApiListJobs1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listJobs(requestParameters: JobsApiListJobs1Request = {}, options?: RawAxiosRequestConfig): AxiosPromise<JobsResponse> {
            return localVarFp.listJobs(requestParameters.connectionId, requestParameters.limit, requestParameters.offset, requestParameters.jobType, requestParameters.workspaceIds, requestParameters.status, requestParameters.createdAtStart, requestParameters.createdAtEnd, requestParameters.updatedAtStart, requestParameters.updatedAtEnd, requestParameters.orderBy, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for cancelJob operation in JobsApi.
 * @export
 * @interface JobsApiCancelJob1Request
 */
export interface JobsApiCancelJob1Request {
    /**
     * 
     * @type {number}
     * @memberof JobsApiCancelJob1
     */
    readonly jobId: number
}

/**
 * Request parameters for createJob operation in JobsApi.
 * @export
 * @interface JobsApiCreateJob1Request
 */
export interface JobsApiCreateJob1Request {
    /**
     * 
     * @type {JobCreateRequest}
     * @memberof JobsApiCreateJob1
     */
    readonly jobCreateRequest: JobCreateRequest
}

/**
 * Request parameters for getJob operation in JobsApi.
 * @export
 * @interface JobsApiGetJob1Request
 */
export interface JobsApiGetJob1Request {
    /**
     * 
     * @type {number}
     * @memberof JobsApiGetJob1
     */
    readonly jobId: number
}

/**
 * Request parameters for listJobs operation in JobsApi.
 * @export
 * @interface JobsApiListJobs1Request
 */
export interface JobsApiListJobs1Request {
    /**
     * Filter the Jobs by connectionId.
     * @type {string}
     * @memberof JobsApiListJobs1
     */
    readonly connectionId?: string

    /**
     * Set the limit on the number of Jobs returned. The default is 20 Jobs.
     * @type {number}
     * @memberof JobsApiListJobs1
     */
    readonly limit?: number

    /**
     * Set the offset to start at when returning Jobs. The default is 0.
     * @type {number}
     * @memberof JobsApiListJobs1
     */
    readonly offset?: number

    /**
     * Filter the Jobs by jobType.
     * @type {JobTypeEnum}
     * @memberof JobsApiListJobs1
     */
    readonly jobType?: JobTypeEnum

    /**
     * The UUIDs of the workspaces you wish to list jobs for. Empty list will retrieve all allowed workspaces.
     * @type {Array<string>}
     * @memberof JobsApiListJobs1
     */
    readonly workspaceIds?: Array<string>

    /**
     * The Job status you want to filter by
     * @type {JobStatusEnum}
     * @memberof JobsApiListJobs1
     */
    readonly status?: JobStatusEnum

    /**
     * The start date to filter by
     * @type {string}
     * @memberof JobsApiListJobs1
     */
    readonly createdAtStart?: string

    /**
     * The end date to filter by
     * @type {string}
     * @memberof JobsApiListJobs1
     */
    readonly createdAtEnd?: string

    /**
     * The start date to filter by
     * @type {string}
     * @memberof JobsApiListJobs1
     */
    readonly updatedAtStart?: string

    /**
     * The end date to filter by
     * @type {string}
     * @memberof JobsApiListJobs1
     */
    readonly updatedAtEnd?: string

    /**
     * The field and method to use for ordering
     * @type {string}
     * @memberof JobsApiListJobs1
     */
    readonly orderBy?: string
}

/**
 * JobsApi - object-oriented interface
 * @export
 * @class JobsApi
 * @extends {BaseAPI}
 */
export class JobsApi extends BaseAPI {
    /**
     * 
     * @summary Cancel a running Job
     * @param {JobsApiCancelJob1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    public cancelJob(requestParameters: JobsApiCancelJob1Request, options?: RawAxiosRequestConfig) {
        return JobsApiFp(this.configuration).cancelJob(requestParameters.jobId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Trigger a sync or reset job of a connection
     * @param {JobsApiCreateJob1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    public createJob(requestParameters: JobsApiCreateJob1Request, options?: RawAxiosRequestConfig) {
        return JobsApiFp(this.configuration).createJob(requestParameters.jobCreateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Job status and details
     * @param {JobsApiGetJob1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    public getJob(requestParameters: JobsApiGetJob1Request, options?: RawAxiosRequestConfig) {
        return JobsApiFp(this.configuration).getJob(requestParameters.jobId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List Jobs by sync type
     * @param {JobsApiListJobs1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    public listJobs(requestParameters: JobsApiListJobs1Request = {}, options?: RawAxiosRequestConfig) {
        return JobsApiFp(this.configuration).listJobs(requestParameters.connectionId, requestParameters.limit, requestParameters.offset, requestParameters.jobType, requestParameters.workspaceIds, requestParameters.status, requestParameters.createdAtStart, requestParameters.createdAtEnd, requestParameters.updatedAtStart, requestParameters.updatedAtEnd, requestParameters.orderBy, options).then((request) => request(this.axios, this.basePath));
    }
}

