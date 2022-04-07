export const AccountTypeDocument = /* GraphQL */`
query AccountType($address: String!) {
  actionsAccountInfo: actions_account_info(address: $address) {
    parsed
  }
}
`;
