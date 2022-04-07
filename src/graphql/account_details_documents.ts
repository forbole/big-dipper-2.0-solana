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
  }
  token(where: {mint: {_eq: $address}}) {
    mint
    freezeAuthority: freeze_authority
    decimals
    mintAuthority: mint_authority
  }
}
`;
