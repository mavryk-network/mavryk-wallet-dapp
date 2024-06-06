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
* [getPKH](mavrykwallet.md#getpkh)
* [mapDelegateParamsToWalletParams](mavrykwallet.md#mapdelegateparamstowalletparams)
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

*Defined in [taquito-wallet.ts:32](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/taquito-wallet.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`appName` | string |
`existingPermission?` | [MavrykWalletDAppPermission](../README.md#mavrykwalletdapppermission) |

**Returns:** *[MavrykWallet](mavrykwallet.md)*

## Properties

### `Private` appName

• **appName**: *string*

*Defined in [taquito-wallet.ts:35](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/taquito-wallet.ts#L35)*

___

###  permission

• **permission**: *[MavrykWalletDAppPermission](../README.md#mavrykwalletdapppermission)* = null

*Defined in [taquito-wallet.ts:32](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/taquito-wallet.ts#L32)*

___

### `Static` getCurrentPermission

▪ **getCurrentPermission**: *[getCurrentPermission](../README.md#getcurrentpermission)* = getCurrentPermission

*Defined in [taquito-wallet.ts:29](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/taquito-wallet.ts#L29)*

___

### `Static` isAvailable

▪ **isAvailable**: *[isAvailable](../README.md#isavailable)* = isAvailable

*Defined in [taquito-wallet.ts:27](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/taquito-wallet.ts#L27)*

___

### `Static` onAvailabilityChange

▪ **onAvailabilityChange**: *[onAvailabilityChange](../README.md#onavailabilitychange)* = onAvailabilityChange

*Defined in [taquito-wallet.ts:28](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/taquito-wallet.ts#L28)*

___

### `Static` onPermissionChange

▪ **onPermissionChange**: *[onPermissionChange](../README.md#onpermissionchange)* = onPermissionChange

*Defined in [taquito-wallet.ts:30](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/taquito-wallet.ts#L30)*

## Accessors

###  connected

• **get connected**(): *boolean*

*Defined in [taquito-wallet.ts:43](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/taquito-wallet.ts#L43)*

**Returns:** *boolean*

## Methods

###  broadcast

▸ **broadcast**(`signedOpBytes`: string): *Promise‹string›*

*Defined in [taquito-wallet.ts:112](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/taquito-wallet.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`signedOpBytes` | string |

**Returns:** *Promise‹string›*

___

###  connect

▸ **connect**(`network`: [MavrykWalletDAppNetwork](../README.md#mavrykwalletdappnetwork), `opts`: object): *Promise‹void›*

*Defined in [taquito-wallet.ts:54](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/taquito-wallet.ts#L54)*

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

*Defined in [taquito-wallet.ts:117](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/taquito-wallet.ts#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | any |

**Returns:** *any*

___

###  getPKH

▸ **getPKH**(): *Promise‹string›*

*Defined in [taquito-wallet.ts:67](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/taquito-wallet.ts#L67)*

**Returns:** *Promise‹string›*

___

###  mapDelegateParamsToWalletParams

▸ **mapDelegateParamsToWalletParams**(`params`: function): *Promise‹any›*

*Defined in [taquito-wallet.ts:92](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/taquito-wallet.ts#L92)*

**Parameters:**

▪ **params**: *function*

▸ (): *Promise‹WalletDelegateParams›*

**Returns:** *Promise‹any›*

___

###  mapOriginateParamsToWalletParams

▸ **mapOriginateParamsToWalletParams**(`params`: function): *Promise‹any›*

*Defined in [taquito-wallet.ts:82](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/taquito-wallet.ts#L82)*

**Parameters:**

▪ **params**: *function*

▸ (): *Promise‹WalletOriginateParams›*

**Returns:** *Promise‹any›*

___

###  mapTransferParamsToWalletParams

▸ **mapTransferParamsToWalletParams**(`params`: function): *Promise‹any›*

*Defined in [taquito-wallet.ts:72](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/taquito-wallet.ts#L72)*

**Parameters:**

▪ **params**: *function*

▸ (): *Promise‹WalletTransferParams›*

**Returns:** *Promise‹any›*

___

###  reconnect

▸ **reconnect**(`network`: [MavrykWalletDAppNetwork](../README.md#mavrykwalletdappnetwork)): *Promise‹void›*

*Defined in [taquito-wallet.ts:63](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/taquito-wallet.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`network` | [MavrykWalletDAppNetwork](../README.md#mavrykwalletdappnetwork) |

**Returns:** *Promise‹void›*

___

### `Private` removeDefaultParams

▸ **removeDefaultParams**(`params`: WalletTransferParams | WalletOriginateParams | WalletDelegateParams, `operatedParams`: any): *any*

*Defined in [taquito-wallet.ts:130](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/taquito-wallet.ts#L130)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | WalletTransferParams &#124; WalletOriginateParams &#124; WalletDelegateParams |
`operatedParams` | any |

**Returns:** *any*

___

###  sendOperations

▸ **sendOperations**(`opParams`: any[]): *Promise‹string›*

*Defined in [taquito-wallet.ts:102](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/taquito-wallet.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`opParams` | any[] |

**Returns:** *Promise‹string›*

___

###  sign

▸ **sign**(`payload`: string): *Promise‹string›*

*Defined in [taquito-wallet.ts:107](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/taquito-wallet.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | string |

**Returns:** *Promise‹string›*

___

###  toTezos

▸ **toTezos**(): *TezosToolkit‹›*

*Defined in [taquito-wallet.ts:47](https://github.com/mavryk-network/mavryk-wallet-dapp/blob/0871fa5/src/taquito-wallet.ts#L47)*

**Returns:** *TezosToolkit‹›*
