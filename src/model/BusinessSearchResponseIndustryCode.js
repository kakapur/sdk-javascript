/**
 * Trulioo JavaScript SDK
 *
 * Package version: 1.0.2
 * Trulioo OpenAPI version: v1
 * Generated by OpenAPI Generator version: 5.0.1
 */
import ApiClient from '../ApiClient';

/**
 * The BusinessSearchResponseIndustryCode model module.
 * @module model/BusinessSearchResponseIndustryCode
 * @version v1
 */
class BusinessSearchResponseIndustryCode {
    /**
     * Constructs a new <code>BusinessSearchResponseIndustryCode</code>.
     * @alias module:model/BusinessSearchResponseIndustryCode
     */
    constructor() { 
        
        BusinessSearchResponseIndustryCode.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BusinessSearchResponseIndustryCode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BusinessSearchResponseIndustryCode} obj Optional instance to populate.
     * @return {module:model/BusinessSearchResponseIndustryCode} The populated <code>BusinessSearchResponseIndustryCode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BusinessSearchResponseIndustryCode();

            if (data.hasOwnProperty('Code')) {
                obj['Code'] = ApiClient.convertToType(data['Code'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Code
 */
BusinessSearchResponseIndustryCode.prototype['Code'] = undefined;

/**
 * @member {String} Description
 */
BusinessSearchResponseIndustryCode.prototype['Description'] = undefined;






export default BusinessSearchResponseIndustryCode;

