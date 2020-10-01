/**
 * Edge Impulse API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ProjectDataSummary } from './projectDataSummary';

export class ProjectInfoResponseAllOfDataSummaryPerCategory {
    'training': ProjectDataSummary;
    'testing': ProjectDataSummary;
    'anomaly': ProjectDataSummary;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "training",
            "baseName": "training",
            "type": "ProjectDataSummary"
        },
        {
            "name": "testing",
            "baseName": "testing",
            "type": "ProjectDataSummary"
        },
        {
            "name": "anomaly",
            "baseName": "anomaly",
            "type": "ProjectDataSummary"
        }    ];

    static getAttributeTypeMap() {
        return ProjectInfoResponseAllOfDataSummaryPerCategory.attributeTypeMap;
    }
}

