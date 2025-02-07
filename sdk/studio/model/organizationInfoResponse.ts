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

import { GenericApiResponse } from './genericApiResponse';
import { Organization } from './organization';
import { OrganizationInfoResponseAllOf } from './organizationInfoResponseAllOf';
import { OrganizationInfoResponseAllOfDatasets } from './organizationInfoResponseAllOfDatasets';
import { OrganizationInfoResponseAllOfDefaultComputeLimits } from './organizationInfoResponseAllOfDefaultComputeLimits';
import { ProjectInfoResponseAllOfExperiments } from './projectInfoResponseAllOfExperiments';
import { ProjectInfoResponseAllOfReadme } from './projectInfoResponseAllOfReadme';

export class OrganizationInfoResponse {
    /**
    * Whether the operation succeeded
    */
    'success': boolean;
    /**
    * Optional error description (set if \'success\' was false)
    */
    'error'?: string;
    'organization': Organization;
    'datasets': Array<OrganizationInfoResponseAllOfDatasets>;
    'defaultComputeLimits': OrganizationInfoResponseAllOfDefaultComputeLimits;
    /**
    * Experiments that the organization has access to. Enabling experiments can only be done through a JWT token.
    */
    'experiments': Array<ProjectInfoResponseAllOfExperiments>;
    'readme'?: ProjectInfoResponseAllOfReadme;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        },
        {
            "name": "organization",
            "baseName": "organization",
            "type": "Organization"
        },
        {
            "name": "datasets",
            "baseName": "datasets",
            "type": "Array<OrganizationInfoResponseAllOfDatasets>"
        },
        {
            "name": "defaultComputeLimits",
            "baseName": "defaultComputeLimits",
            "type": "OrganizationInfoResponseAllOfDefaultComputeLimits"
        },
        {
            "name": "experiments",
            "baseName": "experiments",
            "type": "Array<ProjectInfoResponseAllOfExperiments>"
        },
        {
            "name": "readme",
            "baseName": "readme",
            "type": "ProjectInfoResponseAllOfReadme"
        }    ];

    static getAttributeTypeMap() {
        return OrganizationInfoResponse.attributeTypeMap;
    }
}

