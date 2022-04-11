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
  accountBalance: account_balance(where: {address: {_eq: $address}}) {
    balance
  }
  stake: stake_account_aggregate(where: {withdrawer: {_eq: $address}}) {
    nodes {
      nativeBalance: native_balance {
        balance
      }
    }
  }
  nonce: nonce_account_aggregate(where: {authority: {_eq: $address}}) {
    nodes {
      nativeBalance: native_balance {
        balance
      }
    }
  }
  validator: validator_aggregate(where: {withdrawer: {_eq: $address}}) {
    nodes {
      nativeBalance: native_balance {
        balance
      }
    }
  }
}
`;

export const NativeAccountCountDocument = /* GraphQL */`
query NativeRelatedAccountsCount($address: String) {
  stakeAccountAggregate: stake_account_aggregate(where: {withdrawer: {_eq: $address}}) {
    aggregate {
      count
    }
  }
  validatorAggregate: validator_aggregate(where: {withdrawer: {_eq: $address}}) {
    aggregate {
      count
    }
  }
  nonceAccountAggregate: nonce_account_aggregate(where: {authority: {_eq: $address}}) {
    aggregate {
      count
    }
  }
  tokenAccountAggregate: token_account_aggregate(where: {owner: {_eq: $address}}) {
    aggregate {
      count
    }
  }
}
`;

export const NativeRelatedAccountsDocument = /* GraphQL */`
query NativeRelatedAccounts($address: String) {
  stakeAccount: stake_account(where: {withdrawer: {_eq: $address}}) {
    address
  }
  validator(where: {withdrawer: {_eq: $address}}) {
    address
  }
  nonceAccount: nonce_account(where: {authority: {_eq: $address}}) {
    address
  }
  tokenAccount: token_account(where: {owner: {_eq: $address}}) {
    address
  }
}
`;

export const NativeAccountTokensDocument = /* GraphQL */`
query NativeAccountTokens($address: String) {
  token: token_account_balance(where: {token_account: {owner: {_eq: $address}}}) {
    balance
    tokenAccount: token_account {
      tokenUnit: token_unit {
        unitName: unit_name
      }
      tokenInfo: token_info {
        decimals
      }
    }
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
  tokenAccountBalance: token_account_balance(where: {token_account: {mint: {_eq: $address}}}, limit: 10, order_by: {balance: desc}) {
    balance
    address
  }
  token(where: {mint: {_eq: $address}}) {
    decimals
  }
}
`;
