/**
 * Trulioo_identity_verification
 * To run tests transactions on our trial endpoint in postman: [![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/run-collection/a58f438d101278e2bc62) 
 *
 * The version of the OpenAPI document: 1.4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DataField from './DataField';

/**
 * The TransactionRecordResultAllOf model module.
 * @module model/TransactionRecordResultAllOf
 * @version 1.4.0
 */
class TransactionRecordResultAllOf {
    /**
     * Constructs a new <code>TransactionRecordResultAllOf</code>.
     * @alias module:model/TransactionRecordResultAllOf
     */
    constructor() { 
        
        TransactionRecordResultAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionRecordResultAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionRecordResultAllOf} obj Optional instance to populate.
     * @return {module:model/TransactionRecordResultAllOf} The populated <code>TransactionRecordResultAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionRecordResultAllOf();

            if (data.hasOwnProperty('InputFields')) {
                obj['InputFields'] = ApiClient.convertToType(data['InputFields'], [DataField]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/DataField>} InputFields
 */
TransactionRecordResultAllOf.prototype['InputFields'] = undefined;






export default TransactionRecordResultAllOf;

