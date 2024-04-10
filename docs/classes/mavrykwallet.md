[@mavrykdynamics/mavryk-wallet-dapp](../README.md) › [MavrykWallet](mavrykwallet.md)

# Class: MavrykWallet

## Hierarchy

* **MavrykWallet**

## Implements

* WalletProvider

## Index

### Constructors

* [constructor](mavrykwallet.md#constructor)

### Properties

* [appName](mavrykwallet.md#private-appname)
* [permission](mavrykwallet.md#permission)
* [getCurrentPermission](mavrykwallet.md#static-getcurrentpermission)
* [isAvailable](mavrykwallet.md#static-isavailable)
* [onAvailabilityChange](mavrykwallet.md#static-onavailabilitychange)
* [onPermissionChange](mavrykwallet.md#static-onpermissionchange)

### Accessors

* [connected](mavrykwallet.md#connected)

### Methods

* [broadcast](mavrykwallet.md#broadcast)
* [connect](mavrykwallet.md#connect)
* [formatParameters](mavrykwallet.md#private-formatparameters)
* [getPK](mavrykwallet.md#getpk)
* [getPKH](mavrykwallet.md#getpkh)
* [mapDelegateParamsToWalletParams](mavrykwallet.md#mapdelegateparamstowalletparams)
* [mapIncreasePaidStorageWalletParams](mavrykwallet.md#mapincreasepaidstoragewalletparams)
* [mapOriginateParamsToWalletParams](mavrykwallet.md#maporiginateparamstowalletparams)
* [mapTransferParamsToWalletParams](mavrykwallet.md#maptransferparamstowalletparams)
* [reconnect](mavrykwallet.md#reconnect)
* [removeDefaultParams](mavrykwallet.md#private-removedefaultparams)
* [sendOperations](mavrykwallet.md#sendoperations)
* [sign](mavrykwallet.md#sign)
* [toTezos](mavrykwallet.md#totezos)

## Constructors

###  constructor

\+ **new MavrykWallet**(`appName`: string, `existingPermission?`: [MavrykWalletDAppPermission](../README.md#mavrykwalletdapppermission)): *[MavrykWallet](mavrykwallet.md)*

*Defined in [taquito-wallet.ts:34](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/7884173/src/taquito-wallet.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`appName` | string |
`existingPermission?` | [MavrykWalletDAppPermission](../README.md#mavrykwalletdapppermission) |

**Returns:** *[MavrykWallet](mavrykwallet.md)*

## Properties

### `Private` appName

• **appName**: *string*

*Defined in [taquito-wallet.ts:37](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/7884173/src/taquito-wallet.ts#L37)*

___

###  permission

• **permission**: *[MavrykWalletDAppPermission](../README.md#mavrykwalletdapppermission)* = null

*Defined in [taquito-wallet.ts:34](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/7884173/src/taquito-wallet.ts#L34)*

___

### `Static` getCurrentPermission

▪ **getCurrentPermission**: *[getCurrentPermission](../README.md#getcurrentpermission)* = getCurrentPermission

*Defined in [taquito-wallet.ts:31](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/7884173/src/taquito-wallet.ts#L31)*

___

### `Static` isAvailable

▪ **isAvailable**: *[isAvailable](../README.md#isavailable)* = isAvailable

*Defined in [taquito-wallet.ts:29](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/7884173/src/taquito-wallet.ts#L29)*

___

### `Static` onAvailabilityChange

▪ **onAvailabilityChange**: *[onAvailabilityChange](../README.md#onavailabilitychange)* = onAvailabilityChange

*Defined in [taquito-wallet.ts:30](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/7884173/src/taquito-wallet.ts#L30)*

___

### `Static` onPermissionChange

▪ **onPermissionChange**: *[onPermissionChange](../README.md#onpermissionchange)* = onPermissionChange

*Defined in [taquito-wallet.ts:32](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/7884173/src/taquito-wallet.ts#L32)*

## Accessors

###  connected

• **get connected**(): *boolean*

*Defined in [taquito-wallet.ts:45](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/7884173/src/taquito-wallet.ts#L45)*

**Returns:** *boolean*

## Methods

###  broadcast

▸ **broadcast**(`signedOpBytes`: string): *Promise‹string›*

*Defined in [taquito-wallet.ts:131](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/7884173/src/taquito-wallet.ts#L131)*

**Parameters:**

Name | Type |
------ | ------ |
`signedOpBytes` | string |

**Returns:** *Promise‹string›*

___

###  connect

▸ **connect**(`network`: [MavrykWalletDAppNetwork](../README.md#mavrykwalletdappnetwork), `opts`: object): *Promise‹void›*

*Defined in [taquito-wallet.ts:56](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/7884173/src/taquito-wallet.ts#L56)*

**Parameters:**

▪ **network**: *[MavrykWalletDAppNetwork](../README.md#mavrykwalletdappnetwork)*

▪`Default value`  **opts**: *object*= { forcePermission: false }

Name | Type | Default |
------ | ------ | ------ |
`forcePermission` | boolean | false |

**Returns:** *Promise‹void›*

___

### `Private` formatParameters

▸ **formatParameters**(`params`: any): *any*

*Defined in [taquito-wallet.ts:136](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/7884173/src/taquito-wallet.ts#L136)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | any |

**Returns:** *any*

___

###  getPK

▸ **getPK**(): *Promise‹string›*

*Defined in [taquito-wallet.ts:74](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/7884173/src/taquito-wallet.ts#L74)*

**Returns:** *Promise‹string›*

___

###  getPKH

▸ **getPKH**(): *Promise‹string›*

*Defined in [taquito-wallet.ts:69](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/7884173/src/taquito-wallet.ts#L69)*

**Returns:** *Promise‹string›*

___

###  mapDelegateParamsToWalletParams

▸ **mapDelegateParamsToWalletParams**(`params`: function): *Promise‹any›*

*Defined in [taquito-wallet.ts:99](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/7884173/src/taquito-wallet.ts#L99)*

**Parameters:**

▪ **params**: *function*

▸ (): *Promise‹WalletDelegateParams›*

**Returns:** *Promise‹any›*

___

###  mapIncreasePaidStorageWalletParams

▸ **mapIncreasePaidStorageWalletParams**(`params`: function): *Promise‹any›*

*Defined in [taquito-wallet.ts:109](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/7884173/src/taquito-wallet.ts#L109)*

**Parameters:**

▪ **params**: *function*

▸ (): *Promise‹WalletIncreasePaidStorageParams›*

**Returns:** *Promise‹any›*

___

###  mapOriginateParamsToWalletParams

▸ **mapOriginateParamsToWalletParams**(`params`: function): *Promise‹any›*

*Defined in [taquito-wallet.ts:89](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/7884173/src/taquito-wallet.ts#L89)*

**Parameters:**

▪ **params**: *function*

▸ (): *Promise‹WalletOriginateParams›*

**Returns:** *Promise‹any›*

___

###  mapTransferParamsToWalletParams

▸ **mapTransferParamsToWalletParams**(`params`: function): *Promise‹any›*

*Defined in [taquito-wallet.ts:79](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/7884173/src/taquito-wallet.ts#L79)*

**Parameters:**

▪ **params**: *function*

▸ (): *Promise‹WalletTransferParams›*

**Returns:** *Promise‹any›*

___

###  reconnect

▸ **reconnect**(`network`: [MavrykWalletDAppNetwork](../README.md#mavrykwalletdappnetwork)): *Promise‹void›*

*Defined in [taquito-wallet.ts:65](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/7884173/src/taquito-wallet.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`network` | [MavrykWalletDAppNetwork](../README.md#mavrykwalletdappnetwork) |

**Returns:** *Promise‹void›*

___

### `Private` removeDefaultParams

▸ **removeDefaultParams**(`params`: WalletTransferParams | WalletOriginateParams | WalletDelegateParams, `operatedParams`: any): *any*

*Defined in [taquito-wallet.ts:149](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/7884173/src/taquito-wallet.ts#L149)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | WalletTransferParams &#124; WalletOriginateParams &#124; WalletDelegateParams |
`operatedParams` | any |

**Returns:** *any*

___

###  sendOperations

▸ **sendOperations**(`opParams`: any[]): *Promise‹string›*

*Defined in [taquito-wallet.ts:121](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/7884173/src/taquito-wallet.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`opParams` | any[] |

**Returns:** *Promise‹string›*

___

###  sign

▸ **sign**(`payload`: string): *Promise‹string›*

*Defined in [taquito-wallet.ts:126](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/7884173/src/taquito-wallet.ts#L126)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | string |

**Returns:** *Promise‹string›*

___

###  toTezos

▸ **toTezos**(): *TezosToolkit‹›*

*Defined in [taquito-wallet.ts:49](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/7884173/src/taquito-wallet.ts#L49)*

**Returns:** *TezosToolkit‹›*
