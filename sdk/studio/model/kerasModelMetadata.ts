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
import { KerasModelLayer } from './kerasModelLayer';
import { KerasModelMetadataAllOf } from './kerasModelMetadataAllOf';
import { KerasModelMetadataMetrics } from './kerasModelMetadataMetrics';
import { KerasModelTypeEnum } from './kerasModelTypeEnum';

export class KerasModelMetadata {
    /**
    * Whether the operation succeeded
    */
    'success': boolean;
    /**
    * Optional error description (set if \'success\' was false)
    */
    'error'?: string;
    /**
    * Date when the model was trained
    */
    'created': Date;
    /**
    * Layers of the neural network
    */
    'layers': Array<KerasModelLayer>;
    /**
    * Labels for the output layer
    */
    'classNames': Array<string>;
    /**
    * The types of model that are available
    */
    'availableModelTypes': Array<KerasModelTypeEnum>;
    'recommendedModelType': KerasModelTypeEnum;
    /**
    * Metrics for each of the available model types
    */
    'modelValidationMetrics': Array<KerasModelMetadataMetrics>;

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
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "layers",
            "baseName": "layers",
            "type": "Array<KerasModelLayer>"
        },
        {
            "name": "classNames",
            "baseName": "class_names",
            "type": "Array<string>"
        },
        {
            "name": "availableModelTypes",
            "baseName": "available_model_types",
            "type": "Array<KerasModelTypeEnum>"
        },
        {
            "name": "recommendedModelType",
            "baseName": "recommended_model_type",
            "type": "KerasModelTypeEnum"
        },
        {
            "name": "modelValidationMetrics",
            "baseName": "model_validation_metrics",
            "type": "Array<KerasModelMetadataMetrics>"
        }    ];

    static getAttributeTypeMap() {
        return KerasModelMetadata.attributeTypeMap;
    }
}

