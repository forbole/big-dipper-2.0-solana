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
