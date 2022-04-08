export const AccountTypeDocument = /* GraphQL */`
query AccountType($address: String!) {
  actionsAccountInfo: actions_account_info(address: $address) {
    parsed
    programOwner: program_owner
  }
}
`;

export const NativeAccountDetailsDocument = /* GraphQL */`
query NativeAccountDetails($address: String!) {
  accountBalance: account_balance (where: {address: {_eq: $address}}) {
    balance
  }
}
`;

export const TokenAccountDetailsDocument = /* GraphQL */`
query TokenDetails($address: String!) {
  tokenUnit: token_unit(where: {mint: {_eq: $address}}) {
    mint
    unitName: unit_name
    logo: logo_uri
    tokenPrice: token_price {
      marketCap: market_cap
      price
    }
  }
  token(where: {mint: {_eq: $address}}) {
    mint
    freezeAuthority: freeze_authority
    decimals
    mintAuthority: mint_authority
  }
  tokenSupply: token_supply(where: {mint: {_eq: $address}}) {
    supply
  }
  tokenAccountAggregate: token_account_aggregate (where: {mint: {_eq: $address}}) {
    aggregate {
      count
    }
  }
}
`;

export const TokenAccountDetailsHoldersDocument = /* GraphQL */`
query TokenDetailsHolders($address: String!) {
  tokenAccountBalance: token_account_balance(where: {token_account: {mint: {_eq: $address}}}, limit: 5, order_by: {balance: desc}) {
    balance
    address
  }
}
`;
