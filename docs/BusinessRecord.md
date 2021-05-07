# Trulioo.BusinessRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionRecordID** | **String** | The TransactionRecordID, this is the ID you will use to fetch the transaction again. | [optional] 
**recordStatus** | **String** | &#39;match&#39; or &#39;nomatch&#39; if the verification passed the rules configured on your account this will be &#39;match&#39;. | [optional] 
**datasourceResults** | [**[BusinessResult]**](BusinessResult.md) | Results for each datasource that was queried | [optional] 
**errors** | [**[ServiceError]**](ServiceError.md) |  | [optional] 

