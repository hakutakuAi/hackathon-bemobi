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
 * A Hadoop catalog doesn’t need to connect to a Hive MetaStore, but can only be used with HDFS or similar file systems that support atomic rename.
 * @export
 * @interface HadoopCatalogUseHierarchicalFileSystemsAsSameAsStorageConfig
 */
export interface HadoopCatalogUseHierarchicalFileSystemsAsSameAsStorageConfig {
    /**
     * 
     * @type {string}
     * @memberof HadoopCatalogUseHierarchicalFileSystemsAsSameAsStorageConfig
     */
    'catalog_type': HadoopCatalogUseHierarchicalFileSystemsAsSameAsStorageConfigCatalogTypeEnum;
    /**
     * The default database tables are written to if the source does not specify a namespace. The usual value for this field is \"default\".
     * @type {string}
     * @memberof HadoopCatalogUseHierarchicalFileSystemsAsSameAsStorageConfig
     */
    'database'?: string;
}

export const HadoopCatalogUseHierarchicalFileSystemsAsSameAsStorageConfigCatalogTypeEnum = {
    HADOOP: 'Hadoop'
} as const;

export type HadoopCatalogUseHierarchicalFileSystemsAsSameAsStorageConfigCatalogTypeEnum = typeof HadoopCatalogUseHierarchicalFileSystemsAsSameAsStorageConfigCatalogTypeEnum[keyof typeof HadoopCatalogUseHierarchicalFileSystemsAsSameAsStorageConfigCatalogTypeEnum];

